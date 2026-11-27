"""Group students using confirmed memberships, research topics and credited papers."""

import json
from pathlib import Path
import re

import yaml


DATA = Path(__file__).resolve().parents[1] / "_data"
SUBJECTS = {
    "magnetic-materials": re.compile(
        r"磁特性|磁性能|磁性材料|磁致伸缩|磁滞|磁畴|巴克豪森|磁性组分|微磁|局部退磁|纳米晶磁芯高频损耗"
    ),
    "weak-field-sensing": re.compile(r"弱磁场|微小磁场|pT\s*级|ΔE\s*效应.{0,12}磁场传感", re.I),
    "soft-magnetic-composites": re.compile(r"软磁复合材料|粉芯|粉末包覆"),
    "electromagnetic-applications": re.compile(
        r"变压器|电抗器|电缆|电力电子|换流阀|能量采集|电磁高速运动|枢轨|导轨振动|接触电阻|法向接触"
    ),
}


def classify(directory, publications, contributions=None):
    if contributions is None:
        source = DATA / "research_contributions.yml"
        contributions = yaml.safe_load(source.read_text(encoding="utf-8"))
    confirmed = {}
    for area, entries in contributions.items():
        for entry in entries:
            if entry.get("confirmed"):
                confirmed.setdefault(entry["person"], []).append(area)

    author_names = {
        paper["news"]: {
            name.strip().casefold()
            for name in re.split(r"[,，、;；]", paper["authors"])
        }
        for paper in publications if paper.get("news")
    }
    roster = dict.fromkeys(
        record["person"]
        for level in directory["levels"]
        for cohort in level["cohorts"]
        for record in cohort["members"]
    )
    assignments = {}
    for key in roster:
        person = directory["people"][key]
        names = {name.casefold() for name in person["name"].values()}
        papers = {
            ref: directory["news"][ref]["title"]["zh"]
            for ref in person.get("publications", [])
            if names & author_names.get(ref, set())
        }
        candidates = []
        directions = confirmed.get(key, SUBJECTS)
        for direction in directions:
            terms = SUBJECTS[direction]
            topic = bool(terms.search(person.get("topic", {}).get("zh", "")))
            matches = [ref for ref, title in papers.items() if terms.search(title)]
            if key in confirmed or topic or matches:
                candidates.append({"area": direction, "topic": topic, "papers": matches})
        # A documented topic takes precedence over a link through co-authorship.
        candidates.sort(key=lambda item: (item["topic"], len(item["papers"])), reverse=True)
        assignments[key] = candidates[:2]
    return assignments


if __name__ == "__main__":
    directory = yaml.safe_load((DATA / "group_students.yml").read_text(encoding="utf-8"))
    publications = yaml.safe_load((DATA / "papers.yml").read_text(encoding="utf-8"))
    print(json.dumps(classify(directory, publications), ensure_ascii=False, indent=2))

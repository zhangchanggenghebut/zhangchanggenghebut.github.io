---
layout: page
title: 张长庚在石家庄工业软件研讨会上作邀请报告，介绍切割对电工钢磁性能的影响
date: 2023-10-19
date_precision: day
lang: zh-CN
hidden: true
permalink: /zh/news/shijiazhuang-industrial-software-electrical-steel/
excerpt: 张长庚结合冲压边缘的铁损测量、激光切边的磁畴图像和永磁电机算例，介绍如何把加工造成的磁性能退化纳入有限元模型。
---

2023 年 10 月 19 日，河北工业大学电气工程学院张长庚在石家庄参加工业软件基础科学和共性技术研讨会。16:20 至 16:40，他在第六分会场“电磁场与多物理场计算工业软件”作邀请报告《退化软磁材料的特性建模及电磁有限元模拟》，介绍如何把电工钢切边处实测的磁性能变化纳入电机仿真。

{% include news-photos.html group="shijiazhuang_2023_talk" %}

## 冲压边缘的局部铁损

同一片电工钢，靠近切边的材料和中心材料损耗相差多少？张长庚介绍了团队使用可移动式 B–H 传感器逐点测量无取向电工钢的方法。在报告展示的试样中，磁通密度为 1.6 T 时，样片中心的单位质量铁损约为 2.58 W/kg，距冲压边缘 2 mm 处最高达 3.15 W/kg。

{% include news-photos.html group="shijiazhuang_2023_punching" %}

## 激光切边附近的磁畴

在另一组激光切割试样上，团队从试样中心向切边观察磁畴。中心的绳状磁畴清晰可见。距切边 20–100 μm 处，单位面积内的磁畴数量减少，磁畴变宽。再往外，到距切边 20 μm 以内，图像中的磁畴轮廓已很难分辨。

{% include news-photos.html group="shijiazhuang_2023_domains" %}

## 把切边损伤纳入电机模型

张长庚以一台 24 槽、4 极永磁电机为例，介绍了如何在有限元计算中表示这种局部退化。团队按损伤程度将定子叠片划分为三个区域，分别赋予相应的磁特性，再比较计入切边退化前后算得的空载磁密分布、三相磁链和空载反电动势。

{% include news-photos.html group="shijiazhuang_2023_motor" %}

[查看 10 月 19 日分会场议程]({{ '/assets/news/2023/shijiazhuang-industrial-software/session-programme.jpg' | relative_url }}) · [河北工业大学会议通知](https://www.hebut.edu.cn/tzgg/18581fb6316344c3bef65c3351aaeba7.htm)

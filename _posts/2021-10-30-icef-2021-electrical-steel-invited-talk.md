---
layout: post
title: Changgeng Zhang gives an invited talk on modelling the magnetic properties of electrical steel at ICEF 2021
date: 2021-10-30
date_precision: day
lang: en
permalink: /2021/10/30/icef-2021-electrical-steel-invited-talk
categories: Conferences
tags: [ICEF, invited talk]
excerpt: At the eighth ICEF conference, Changgeng Zhang showed how measurements near a punched edge can inform electrical steel models and how the distribution of core loss changes a reactor’s predicted hot spot.
---

On 30 October 2021, Associate Professor Changgeng Zhang of Hebei University of Technology gave an invited talk at the eighth International Conference on Electromagnetic Field Problems and Applications (ICEF 2021). His presentation, *Electrical Steels Properties Modelling and Its Application in Electrical Apparatus*, was part of the online session on numerical electromagnetic field computation chaired by Professor Xiaojun Zhao. Zhang used motor laminations and a converter-valve reactor to show how manufacturing damage, the direction of magnetisation and the distribution of core loss affect device calculations. [Read the session report from North China Electric Power University.](https://ee.ncepu.edu.cn/xwdt3/75ac7e67186c4ce990b807ea62edcf03.htm)

## From the first meeting in Beijing to the eighth in Tianjin

The China Electrotechnical Society initiated ICEF, which first met in Beijing in 1988 and normally takes place every four years. It brings researchers who develop electromagnetic field models together with engineers who use them. Topics range from numerical methods, nonlinear materials and coupled fields to electric machines and drives, electromagnetic measurement and non-destructive testing. Hebei University of Technology hosted the eighth edition from Tianjin. The programme ran from 29 to 31 October. The pandemic moved the meeting online for the first time, with scientific sessions on 30 and 31 October. [Hebei University of Technology’s conference report](https://eweb.hebut.edu.cn/news/5a396f4816fe4ca49178211de0b76a25.htm)

The China Electrotechnical Society led the meeting with support from the Chinese Society for Electrical Engineering and the International COMPUMAG Society. The university’s State Key Laboratory of Reliability and Intelligence of Electrical Equipment organised the event. Weili Yan served as honorary chair, Qingxin Yang as general chair, and Xiang Cui and Shiyou Yang as co-chairs. Zhang also served on the conference editorial board. Authors from **12 countries and regions** submitted work. The organisers accepted **146 contributions** for oral presentation and scheduled a plenary and **12 oral sessions**. [Conference notice from the China Electrotechnical Society](https://www.ces.org.cn/html/report/21060313-1.htm) · [Guest editorial in *COMPEL*](https://doi.org/10.1108/COMPEL-01-2023-604)

{% include news-photos.html group="icef_2021_programme" %}

## How far does punching affect a lamination?

Punching a motor lamination changes the magnetic behaviour of the steel near the cut. Zhang showed local magnetisation curves recorded with a movable miniature probe. At the same applied field, flux density was lower closer to the edge. In the two non-oriented electrical steel specimens presented, the affected region extended about **8 mm** inwards at a punching pressure of **80 MPa** and **14 mm** at **250 MPa**. These measurements give a modeller a width to assign to the damaged material along the edge.

{% include news-photos.html group="icef_2021_edges" %}

## Accounting for the direction of magnetisation

Flux changes direction at transformer core joints and where a motor stator tooth meets the yoke. Zhang described an anisotropic material model that combines data from different magnetisation directions into a magnetic energy surface. Its gradient with respect to flux density gives the field strength. He showed how the two components of that field trace a path as the flux density rotates through one revolution.

{% include news-photos.html group="icef_2021_energy" %}

## Locating a reactor hot spot

For an anode saturable reactor in an ultra-high-voltage direct-current converter valve, Zhang compared two ways to pass core losses into a thermal model. Spreading the losses uniformly put the predicted hot spot in the upper part of the inner yoke at **117.7 °C**. Preserving their regional distribution moved it to the middle of the inner yoke at **119.5 °C**. The peak temperatures differed by only **1.8 °C**, but the predicted locations would lead an engineer to place a temperature sensor in different parts of the core.

{% include news-photos.html group="icef_2021_hotspot" %}

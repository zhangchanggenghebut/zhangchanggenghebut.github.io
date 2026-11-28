---
layout: post
title: Changgeng Zhang gives an invited talk in Shijiazhuang on how cutting affects the magnetic properties of electrical steel
date: 2023-10-19
date_precision: day
lang: en
categories: Conferences
tags: [Academic conferences, Magnetic measurements]
excerpt: Zhang used local core loss measurements, magnetic domain images and a permanent-magnet motor model to show how the effects of cutting can be represented in finite element simulations.
---

On 19 October 2023, Changgeng Zhang of the School of Electrical Engineering at Hebei University of Technology gave an invited talk at the Symposium on Basic Science and Common Technologies for Industrial Software in Shijiazhuang, China. He spoke from 16:20 to 16:40 in Session 6 on industrial software for electromagnetic and multiphysics computation. His talk, *Property Modelling and Electromagnetic Finite Element Simulation of Degraded Soft Magnetic Materials*, examined how measurements at the cut edge of electrical steel can inform motor simulations.

{% include news-photos.html group="shijiazhuang_2023_talk" %}

## Core loss near a punched edge

How much does core loss vary across a single sheet of electrical steel? Zhang described how his team used a movable B–H sensor to measure local magnetic properties point by point. At a flux density of 1.6 T, the specific core loss in the non-oriented electrical steel specimen was about 2.58 W/kg at the centre and reached 3.15 W/kg just 2 mm from the punched edge.

{% include news-photos.html group="shijiazhuang_2023_punching" %}

## Magnetic domains near a laser-cut edge

In a separate set of laser-cut specimens, the team examined magnetic domains at progressively shorter distances from the edge. Rope-like domains were clearly visible in the centre. At 20–100 μm from the cut, the domains were wider and fewer per unit area. Within 20 μm of the edge, individual domain outlines were difficult to distinguish in the images.

{% include news-photos.html group="shijiazhuang_2023_domains" %}

## Representing edge damage in a motor model

Zhang illustrated the modelling approach with a 24-slot, four-pole permanent-magnet motor. The team divided the stator laminations into three zones according to the severity of the damage and assigned each zone its own magnetic properties. They then compared the predicted no-load flux density distribution, three-phase flux linkages and no-load back EMF with and without the cut-edge degradation in the model.

{% include news-photos.html group="shijiazhuang_2023_motor" %}

[View the 19 October session programme (in Chinese)]({{ '/assets/news/2023/shijiazhuang-industrial-software/session-programme.jpg' | relative_url }}) · [Conference announcement from Hebei University of Technology (in Chinese)](https://www.hebut.edu.cn/tzgg/18581fb6316344c3bef65c3351aaeba7.htm)

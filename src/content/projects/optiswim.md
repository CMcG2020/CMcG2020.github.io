---
title: "OptiSwim"
description: "iOS and Android app that scores open-water swim conditions using marine and weather data, tailored to experience level and preferences."
category: "Apps"
tags: ["iOS", "Android", "SwiftUI", "Kotlin", "Open-Meteo"]
image: "https://raw.githubusercontent.com/CMcG2020/Optiswim/main/OptiSwim/Assets.xcassets/AppLogo.imageset/optiswim_logo.png"
gallery:
  - "/images/portfolio/optiswim/optiswim-home-dark.png"
  - "/images/portfolio/optiswim/optiswim-locations.png"
  - "/images/portfolio/optiswim/optiswim-settings.png"
  - "/images/portfolio/optiswim/optiswim-home-light.png"
  - "/images/portfolio/optiswim/optiswim-conditions.png"
featured: true
date: 2026-02-04
links:
  - label: "GitHub"
    url: "https://github.com/CMcG2020/Optiswim"
---

## Overview

OptiSwim is a mobile app that scores open-water swim conditions using marine and weather data, tailored to a swimmer's experience level and preferences. It helps you decide when and where conditions are safest and most comfortable.

## Key Features

- Current conditions and a multi-day hourly forecast
- Personalized scoring with adjustable thresholds and factor weights
- Safety warnings for hazardous conditions
- Favorite locations with notes and quick access
- Local notifications for daily checks and optimal windows
- On-device caching to reduce repeat network calls

## How It Works

OptiSwim combines marine (waves, swell) and weather (wind, temperature, UV, weather code) data into a single score. Profiles control thresholds and weights by experience level, and safety warnings override scores when conditions are risky.

## Data Sources

- Open-Meteo Marine (waves, sea level, sea surface temperature)
- Open-Meteo Weather (wind, air temperature, UV, precipitation, weather code)

## Platforms & Tech

- iOS app with SwiftUI
- Android app with Kotlin + Jetpack Compose

## Permissions

- Location access (when in use and optionally always) to show nearby conditions
- Notification access for daily and safety alerts

## Safety Note

Conditions and scores are informational only. Always use your own judgment and follow local safety guidance.

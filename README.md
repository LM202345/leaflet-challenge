# leaflet-challenge
## Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you will find a  visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet

## Part 1: Create the Earthquake Visualization

### Dataset:
https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

The USGS provides earthquake data in several different formats, updated every 5 minutes. To get the data set, I chose it as "All earthquakes in the last 7 days", which gives us a JSON representation of that data. I used the URL of this JSON to extract the data from the visualization.

https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

In the visualization you will find:

- A map that plots all earthquakes in the selected data set based on their longitude and latitude.
- Data markers that reflect the magnitude of the earthquake by its size and the depth of the earthquake by color. Higher magnitude earthquakes appear larger and deeper earthquakes appear darker in color.
- Includes pop-ups that provide additional information about the earthquake when its associated marker is clicked.
- A legend that will provide context for the map data.

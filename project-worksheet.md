# Project Overview

## Project Links

- [github repo link](https://github.com/carlynicholson/react-project)
- [add your deployment link]()

## Project Description

For my project, I'll be building out a website containing a tracker for COVID-19-related data (confirmed cases, etc.). 

Example sites:
1. https://google.org/crisisresponse/covid19-map
2. https://www.bing.com/covid


## API

[Coronavirus Data API](https://thevirustracker.com/api)


```
import React from "react";

export default function GlobalStats() {
  fetch("https://thevirustracker.com/free-api?global=stats")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));

  return <div />;
```


## Wireframes

- [US tracker](https://res.cloudinary.com/df6sigxz7/image/upload/v1585277946/covid-tracker/project-worksheet/main.png)
This will be the main page of my application. The table will hold live data, specifically tracking total cases, total recovered, and total deaths. 


## [Time/Priority Matrix](https://res.cloudinary.com/df6sigxz7/image/upload/v1585278437/covid-tracker/project-worksheet/priority_matrix.png)

Total time: 35hr

### MVP/PostMVP

#### MVP 
- Pull in live US data via API
	- Total cases
	- Total recovered
	- Total deaths

#### PostMVP

- US heatmap
- [Global tracker](https://res.cloudinary.com/df6sigxz7/image/upload/v1585277946/covid-tracker/project-worksheet/global.png)
	- Total cases
	- Total recovered
	- Total deaths
- Global heatmap

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :--- |  
| App | This will make the initial data pull and include React Router | 
| Header | This will render the header and include the nav | 
| US Data | This will render live COVID-19 data for the United States | 
| Footer | This will render the footer for the app | 


##### Time Frames

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 4 hours |   |   |
| Creating Data Table | H | 3.5 hours |   |   |
| Total | H | 7.5 hours |   |   |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Below is an example of the ability to pull global data for the tracker via the 
[Coronavirus Data API](https://thevirustracker.com/api).

```
import React from "react";

export default function GlobalStats() {
  fetch("https://thevirustracker.com/free-api?global=stats")
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));

  return <div />;
```

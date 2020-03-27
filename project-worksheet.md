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

Using the [Coronavirus Data API](https://thevirustracker.com/api), the below code returns currently accumulated statistics from the [Coronavirus Tracker](https://thevirustracker.com/) website.

```
{
   "results":[
      {
         "total_cases":565970,
         "total_recovered":129309,
         "total_unresolved":393120,
         "total_deaths":25421,
         "total_new_cases_today":34160,
         "total_new_deaths_today":1353,
         "total_active_cases":411240,
         "total_serious_cases":21381,
         "source":{
            "url":"https://thevirustracker.com/"
         }
      }
   ],
   "stat":"ok"
}
```


Object {results: Array[1], stat: "ok"}
results: Array[1]
0: Object
total_cases: 558416
total_recovered: 128754
total_unresolved: 393120
total_deaths: 25262
total_new_cases_today: 26606
total_new_deaths_today: 1194
total_active_cases: 404400
total_serious_cases: 21071
source: Object
url: "https://thevirustracker.com/"
stat: "ok"


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
| About | This component will render information about the app | 
| Footer | This will render the footer for the app | 

##### Time Frames

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 4 hours |   |   |
| Creating Data Table | H | 3.5 hours |   |   |
| Total | H | 7.5 hours |   |   |

## Additional Libraries
 [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)

## Code Snippet

Using the [Coronavirus Data API](https://thevirustracker.com/api), the below code returns accumulated statistics from the [Coronavirus Tracker](https://thevirustracker.com/) website. 

```
{
   "results":[
      {
         "total_cases":565970,
         "total_recovered":129309,
         "total_unresolved":393120,
         "total_deaths":25421,
         "total_new_cases_today":34160,
         "total_new_deaths_today":1353,
         "total_active_cases":411240,
         "total_serious_cases":21381,
         "source":{
            "url":"https://thevirustracker.com/"
         }
      }
   ],
   "stat":"ok"
}
```

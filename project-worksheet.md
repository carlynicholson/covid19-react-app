# Project Overview

## Project Links

- [github repo link](https://github.com/carlynicholson/react-project)
- [add your deployment link](https://novel-covid19.netlify.com/)

## Project Description

For my project, I'll be building out a website containing a tracker for COVID-19-related data (confirmed cases, etc.). 

Example sites:
1. https://google.org/crisisresponse/covid19-map
2. https://www.bing.com/covid


## API

Novel Coronavirus (COVID-19) Cases data provided by [JHU CSSE](https://github.com/CSSEGISandData/COVID-19).

Data transformed into a JSON file by [Covid19](https://github.com/pomber/covid19) project. 

The JSON file contains the following Coronavirus data for every country: 
- Date of recorded data
- Confirmed cases
- Deaths
- Recovered cases

The data is updated three times a day, and recorded daily, beginning January 22, 2020.


```
{
   "US": [
      {
            "date": "2020-1-22",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
      },
      {
            "date": "2020-1-23",
            "confirmed": 1,
            "deaths": 0,
            "recovered": 0
      },
      ]
}
```


## Wireframes

[Global tracker](https://res.cloudinary.com/df6sigxz7/image/upload/v1585329950/covid-tracker/project-worksheet/covid-tracker.png)

This will be the main page of my application. The table will hold live data, specifically tracking total cases, total recovered, and total deaths. 


## [Time/Priority Matrix](https://res.cloudinary.com/df6sigxz7/image/upload/v1585278437/covid-tracker/project-worksheet/priority_matrix.png)

Estimated time: 25.5 hours

### MVP/PostMVP

#### MVP 
- Pull in live Global data via API
	- Total cases
	- Total recovered
	- Total deaths

#### PostMVP

- Global map
- [US tracker](https://res.cloudinary.com/df6sigxz7/image/upload/v1585277946/covid-tracker/project-worksheet/main.png)
	- Total cases
	- Total recovered
	- Total deaths
- US map

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :--- | 
| App | This will make the initial data pull and include React Router | 
| Header | This will render the header and include the nav | 
| Global Data | This will render live global COVID-19 data | 
| Global Map | This will render live global COVID-19 data on a world map | 
| About | This component will render information about the app | 
| Footer | This will render the footer for the app | 

##### Time Frames

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Header | H | 3 hours | 1.5 hours | 1.5 hours |
| Global Data Table | H | 7 hours | 15 hours | 15 hours |
| Global Data Map | H | 8 hours | 16 hours | 16 hours |
| Working with API | H | 5 hours | 10 hours | 10 hours |
| Footer | M | 1.5 hours | 0.5 hours | 0.5 hours |
| About | L | 1 hour | 0.5 hours | 0.5 hours |
| Total |   | 25.5 hours | 43.5 hours | 43.5 hours |

## Additional Libraries
 [Ramda](https://ramdajs.com/docs/)

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

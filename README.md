# COVID-19 Tracker

## Overview
The COVID-19 tracker is a project that was initially assigned during my Software Engineering Immersive (SEI) course with General Assembly. It was assigned to give students a chance to use the skills learned in class to build a modular and modern front end application using React.

## Demo
Quick demo of site can be found [here](/).

## Wireframes

[Global tracker](https://res.cloudinary.com/df6sigxz7/image/upload/v1585329950/covid-tracker/project-worksheet/covid-tracker.png)

This will be the main page of my application. The table will hold live data, specifically tracking total cases, total recovered, and total deaths. 

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


## Future Plans
- Global map
- [US tracker](https://res.cloudinary.com/df6sigxz7/image/upload/v1585277946/covid-tracker/project-worksheet/main.png)
	- Total cases
	- Total recovered
	- Total deaths
- US map

## Known Issues


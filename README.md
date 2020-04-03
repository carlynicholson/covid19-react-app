# [COVID-19 Tracker](https://novel-covid19.netlify.com/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/81fa3988-aefa-42e2-9bcb-67776344efe0/deploy-status)](https://app.netlify.com/sites/novel-covid19/deploys)

## Overview
The [COVID-19 tracker](https://novel-covid19.netlify.com/) is a project that was initially assigned during my Software Engineering Immersive (SEI) course with General Assembly. The assignment was for students to individually build a React application of their choice. 

## Wireframes
[Global tracker](https://res.cloudinary.com/df6sigxz7/image/upload/v1585329950/covid-tracker/project-worksheet/covid-tracker.png)

This will be the main page of my application. The table will hold live data, specifically tracking total cases, total recovered, and total deaths. 

## Code Snippet
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

## Additional Libraries
 [Ramda](https://ramdajs.com/docs/)

## Future Plans
- Add flag icons to Statistics table
- [US tracker](https://res.cloudinary.com/df6sigxz7/image/upload/v1585277946/covid-tracker/project-worksheet/main.png)
	- Total cases
	- Total recovered
	- Total deaths
- US map

## Known Issues


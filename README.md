Weather Forecast Web App
========================

## About

This is a React Redux based app that allows a user to search for a city.
Weather data about said city is then appended onto a table to view. 
Currently supported data types are:
  - Wind Speed
  - Temperature
  - Humidity
  
A mini map of the search location is also displayed so the User can be sure they have searched for the correct location.

## Mockup

![Mockup](https://github.com/JonnyPickard/weather-forecast-react/blob/master/docs/WeatherForcastWebAppMockup.png)

## Screenshot of finished application
![ScreenShot](https://github.com/JonnyPickard/weather-forecast-react/blob/master/docs/WeatherForcastAppScreenshot.png)

## Use + Installation

> Note: Im using the $ symbol to specify the start of a bash command, please run these in a bash shell.

1. `$ git clone git@github.com:JonnyPickard/weather-forecast-react.git`
2. `$ cd weather-forecast-react`
3. `$ npm install`
4. `$ touch build_and_run.sh; chmod a+x build_and_run.sh`
5. Navigate to https://openweathermap.org/ and sign up/ sign in.
6. Navigate to https://home.openweathermap.org/api_keys and copy your api key.
7. Run the following command making sure to paste your api key at (paste owmp api key here): `$ echo "API_KEY=(paste owmp api key here) / 
NODE_ENV=development /
node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js" >> ./build_and_run.sh`
8. `$ npm start` - Should now run your app by running ./build_and_run.sh. You can navigate to localhost:8080 in a browser to view the app.

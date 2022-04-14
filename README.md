# Interview Scheduler

The scheduler is a single-page web application that provides users with the functionality to book, edit or delete interviews from Monday to Friday. 
Users can also cancel an existing interview or edit the details of the interview. The client application communicates with a WebSocket server, so when a user book, cancel or edit an interview, all connected users see the update in their browser.

## Setup

Install dependencies with `npm install`.
    
- babel/core
- storybook/addon-actions
- storybook/addon-backgrounds
- storybook/addon-links
- storybook/addons
- storybook/react
- testing-library/jest-dom
- testing-library/react
- testing-library/react-hooks
- babel-loader
- cypress
- node-sass
- prop-types
- react-test-renderer



## Setup Interview Scheduler API

Setup Interview Scheduler API  <https://github.com/MustafaPaigeer/scheduler-api>

__Please make sure to run the API first__

## Run Webpack Development Server

npm start

## Run Jest Test Framework

npm test

## Run Storybook Visual Testbed

npm run storybook

## App Screen Shots

!["Appointments page"](https://github.com/MustafaPaigeer/scheduler/blob/master/docs/scheduler-1.png)

!["Booking an Appointment"](https://github.com/MustafaPaigeer/scheduler/blob/master/docs/scheduler2.png)

!["Removing an Appointment"](https://github.com/MustafaPaigeer/scheduler/blob/master/docs/scheduler3.png)
# Sojourn Travel App
WDI group project by Ben Brizzi, Megan Coyle, and Taylor Edwards

## Overview
Sojourn is a travel app to help users plan their trips.

## Deployed App
[![Screenshot](screenshot.png)](https://sojourn-travel.herokuapp.com)

[View Sojourn](https://sojourn-travel.herokuapp.com)

## Technologies Used
* [Angular JS](https://angularjs.org/): front-end
* [Ruby on Rails](http://rubyonrails.org/): back-end
* [Angular Material](https://material.angularjs.org/latest/): calendar picker and tabs
* [Bower](https://bower.io/): package manager
* [Google Maps Angular API](http://angular-ui.github.io/angular-google-maps/)
* [Heroku](http://www.heroku.com/): hosting the deployed app

## Approach
The group decided to work on a travel app that would allow users to plan trips. We decided to start off with a basic CRUD app since we were new to using Angular JS, and wanted to get the basics in place first before rolling out any additional features.

Although we considered hosting the API for the application separately, mounting Angular on Rails made it easier to test the application since we were able to run it on one server. This created a challenge to get the basics of the app up and running, but once they were in place, it was easier to make updates and changes.

Launching the app to Heroku also proved to be a little difficult, but it involved a little troubleshooting to figure out how to load all the dependencies properly.

## Planning
### User Stories
[Check out the user stories here](planning/user_stories.md)

## Unsolved Problems/Next Steps
* Rolling out a has many association for the two APIs
* Finding other ways to make the app more interactive for users (i.e. adding drag and drop for content)

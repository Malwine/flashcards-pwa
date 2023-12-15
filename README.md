# Flashcards

This is the repository for my bachelor thesis. I am building a vocabulary learning app with [preact-cli](https://github.com/developit/preact-cli).

The app is deployed at [glitch](https://flashcards-pwa.glitch.me/).

## Thesis Abstract
In 2018 for the first time more than half of the world’s population was connected to the internet. A large part of the global internet users just gained access in the last years. There has been a shift in the way users connect to the internet from the desktop computer on broadband landlines to the smartphone on cellular networks.  
This shift requires some rethinking in software development as naturally the requirements change. This thesis seeks to explore the circumstances of internet connection and introduces new approaches of the web platform to tackle these circumstances.

For a proof of concept a prototype of a progressive web app was implemented which can be installed on a smartphone and is usable offline. To analyze the requirements, commuting from home to work or school was chosen as a scenario exploring different modes of connection.

Even though mentioned in the title of [the] thesis, gamification is not a focus as the exploration of connectivity-independence seemed more relevant for the scenario.

## How to get started
Requirements: [node](https://nodejs.org/en/) must be installed.
To run the app use the commands below in your terminal.

``` bash
# To install dependencies run:
npm install

# To serve with hot reload at localhost:8080 run:
npm run dev

# To build for production with minification and own index.html template run:
preact build --template src/index.html

# To test the production build locally run:
npm run serve

# To run tests with jest and preact-render-spy run:
npm run test
```

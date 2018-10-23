# Stockmarket Simulation

[![Greenkeeper badge](https://badges.greenkeeper.io/stockmarkat/stockmarket-simulation.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/stockmarkat/stockmarket-simulation.svg?branch=master)](https://travis-ci.org/stockmarkat/stockmarket-simulation)
[![Maintainability](https://api.codeclimate.com/v1/badges/1b146f1983bf715406e3/maintainability)](https://codeclimate.com/github/stockmarkat/stockmarket-simulation/maintainability)

This is a Stockmarket Simulation.

At the start of the simulation the user has a capital of $ 10 000 that he can invest into various stocks. Ultimately, the user's goal should be to trade the stock as intelligently as possible in order to own as much money as they can. In spite of this goal, the user should pay attention to what he or she is effecting with his or her investment, especially with morally questionable companies. 

- The price of all stocks change in real time and the the category of a stock determines how volatile its price is. 
- There are various quests that offer an incentive to buy certain stocks or stock categories.
- The simulation can be terminated at any time and then restarted with the same status.

[Try it out](https://stockmarket.netlify.com/)


## Run locally
It's easy to run a local instance of this simulation - just clone the repository, run `yarn install` ([installation instructions for yarn](https://yarnpkg.com/en/docs/install)) and use:

- `yarn test` for tests
- `yarn start` to run
- `yarn storybook` to test the components with [Storybook](https://github.com/storybooks/storybook)

## Contribute

Any type of feedback, pull request or issue is welcome. Follow the "Run locally" section of this documentation to learn how to debug the project.

## License
[MIT](https://tldrlegal.com/license/mit-license)

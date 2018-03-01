# stockmarket-simulation

This is a Stockmarket Simulation.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this Project you need to have the following Things Installed on your local machine

- Npm
- Yarn
- dotnet core 2.0


### Installing

#### Run the Service

```
cd .\service
dotnet restore
dotnet run --project .\Stockmarket.Simulation\Stockmarket.Simulation.csproj
```

#### Run the UI

if you are using yarn
```
cd .\web-ui
yarn
yarn start
```
if you are only using npm
```
cd .\web-ui
npm install
npm run start
```


## Running the tests

```
yarn test
```
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
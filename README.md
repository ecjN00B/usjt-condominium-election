# Condominium Election App Project

This is a condominium election app developed in a project of the University of São Judas Tadeu, whose objective is to make an election where electors can vote in candidates through the application.

See the app [here](https://ecjn00b.github.io/usjt-condominium-election/)

## Getting Started

### Prerequisites

Before you can run the application, make sure that you have the following software installed:
* [NPM](https://www.npmjs.com/get-npm)
* [Ionic](https://ionicframework.com/docs/intro/installation/) or `npm install -g ionic cordova`

And add in src folder a env.ts file with your firebase credentials. ([See template](docs/templates/env.template.ts))

**Caution:** You can comment service-worker in index.html during development. If you do have this line uncommented, make sure to tick the ‘Update on reload’ or ‘Bypass for network’ options in the Application > Service Workers section of Chrome DevTools. You can also manually stop/unregister service workers from here as well.

## To Do

### Prod v1.0
- [X] Create user
- [X] Read user
- [X] Update user
- [ ] Delete user
- [X] Generate user QrCode

### Prod v1.1
- [X] Read candidate QrCode
- [ ] Register vote in RESTful Web Service

### Prod v1.2
- [X] Verify that candidate data has been loaded
- [X] Read the data of candidates stored in the RESTful Web Service
- [X] Consult candidate information

### Prod v1.3
- [ ] Reads the current votes in the RESTful Web Service
- [ ] Counts the votes by candidate
- [ ] Presents the current votes

### Prod v1.4
- [ ] Count the votes by candidate and date
- [ ] Presents voting history every 15 days

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ecjN00B/usjt-condominium-election/tags).

## Authors

* **Elias de Carvalho Junior** - [ecjN00B](https://github.com/ecjN00B)
* **Matheus Zaggia Franco** - [MatheusZaggia](https://github.com/MatheusZaggia)
* **Walace Martins da Silva** - [walaceMartins](https://github.com/walaceMartins)

See also the list of [contributors](https://github.com/ecjN00B/usjt-condominium-election/contributors) who participated in this project.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE.md](LICENSE.md) file for details.

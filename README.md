# HighGround

Application that manages real-time availability of emergency flood parking spots.

Consists of:
* Ember frontend in /app
* Scriptr.io scripts in /scripts

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Good example in circle.yml and firebase.json of a CI workflow for EmberJS using CircleCI and Firebase for hosting.
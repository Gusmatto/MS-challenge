# MS-CHALLENGE - AUTOMATION FLOW IN ML

Automated App Test Cases

This is an automated suite of test cases to check user experience searching for a car, based on some filters. (https://www.mercadolibre.com.ar/) 

The script is written in Playwright framework (https://playwright.dev/) and use Javascript and NodeJS as programming language.

As runner and tesuite output, use Jest .

## Installation

Use the package manager [npm](https://www.npmjs.com/), and as a precondition you need to have installed [NodeJS](https://nodejs.org/en/). Then need to create an empty npm project, 
install Playwright and Jest

```bash

npm init -y

npm install -D playwright

npm install -D jest

```
## Requirements

To run the tests with Jest you need to update the value of "scripts" in the package.json file and put "jest".

## Environment

The local project was developed in Windows 11.

## How to

The script can be executed in an integrated development environment or from the console.

To run it you have to use Jest: 

```bash
npm test

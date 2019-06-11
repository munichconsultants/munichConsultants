#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');


// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

// Text + chalk definitions
const data = {
  'name': chalk.bold.blue.bold('MunichConsultants'),
  'handle': chalk.blue(''),
  'about': chalk.white('We are a bunch of enthusiastic developers for front- and backend projects. \nWe focus on .net, Angular and Node and other new fancy shit :) \nOur specialists will help you with every aspect of your software lifecycle.'),
  'github': chalk.cyan('https://github.com/munichconsultants'),
  'web': chalk.cyan('http://munichconsultants.tech'),
  'mail': chalk.cyan('info@munichconsultants.tech'),
  'npx': chalk.white('npx munichconsultants'),
  'labelWork': chalk.white.bold('      Work:'),
  'labelGitHub': chalk.white.bold('    GitHub:'),
  'labelMail': chalk.white.bold('      Mail:'),
  'labelWeb': chalk.white.bold('       Web:'),
  'labelCard': chalk.white.bold('      Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const about = `${data.about}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const webing = `${data.labelWeb}  ${data.web}`;
const emailing = `${data.labelMail}  ${data.mail}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + about + newline + newline  + newline + githubing + newline + webing + newline + emailing + newline + newline + carding;

console.log(chalk.blue(boxen(output, options)));



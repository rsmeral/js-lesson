#!/usr/bin/env node
const chalk = require('chalk');

const {calculateTripPrice: car4way} = require('./car4way');
const {calculateTripPrice: autonapul} = require('./autonapul');

const SERVICES = {
  car4way,
  autonapul
};

const printUsage = () => {
  console.log(
    chalk.bold('Carsharing Trip Price Calculator\n') +
    chalk.dim('Usage:\n') +
    '$ carsharing <service> <distance> <duration>'
  );
}

/**
 * Validates arguments and returns them.
 * 
 * @returns {{
 *   service: string,
 *   distance: number,
 *   duration: number
 * }} Object containing the validated arguments
 */
const getValidArgs = () => {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    printUsage();
    process.exit(1);
  }

  const [service, distanceStr, durationStr] = args;

  if (!Object.keys(SERVICES).includes(service)) {
    console.error(chalk.red(`Invalid service: '${service}'. Valid values: ${Object.keys(SERVICES).join(', ')}`));
    process.exit(1);
  }

  const distance = Number.parseInt(distanceStr);
  const duration = Number.parseInt(durationStr);

  if (Number.isNaN(distance) || Number.isNaN(duration)) {
    console.error(chalk.red('Distance and duration must be numbers.'));
    process.exit(1);
  }

  return {
    service,
    distance,
    duration
  };
}

/**
 * Runs the program.
 */
const main = () => {
  const {service, distance, duration} = getValidArgs();

  const price = SERVICES[service](distance, duration);
 
  console.log(chalk`The price of a trip of {cyan ${distance} km} taking {cyan ${duration} minutes} with {cyan ${service}} is: {bold ${price}} Kč`);
}

main();
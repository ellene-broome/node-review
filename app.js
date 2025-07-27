

// app.js
import chalk from 'chalk';
import { extractDates, extractTimes } from './utils.js';

console.log(chalk.magenta.bgWhite.bold("Hello, World!"));

console.log(chalk.bold.blue(extractDates("Today is 7/27/2025 and tomorrow is July 28,2025.")));

console.log(extractTimes("I have a dentist appointment at 9:30 AM and a meeting at 3:00 PM."));

const newText = "⚠️ The meeting needs to be rescheduled to 10:00 AM on 8/1/2025.";

console.log(chalk.bold.red(extractDates(newText)));
console.log(chalk.bold.bgRed(extractTimes(newText)));

console.log(chalk.bgBlue.white(" Background Blue, White Text "));
console.log(chalk.bold.red("⚠️  This is a bold red warning"));
console.log(chalk.underline.green("This is an underlined green message"));
console.log(chalk.inverse.yellow("This is an inverted yellow message"));
console.log(chalk.strikethrough("This text is strikethrough"));
console.log(chalk.blue.bgWhite.bold("This is a blue text on white background with bold style"));

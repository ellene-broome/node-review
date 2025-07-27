
# Node Review – Regex Utility Project

This project demonstrates the use of a custom Node.js utility module that uses **regular expressions** to extract dates and times from plain text input. It reinforces working with:
- JavaScript modules (`import`/`export`)
- Regular expressions (`RegExp`)
- Running scripts with `npm start`

## Project Structure

```
node-review/
├─app.js          - Main entry file
├── utils.js        - Custom utility functions
├── package.json    - Project metadata  and script
└── README.md       - Project intro file
```

## How to Run

- Open Terminal
- Go to project folder: 
  `cd node review`
- Run the app:
  `npm start`
- Results will print

## Example Output

When you run `node app.js`, you’ll see something like:

```
Hello, World!
[ '7/27/2025' ]
[ '9:30 AM', '3:00 PM' ]
[ '8/1/2025' ]
[ '10:00 AM' ]
```

## Features

- Extracts **dates** in formats like:
  - `MM/DD/YYYY`
  - `Month DD, YYYY`

- Extracts **times** in formats like:
  - `HH:MM AM/PM`

## Code Highlights

```js
// utils.js
export function extractDates(text) {
  const dateRegex = /\b(\d{1,2}[-/]\d{1,2}[-/]\d{2,4}|[A-Za-z]{3,9} \d{1,2},? \d{2,4})\b/g;
  return text.match(dateRegex) || [];
}

export function extractTimes(text) {
  const timeRegex = /\b\d{1,2}:\d{2} ?[APap][Mm]\b/g;
  return text.match(timeRegex) || [];
}

// app.js
import { extractDates, extractTimes } from './utils.js';

```

## Author

Ellene Broome  
[GitHub Profile](https://github.com/ellene-broome)

# Web Q5Y Checker

Testing: SEO audit, Lighthouse audit with Jest

## Installation

- `npm add @kavrillon/web-q5y` or `yarn add @kavrillon/web-q5y`
-

### Testing Conf

1. In your `package.json`, add a new script:

```
  "scripts": {
    ...
    "test:e2e": "JEST_PUPPETEER_CONFIG=node_modules/@kavrillon/web-q5y/jest-puppeteer.config.js jest test --runInBand --detectOpenHandles --config=node_modules/@kavrillon/web-q5y/jest.config.js"
  },
```

2. Create a conf file at the root of your app named `.q5yrc`.

Copy the content in `sample.q5yrc` in your file, and customize the url and routes you want to test.

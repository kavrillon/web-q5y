# Web Q5Y Checker

Testing: SEO audit, Lighthouse audit with Jest

## Installation

1. `npm add @kavrillon/web-q5y` or `yarn add @kavrillon/web-q5y`
2. Add the `test:e2e` command in your `package.json`:

```
  "scripts": {
    ...
    "test:e2e": "JEST_PUPPETEER_CONFIG=node_modules/@kavrillon/web-q5y/jest-puppeteer.config.js jest test --runInBand --detectOpenHandles --verbose --config=node_modules/@kavrillon/web-q5y/jest.config.js"
  },
```

3. Create a conf file at the root of your app named `.q5yrc`, and copy/paste the content of the `sample.q5yrc` file. This file will contain all your testing conf.

### Testing Conf

- `command`: the command that will launch the server. If not provided, no server will be launched, it will only listen for the given url.
- `loadedSelector`: if provided, we will wait for this selector existence before launching tests. It is useful for testing SPAs, as the content is generated clientside.
- `url`: the host url to test
- `port`: the port to test
- `routes`: array of the routes to test (do not put the host nor the port)
- `thresholds`: for Lighthouse audit, minimum percentage to make test pass (for each category).

### Tests done

#### SEO Audit

Check presence of meta title, description, headings, etc.

#### Lighthouse Audit

Pass a Lighthouse Audit via Puppeteer (a11y, perfs, best practises, seo, page speed, pwa, etc.)

# selenium-project-yugioh

Run the following command first to create your node-modules:
`npm install`

Run the follow command and the right settings:
`npx wdio config`

Select The right options:
? Where is your automation backend located? `On my local machine`
? Which framework do you want to use? `cucumber`
? Do you want to use a compiler? TypeScript `(https://www.typescriptlang.org/)`
? Where are your feature files located? `./test/demo/**/*.feature`
? Where are your step definitions located? `./test/step-definitions/*.ts`
? Do you want WebdriverIO to autogenerate some test files? `No`
? Which reporter do you want to use? `spec`
? Do you want to add a service to your test setup? `chromedriver`
? What is the base url? `http://localhost`

Run the project with the following command:
`npx wdio wdio.conf.ts`

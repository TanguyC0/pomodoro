# pomodoro

## introduction

this project was proposed by [becode coaches]() as a way to learn react.
It's a package of 3 exercises:
* [pomodoro](https://github.com/TanguyC0/pomodoro) - [demo](https://pomodoro-t.netlify.app)
* [weather app]()
* [game app]()

## workflow

### Introduction

You will use [React](https://reactjs.org) to create a simple Pomodoro timer.  
It will be _static_, without the need for a server.

You will also discover some build tools, with [Parcel](https://parceljs.org/), and will follow some code quality rules, with [Prettier](https://prettier.io) and [ESLint](https://eslint.org).

### Statement

Following these _beautiful [wireframes](./wireframes.jpg)_, you will code a pomodoro timer.

#### Minimal requirements

- Display a big timer (minutes and seconds).
- Four buttons:
  - **plus (+)** and **minus (-)**, they will allow the user to adjust the _minutes counter_ - **only when it's stopped**.
  - **start**, to run the timer (it will then change to **stop**), to serve as a _toggle_ button
  - **reset**, to… reset the timer to its original value
- At the end of the timer, show a modal to invite user to _take a break_. The modal will have two buttons:
  - One to close the modal
  - Another to close the modal _and_ start a new timer

#### Optional additions

You can add anything to the timer, as long as the minimal requirements are fulfilled.

You can add a sound at the end of the timer, add another timer in the modal to limitate the break time, add animations… feel free to try anything!

### Technical concerns

#### Tooling

##### ⚠️ Learning first

In the React's documentation you'll see some solutions to create your app. One of them is **Create React App**, which is a toolchain containing an environment set up. We advise you to **not use** this for your Pomodoro.

Why ? Because this complete environment will not help you to learn all the basis about React. Later, when you'll have to build a more complex application, you could be stuck and encounter unexpected issues.

So we recommend to build your app using a bundler.

##### Build tool :

As you will see, React makes you create and handle many different files.  
Keeping track of each of them and reference them in your html file can be a real _pain in the a$!%_.

We will need a build tool, a _bundler_, to create a final file from all our components.

There's many build tools around, the most popular (and complete) is [webpack](https://webpack.js.org) which is provided by default in the Create React App toolchain.  
It's a really complex tool, so we will not use it for your first project (it will be for the next time).

To make it yourself easier, use either Parcel or Vite.

##### Code Quality

Even if you're working alone on this project, we need you to enforce your _code quality_.

You will use [Prettier](https://prettier.io) to format your code, and [ESLint](https://eslint.org) to ensure your code following _good practices_.

You will use the [BeCode Presets](https://github.com/becodeorg/eslint-config). When your project's package.json file is created, execute the following command: `npx @becode/eslint-config --with-hook`.

It will install Prettier & ESLint and a _git hook_ to run it before your commits.

> ⚠️ **NOTE:** if there's an ESLint error in your code, your commit will not be allowed. Correct the error and retry!
> 🧨 **WARNING:** disable ESLint **is not** an option!
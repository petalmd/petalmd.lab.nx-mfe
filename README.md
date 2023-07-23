

# Petal

## Adding capabilities to your workspace

Currently uninstalled but will probably be necessary : 

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`

## Generate an application

### Angular

Run `npx nx g @nx/angular:host my-app --dynamic` for a new Dynamic Module Federated Angular Shell Application
Run `npx nx g @nx/angular:remote my-app --host=shellName` for a new Angular Remote Application

### NestJS

Run `npx nx g @nx/nest:app my-app --frontendProject my-frontend` to create a new NestJS app with a proxy between FE and BE

## Generate a library

### Angular

To be added

### React

Run `nx g @nrwl/react:lib my-lib` to generate a library.

### NestJS

Run `nx g @nx/nest:lib my-lib` to generate a library

## Development server

Run `npx nx serve my-shell` to run your shell application with its remotes

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

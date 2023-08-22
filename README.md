# Tailwind-Vite-RTK-Query-Graphql-Exemple

## Overview

This project aims to provide a user-friendly interface for users to view player statistics side by side and access details of winning matches. The project is developed using TypeScript, Redux Toolkit (RTK) for state management, Tailwind CSS for styling, and consumes data via a GraphQL server using RTK Query. The goal is to provide a pleasant user experience while adhering to code standards, simplicity, and efficiency.

## Getting Started

To use this code, you will need to have Node.js and yarn installed on your machine. Once you have cloned the repository, navigate to the project directory and run the command yarn install to install the required dependencies.

## Dependencies

- [Vite](https://vitejs.dev/) : Fast and opinionated development build tool that supports modern web development.
- [React](https://reactjs.org/) : JavaScript library for building dynamic user interfaces with reusable components.
- [Redux](https://redux.js.org/) : State management library for predictable state changes.
- [Redux Toolkit](https://redux-toolkit.js.org/) : Efficient and user-friendly library for managing application state.
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) : eliminating the need to hand-write data fetching & caching logic.
- [React Router](https://reactrouter.com/en/main) : Routing library for React, enabling smooth client-side navigation.
- [Tailwind CSS](https://tailwindcss.com/) : Utility-first CSS framework for rapid UI development.


## How to Use

1. `Clone` the repository to your local machine.
2. Install dependencies using `yarn install`.
3. Run the development server using `yarn dev`.
4. Access the application at `/http://localhost:5173/`.

## Project Structure

- `src/`: Contains all the source code for the application.
    - `app/`: Contains all the Redux features used in the application.
        - `__tests__/`: containes match and player test with selectors test .
        - `api/`: Contains all the files related to handling API requests with RTK Query.
        - `slice/`: containes the reducers of matches and players.
        - `types/`: Contains all project types .
     - `components/`: Contains all the React components used in the application.
        - `Card/`: display players Information.
        - `Details/`: display players with there winner match.
        - `Loading/`: display spinner.
    - `fixtures/`: Contains all data sets for tests (JDD).
    - `pages/`: Contains all project pages.
    - `utils/`: Contains all tools.
  - `App.tsx`: The main component that renders all other components.
  - `index.css`: Contains all the necessary CSS for the application.
  - `main.tsx`: The application's entry point that renders the App 

### Usage
- [follow this url](https://codesandbox.io/s/github/reduxjs/redux-toolkit/tree/master/examples/query/react/graphql?from-embed=&file=/src/App.tsx)

- The `store` module configures the Redux store with the player and match slice reducer and middleware.


### Key Features

 - use TypeScript
 - use Redux toolkit for state management
 - use Tailwind CSS for styling 
 - have a test e2e test
 - have unit tests consume GraphQL from the following endpoint: [GraphQL server](https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/)


##

Developed with ❤️ by Rinda Gharbi.
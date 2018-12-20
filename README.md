# Personal Site Source Code
This is the source code for Erika Miguel's personal site. It is a React/Redux application hosted on GCP Firebase. It can be viewed at [https://erikamiguel.com](https://erikamiguel.com)

# Project Setup with Yarn
## Installation
To install all package dependencies, run:
`yarn install`

## Production Build
To create production build:
`yarn build`

# Local Development Server 

## Development Server without Firebase
To run the dev server:
`yarn start`

# Local Development with Firebase
## Setup Firebase
1. Install firebase tools with `npm install -g firebase-tools`
2. Login to firebase with `firebase login`
3. Initialize the firebase project via `firebase init`. Choose **Hosting**, Single Page Application as Yes, and folder as **build**

## Firebase Development Server
To run the local firebase dev server:
`firebase serve`

# Deploying to Firebase
```
yarn build
firebase deploy
```

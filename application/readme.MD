# Toy gun tourret

## Computer application for control a tourret

The application is developping with Electron and React.JS. I'm use a serial-port library for communication between arduino and computer application.

## For use my application

##### Clone the projet
`git clone git@github.com:alban-lautie/gun-turret.git`

##### Go in application directory
`cd application`

##### Install a dependencies
`npm install`

##### Write your arduino uri
Write arduino uri in a configuration file. The configuration file is located in app/configuration directory.

##### Compile application
`npm run compile` // Only macOs executable. The executable is located in release-builds directory.
`npm run build && npm start` // All OS

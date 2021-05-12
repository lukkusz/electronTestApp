# Getting Started with Electron React App

## Available Scripts

In the project directory, you can run:

### `yarn start` `npm start` 

Runs the app in the development mode.\
Open [http://localhost:3005](http://localhost:3005) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Build sources

### `npm run electron-dev`

Runs electron in development mode

### `npm run electron-pack`

Creates Electron desktop installer.


## Development

Dependencies needed to by installed
`npm install --save-dev electron`
`npm install -g electron-builder`

For easy development uncomment in main.js in line 15
```javascript
  win.loadURL('http://localhost:3005');
```
and comment line 16 
```javascript
  //win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
```

In first console run `npm start` and in second console run `npm run electron-dev`

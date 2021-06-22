const { Client } = require('discord-rpc')


const client = new Client({ transport: 'ipc' }),
    clientId = '856567137555316737';



const startTimestamp = new Date();


function updateRP() {


    var activity = {
        state: "Programming ;)",
        details: "Making Project: Untitled",
        startTimestamp,
        largeImageKey: "launchpad",
        largeImageText: "Making Light Efeect"
    }

    client.setActivity(activity);

}


client.on('ready', () => {
    console.log("> Connected to Discord using Photoshop Rich Presence!");

    updateRP();
    setInterval(() => {
        updateRP();
    }, 15e3);
});

client.login({ clientId }).catch(console.error);

//==============================================================
//==============================================================
//==============================================================

const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');

let mainWindow;

function createWindow(file) {
    mainWindow = new BrowserWindow({
        with: 900,
        height: 800,
        show: false
    });

    //mainWindow.setMenu(null);
    mainWindow.loadFile(file);
    mainWindow.maximize();
}


app.on('ready', () => createWindow('index.html'));
app.once('ready-to-show', () => {
    win.show()
})
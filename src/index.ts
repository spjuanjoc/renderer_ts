import {app, BrowserWindow} from 'electron'

console.log('Hello electron from typescript');

let window;

app.on('ready', () => {
// function createWindow(){
    window = new BrowserWindow({
        width: 600,
        height: 480,
        darkTheme: true,
    });
    window.loadFile('../index.html');
});

app.on('window-all-closed', () => {
    app.quit()
})
// app.whenReady().then(createWindow);

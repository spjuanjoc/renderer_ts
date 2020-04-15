import {app, BrowserWindow} from 'electron'

console.log('Hello electron from typescript');

let window;

app.on('ready', () => {
    window = new BrowserWindow({
        width: 600,
        height: 480,
        darkTheme: true,
        backgroundColor: '#A9F5F2'
    });
    window.loadFile('../index.html');
});

app.on('window-all-closed', () => {
    app.quit()
})

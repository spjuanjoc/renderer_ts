import {app, BrowserWindow} from 'electron'

console.log('Hello electron from typescript');

let window1;
let window2;

app.on('ready', () => {
    window1 = new BrowserWindow({
        width: 480,
        height: 600,
        darkTheme: true,
        backgroundColor: '#A9F5F2',
        // frame: false,
        webPreferences:{
            nodeIntegration:true
        }
    });
    window1.loadFile('../renderers/calculator.html');

    // window2 = new BrowserWindow({
    //     width: 600,
    //     height: 480,
    //     darkTheme: true,
    //     backgroundColor: '#FFF'
    // });
    // window2.loadFile('../renderers/second.html');
});

app.on('window-all-closed', () => {
    app.quit()
})


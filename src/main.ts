console.log('main window');

const BrowserWindow = require('electron').remote.BrowserWindow;
// import {remote, BrowserWindow} from 'electron';
//
const newWinButton = document.getElementById('newWindow');

if (newWinButton) {
    newWinButton.addEventListener('click', () => {
        let window3 = new BrowserWindow({
            width: 600,
            height: 480,
            darkTheme: true,
            /*backgroundColor: '#AAA'*//*,
            webPreferences:{
                nodeIntegration:true
            }*/
        });

        window3.loadFile('../renderers/nm_calc.html');
    });
}

const {app,BrowserWindow}=require("electron");
let win;
app.on("ready",function(){

win =new BrowserWindow()
win.loadURL(`file:${__dirname}/index.html`);

})
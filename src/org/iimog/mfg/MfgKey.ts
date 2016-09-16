class MfgKey
{
    public static keyPressed(keyCode:number):void
    {
        MfgDebug.log('Key pressed: '+keyCode);
    }
    public static keyReleased(keyCode:number):void
    {
        MfgDebug.log('Key released: '+keyCode);
    }
}

window.addEventListener("keydown", (evt) => {
    MfgKey.keyPressed(evt.which);
}, false);

window.addEventListener("keyup", (evt) => {
    MfgKey.keyReleased(evt.which);
}, false);
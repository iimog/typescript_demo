class MfgKey
{
    public static KEY_LEFT:number = 37;
    public static KEY_UP:number = 38;
    public static KEY_RIGHT:number = 39;
    public static KEY_DOWN:number = 40;

    private static currentlyPressed:Array<number> = [];

    public static keyPressed(keyCode:number):void
    {
        if(!MfgKey.isKeyPressed(keyCode)){
            MfgKey.currentlyPressed.push(keyCode)
        }
        // MfgDebug.log('Key pressed: '+keyCode);
    }

    public static keyReleased(keyCode:number):void
    {
        if(MfgKey.isKeyPressed(keyCode)){
            MfgKey.currentlyPressed.splice(MfgKey.currentlyPressed.indexOf(keyCode), 1);
        }
        // MfgDebug.log('Key released: '+keyCode);
    }

    public static init():void
    {
        window.addEventListener("keydown", (evt) => {
            MfgKey.keyPressed(evt.which);
        }, false);
        window.addEventListener("keyup", (evt) => {
            MfgKey.keyReleased(evt.which);
        }, false);
    }

    public static isKeyPressed(keyCode:number):boolean{
        return MfgKey.currentlyPressed.indexOf(keyCode) >= 0;
    }
}


class MfgKey
{
    public static KEY_LEFT:number = 37;
    public static KEY_UP:number = 38;
    public static KEY_RIGHT:number = 39;
    public static KEY_DOWN:number = 40;

    private static currentlyPressed:Array<boolean> = [];

    public static init():void
    {
        window.addEventListener("keydown", (evt) => {
            MfgKey.keyPressed(evt.which);
        }, false);
        window.addEventListener("keyup", (evt) => {
            MfgKey.keyReleased(evt.which);
        }, false);
    }

    public static keyPressed(keyCode:number):void
    {
        MfgKey.currentlyPressed[keyCode] = true;
        // MfgDebug.log('Key pressed: '+keyCode);
    }

    public static keyReleased(keyCode:number):void
    {
        MfgKey.currentlyPressed[keyCode] = false;
        // MfgDebug.log('Key released: '+keyCode);
    }

    public static isKeyPressed(keyCode:number):boolean
    {
        return MfgKey.currentlyPressed[keyCode];
    }
}


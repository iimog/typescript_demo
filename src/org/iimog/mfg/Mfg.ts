class Mfg
{
    public static main():void
    {
        MfgDebug.log("Mfg");
        MfgKey.init();
        window.setInterval(() =>
        {
            if(MfgKey.isKeyPressed(MfgKey.KEY_DOWN))
            {
                MfgDebug.log('Down gedruckt.')
            } else {
                MfgDebug.log('Down nicht gedruckt.')
            }
        }, 500)
    }
}

window.onload = function () {
    Mfg.main();
}

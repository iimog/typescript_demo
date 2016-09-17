class Mfg
{
    public static main():void
    {
        MfgDebug.log("Mfg");

        MfgGame.init();

        MfgKey.init();
        MfgCanvas.init();
        MfgThread.init();

    }
}

window.onload = function () {
    Mfg.main();
}

class Mfg
{
    public static main():void
    {
        MfgDebug.log("Mfg");

        MfgKey.init();
        MfgCanvas.init();
        MfgThread.init();

    }
}

window.onload = function () {
    Mfg.main();
}

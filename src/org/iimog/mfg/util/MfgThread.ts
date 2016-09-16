class MfgThread
{
    public static init():void
    {
        window.setInterval(MfgThread.tick, MfgSetting.THREAD_DELAY);
    }

    public static tick():void
    {
        MfgDebug.log('active')
    }
}

class MfgThread
{
    public static init():void
    {
        window.setInterval(MfgGame.tick, MfgSetting.THREAD_DELAY);
    }
}

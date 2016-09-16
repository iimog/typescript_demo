class MfgThread
{
    public static init():void
    {
        window.setInterval(() =>
        {
            if(MfgKey.isKeyPressed(MfgKey.KEY_DOWN))
            {
                MfgDebug.log('Down gedruckt.')
            } else {
                MfgDebug.log('Down nicht gedruckt.')
            }
        }, 500);
    }
}

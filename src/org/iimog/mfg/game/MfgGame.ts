class MfgGame
{
    public static player:MfgPlayer = null;

    public static init():void
    {
        MfgGame.player = new MfgPlayer();
    }

    public static tick():void
    {
        MfgGame.render();
        MfgGame.draw();
    }

    public static render():void
    {

    }

    public static draw():void
    {
        MfgDrawing.fillRect(MfgCanvas.context, 0, 0, MfgSetting.CANVAS_WIDTH, MfgSetting.CANVAS_HEIGHT, MfgSetting.COLOR_BACKGROUND);
        MfgGame.player.draw();
    }
}
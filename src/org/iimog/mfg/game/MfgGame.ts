class MfgGame
{
    public static player:MfgPlayer = null;

    public static init():void
    {
        MfgImage.init();
        //MfgImage.loadImages([MfgSetting.PLAYER_IMAGE, MfgSetting.ITEM_IMAGE], ()=>{
            MfgGame.player = new MfgPlayer();
            MfgItem.init();
        //});
    }

    public static tick():void
    {
        MfgGame.render();
        MfgGame.draw();
    }

    public static render():void
    {
        MfgGame.player.handleKeys();
        MfgGame.player.clipToLevelBounds();
        MfgGame.player.checkItemCollision();
    }

    public static draw():void
    {
        MfgDrawing.fillRect(MfgCanvas.context, 0, 0, MfgSetting.CANVAS_WIDTH, MfgSetting.CANVAS_HEIGHT, MfgSetting.COLOR_BACKGROUND);
        MfgGame.player.draw();
        MfgItem.drawAll();
    }
}
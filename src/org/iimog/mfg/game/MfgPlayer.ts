class MfgPlayer
{
    public x:number = 0;
    public y:number = 0;

    public draw():void
    {
        MfgDrawing.fillRect(MfgCanvas.context, this.x, this.y, MfgSetting.PLAYER_WIDTH, MfgSetting.PLAYER_HEIGHT, MfgSetting.COLOR_PLAYER)
    }
}
class MfgItem
{
    public static items:Array<MfgItem> = null;

    public x = 0;
    public y = 0;

    public constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    public draw():void
    {
        MfgDrawing.fillRect(MfgCanvas.context, this.x, this.y, MfgSetting.ITEM_WIDTH, MfgSetting.ITEM_HEIGHT, MfgSetting.COLOR_ITEM);
        MfgDrawing.drawImage(MfgCanvas.context, MfgImage.imgItem, this.x, this.y);
    }

    public static init():void
    {
        MfgItem.items = [];
        for(var i:number = 0; i<MfgSetting.ITEM_COUNT; ++i){
            MfgItem.items.push(
                new MfgItem(
                    MfgItem.generateRandomNumber(0, MfgSetting.CANVAS_WIDTH - MfgSetting.ITEM_WIDTH),
                    MfgItem.generateRandomNumber(0, MfgSetting.CANVAS_HEIGHT - MfgSetting.ITEM_HEIGHT)
                )
            );
        }
    }

    /*****************************************************************************
     *   Returns a random integer between given mininum and maximum.
     *
     *   @param min
     *   @param max
     *   @return number
     *****************************************************************************/
    public static generateRandomNumber(min:number, max:number)
    {
        return Math.floor((Math.random() * (max - min)) + min);
    }

    public static drawAll():void
    {
        for(var item of MfgItem.items){
            item.draw();
        }
    }
}
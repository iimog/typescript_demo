class MfgImage
{
    public static imgPlayer:HTMLImageElement = null;
    public static imgItem:HTMLImageElement = null;

    public static init():void
    {
        MfgImage.imgPlayer = document.createElement('img');
        MfgImage.imgPlayer.src = "res/image/player.png";

        MfgImage.imgItem = document.createElement('img');
        MfgImage.imgItem.src = "res/image/item.png";
    }
}
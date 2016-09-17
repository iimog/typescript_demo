class MfgCanvas
{
    static context:CanvasRenderingContext2D;

    public static init()
    {
        var canvas:HTMLCanvasElement = document.createElement('canvas');
        canvas.id     = "MfgCanvas";
        canvas.width  = MfgSetting.CANVAS_WIDTH;
        canvas.height = MfgSetting.CANVAS_HEIGHT;
        canvas.style.position = "absolute";
        document.body.appendChild(canvas);

        MfgCanvas.context = canvas.getContext('2d');
    }
}
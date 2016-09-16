class MfgCanvas
{
    static context:CanvasRenderingContext2D;

    public static init()
    {
        var canvas:HTMLCanvasElement = document.createElement('canvas');
        canvas.id     = "MfgCanvas";
        canvas.width  = 500;
        canvas.height = 500;
        canvas.style.position = "absolute";
        document.body.appendChild(canvas);

        MfgCanvas.context = canvas.getContext('2d');
    }
}
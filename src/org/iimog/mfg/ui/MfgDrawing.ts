class MfgDrawing
{
    public static fillRect(context:CanvasRenderingContext2D, x:number, y:number, width:number, height:number, color:string)
    {
        context.fillStyle = color;
        context.fillRect(x, y, width, height);
    }
}
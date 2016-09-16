class MfgDrawing
{
    public static drawRect(context:CanvasRenderingContext2D, x:number, y:number, width:number, height:number, color:string)
    {
        context.rect(x, y, width, height);
        context.fill();
    }
}
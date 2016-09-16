var MfgDrawing = (function () {
    function MfgDrawing() {
    }
    MfgDrawing.drawRect = function (context, x, y, width, height, color) {
        context.rect(x, y, width, height);
        context.fill();
    };
    return MfgDrawing;
}());
//# sourceMappingURL=MfgDrawing.js.map
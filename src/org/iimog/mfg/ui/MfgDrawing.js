var MfgDrawing = (function () {
    function MfgDrawing() {
    }
    MfgDrawing.fillRect = function (context, x, y, width, height, color) {
        context.fillStyle = color;
        context.fillRect(x, y, width, height);
    };
    return MfgDrawing;
}());
//# sourceMappingURL=MfgDrawing.js.map
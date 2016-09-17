var MfgDrawing = (function () {
    function MfgDrawing() {
    }
    MfgDrawing.fillRect = function (context, x, y, width, height, color) {
        context.fillStyle = color;
        context.fillRect(x, y, width, height);
    };
    MfgDrawing.drawImage = function (context, image, x, y) {
        context.drawImage(image, x, y);
    };
    return MfgDrawing;
}());
//# sourceMappingURL=MfgDrawing.js.map
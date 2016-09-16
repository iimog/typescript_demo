var MfgCanvas = (function () {
    function MfgCanvas() {
    }
    MfgCanvas.init = function () {
        var canvas = document.createElement('canvas');
        canvas.id = "MfgCanvas";
        canvas.width = 500;
        canvas.height = 500;
        canvas.style.position = "absolute";
        document.body.appendChild(canvas);
        MfgCanvas.context = canvas.getContext('2d');
    };
    return MfgCanvas;
}());
//# sourceMappingURL=MfgCanvas.js.map
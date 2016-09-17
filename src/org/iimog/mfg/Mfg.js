var Mfg = (function () {
    function Mfg() {
    }
    Mfg.main = function () {
        MfgDebug.log("Mfg");
        MfgGame.init();
        MfgKey.init();
        MfgCanvas.init();
        MfgThread.init();
    };
    return Mfg;
}());
window.onload = function () {
    Mfg.main();
};
//# sourceMappingURL=Mfg.js.map
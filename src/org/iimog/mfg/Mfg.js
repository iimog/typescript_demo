var Mfg = (function () {
    function Mfg() {
    }
    Mfg.main = function () {
        MfgDebug.log("Mfg");
        MfgKey.init();
        window.setInterval(function () {
            if (MfgKey.isKeyPressed(MfgKey.KEY_DOWN)) {
                MfgDebug.log('Down gedruckt.');
            }
            else {
                MfgDebug.log('Down nicht gedruckt.');
            }
        }, 500);
    };
    return Mfg;
}());
window.onload = function () {
    Mfg.main();
};
//# sourceMappingURL=Mfg.js.map
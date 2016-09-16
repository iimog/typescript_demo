var MfgThread = (function () {
    function MfgThread() {
    }
    MfgThread.init = function () {
        window.setInterval(function () {
            if (MfgKey.isKeyPressed(MfgKey.KEY_DOWN)) {
                MfgDebug.log('Down gedruckt.');
            }
            else {
                MfgDebug.log('Down nicht gedruckt.');
            }
        }, 500);
    };
    return MfgThread;
}());
//# sourceMappingURL=MfgThread.js.map
var MfgThread = (function () {
    function MfgThread() {
    }
    MfgThread.init = function () {
        window.setInterval(MfgGame.tick, MfgSetting.THREAD_DELAY);
    };
    return MfgThread;
}());
//# sourceMappingURL=MfgThread.js.map
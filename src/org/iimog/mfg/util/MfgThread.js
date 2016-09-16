var MfgThread = (function () {
    function MfgThread() {
    }
    MfgThread.init = function () {
        window.setInterval(MfgThread.tick, MfgSetting.THREAD_DELAY);
    };
    MfgThread.tick = function () {
        MfgDebug.log('active');
    };
    return MfgThread;
}());
//# sourceMappingURL=MfgThread.js.map
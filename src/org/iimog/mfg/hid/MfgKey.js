var MfgKey = (function () {
    function MfgKey() {
    }
    MfgKey.init = function () {
        window.addEventListener("keydown", function (evt) {
            MfgKey.keyPressed(evt.which);
        }, false);
        window.addEventListener("keyup", function (evt) {
            MfgKey.keyReleased(evt.which);
        }, false);
    };
    MfgKey.keyPressed = function (keyCode) {
        MfgKey.currentlyPressed[keyCode] = true;
        // MfgDebug.log('Key pressed: '+keyCode);
    };
    MfgKey.keyReleased = function (keyCode) {
        MfgKey.currentlyPressed[keyCode] = false;
        // MfgDebug.log('Key released: '+keyCode);
    };
    MfgKey.isKeyPressed = function (keyCode) {
        return MfgKey.currentlyPressed[keyCode];
    };
    MfgKey.KEY_LEFT = 37;
    MfgKey.KEY_UP = 38;
    MfgKey.KEY_RIGHT = 39;
    MfgKey.KEY_DOWN = 40;
    MfgKey.currentlyPressed = [];
    return MfgKey;
}());
//# sourceMappingURL=MfgKey.js.map
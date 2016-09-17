var MfgGame = (function () {
    function MfgGame() {
    }
    MfgGame.init = function () {
        MfgGame.player = new MfgPlayer();
    };
    MfgGame.tick = function () {
        MfgGame.render();
        MfgGame.draw();
    };
    MfgGame.render = function () {
        MfgGame.player.handleKeys();
        MfgGame.player.clipToLevelBounds();
    };
    MfgGame.draw = function () {
        MfgDrawing.fillRect(MfgCanvas.context, 0, 0, MfgSetting.CANVAS_WIDTH, MfgSetting.CANVAS_HEIGHT, MfgSetting.COLOR_BACKGROUND);
        MfgGame.player.draw();
    };
    MfgGame.player = null;
    return MfgGame;
}());
//# sourceMappingURL=MfgGame.js.map
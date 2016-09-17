var MfgPlayer = (function () {
    function MfgPlayer() {
        this.x = 0;
        this.y = 0;
    }
    MfgPlayer.prototype.draw = function () {
        MfgDrawing.fillRect(MfgCanvas.context, this.x, this.y, MfgSetting.PLAYER_WIDTH, MfgSetting.PLAYER_HEIGHT, MfgSetting.COLOR_PLAYER);
    };
    return MfgPlayer;
}());
//# sourceMappingURL=MfgPlayer.js.map
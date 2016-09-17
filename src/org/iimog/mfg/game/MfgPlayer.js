var MfgPlayer = (function () {
    function MfgPlayer() {
        this.x = 0;
        this.y = 0;
    }
    MfgPlayer.prototype.draw = function () {
        MfgDrawing.fillRect(MfgCanvas.context, this.x, this.y, MfgSetting.PLAYER_WIDTH, MfgSetting.PLAYER_HEIGHT, MfgSetting.COLOR_PLAYER);
    };
    MfgPlayer.prototype.handleKeys = function () {
        if (MfgKey.isKeyPressed(MfgKey.KEY_UP))
            this.y -= MfgSetting.PLAYER_SPEED;
        if (MfgKey.isKeyPressed(MfgKey.KEY_DOWN))
            this.y += MfgSetting.PLAYER_SPEED;
        if (MfgKey.isKeyPressed(MfgKey.KEY_LEFT))
            this.x -= MfgSetting.PLAYER_SPEED;
        if (MfgKey.isKeyPressed(MfgKey.KEY_RIGHT))
            this.x += MfgSetting.PLAYER_SPEED;
    };
    MfgPlayer.prototype.clipToLevelBounds = function () {
        if (this.x < 0)
            this.x = 0;
        if (this.y < 0)
            this.y = 0;
        if (this.x + MfgSetting.PLAYER_WIDTH > MfgSetting.CANVAS_WIDTH)
            this.x = MfgSetting.CANVAS_WIDTH - MfgSetting.PLAYER_WIDTH;
        if (this.y + MfgSetting.PLAYER_HEIGHT > MfgSetting.CANVAS_HEIGHT)
            this.y = MfgSetting.CANVAS_HEIGHT - MfgSetting.PLAYER_HEIGHT;
    };
    return MfgPlayer;
}());
//# sourceMappingURL=MfgPlayer.js.map
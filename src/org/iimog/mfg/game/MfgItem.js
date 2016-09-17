var MfgItem = (function () {
    function MfgItem(x, y) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    MfgItem.prototype.draw = function () {
        MfgDrawing.fillRect(MfgCanvas.context, this.x, this.y, MfgSetting.ITEM_WIDTH, MfgSetting.ITEM_HEIGHT, MfgSetting.COLOR_ITEM);
        MfgDrawing.drawImage(MfgCanvas.context, MfgImage.imgItem, this.x, this.y);
    };
    MfgItem.init = function () {
        MfgItem.items = [];
        for (var i = 0; i < MfgSetting.ITEM_COUNT; ++i) {
            MfgItem.items.push(new MfgItem(MfgItem.generateRandomNumber(0, MfgSetting.CANVAS_WIDTH - MfgSetting.ITEM_WIDTH), MfgItem.generateRandomNumber(0, MfgSetting.CANVAS_HEIGHT - MfgSetting.ITEM_HEIGHT)));
        }
    };
    /*****************************************************************************
     *   Returns a random integer between given mininum and maximum.
     *
     *   @param min
     *   @param max
     *   @return number
     *****************************************************************************/
    MfgItem.generateRandomNumber = function (min, max) {
        return Math.floor((Math.random() * (max - min)) + min);
    };
    MfgItem.drawAll = function () {
        for (var _i = 0, _a = MfgItem.items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.draw();
        }
    };
    MfgItem.items = null;
    return MfgItem;
}());
//# sourceMappingURL=MfgItem.js.map
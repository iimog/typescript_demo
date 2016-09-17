var MfgImage = (function () {
    function MfgImage() {
    }
    MfgImage.init = function () {
        MfgImage.imgPlayer = document.createElement('img');
        MfgImage.imgPlayer.src = "res/image/player.png";
        MfgImage.imgItem = document.createElement('img');
        MfgImage.imgItem.src = "res/image/item.png";
    };
    MfgImage.imgPlayer = null;
    MfgImage.imgItem = null;
    return MfgImage;
}());
//# sourceMappingURL=MfgImage.js.map
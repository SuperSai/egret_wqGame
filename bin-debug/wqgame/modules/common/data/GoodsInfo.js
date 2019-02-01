var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GoodsInfo = (function () {
    function GoodsInfo() {
        this.name = "";
        this.url = "";
        this.count = 0;
        this.quality = 0;
    }
    return GoodsInfo;
}());
__reflect(GoodsInfo.prototype, "GoodsInfo");
//# sourceMappingURL=GoodsInfo.js.map
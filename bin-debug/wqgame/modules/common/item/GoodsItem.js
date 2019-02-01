var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * 物品Item
 */
var GoodsItem = (function (_super) {
    __extends(GoodsItem, _super);
    function GoodsItem() {
        return _super.call(this, SkinName.GoodsItemSkin) || this;
    }
    GoodsItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        if (this.data && this.data instanceof GoodsInfo) {
            this._info = this.data;
            if (this._info) {
                this.imgIcon.source = this._info.url;
            }
        }
        else {
            Log.traceError("@David 物品数据为空或物品数据类型不是GoodsInfo!");
        }
    };
    return GoodsItem;
}(BaseEuiItem));
__reflect(GoodsItem.prototype, "GoodsItem");
//# sourceMappingURL=GoodsItem.js.map
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
 * 必杀
 */
var CriItem = (function (_super) {
    __extends(CriItem, _super);
    function CriItem() {
        return _super.call(this, SkinName.CriItemSkin) || this;
    }
    CriItem.prototype.onAwake = function ($data) {
        if ($data === void 0) { $data = null; }
        _super.prototype.onAwake.call(this, $data);
        this.addEvents();
    };
    CriItem.prototype.addEvents = function () {
        this.btn_cri.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCri, this);
        this.setBtnEffect(["btn_cri"]);
    };
    CriItem.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        this.btn_cri.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCri, this);
    };
    CriItem.prototype.onClickCri = function () {
        App.View.open(ViewConst.SETTLEMENT);
    };
    return CriItem;
}(BaseEuiItem));
__reflect(CriItem.prototype, "CriItem");
window["CriItem"] = CriItem;
//# sourceMappingURL=CriItem.js.map
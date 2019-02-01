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
 * 战斗点击的卡片
 */
var CardItem = (function (_super) {
    __extends(CardItem, _super);
    function CardItem() {
        return _super.call(this, SkinName.CardItemSkin) || this;
    }
    CardItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEvents();
    };
    CardItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
    };
    CardItem.prototype.addEvents = function () {
        this.btn_card.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCard, this);
        this.setBtnEffect(["btn_card"]);
    };
    CardItem.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        this.btn_card.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCard, this);
    };
    CardItem.prototype.onClickCard = function () {
    };
    return CardItem;
}(BaseEuiItem));
__reflect(CardItem.prototype, "CardItem");
//# sourceMappingURL=CardItem.js.map
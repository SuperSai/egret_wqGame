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
        var _this = _super.call(this, SkinName.CardItemSkin) || this;
        _this._isCDTime = false;
        return _this;
    }
    CardItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEvents();
    };
    CardItem.prototype.dataChanged = function () {
        _super.prototype.dataChanged.call(this);
        this.imgSelect.visible = false;
        if (!this._isCDTime) {
            this.imgCDMask.visible = this.txt_cd.visible = false;
        }
        this._vo = GlobleData.getData(GlobleData.CardVO, this.data);
        if (this._vo) {
            var path = PathConfig.CardPath.replace("{0}", this._vo.icon);
            this.imgCard.source = path;
            this.txt_energy.text = this._vo.energy + "";
            this.txt_durable.text = this._vo.durable + "";
        }
    };
    CardItem.prototype.addEvents = function () {
        this.btn_card.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onCardTouchBegin, this);
        this.btn_card.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCard, this);
        this.setBtnEffect(["btn_card"]);
    };
    CardItem.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        this.btn_card.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onCardTouchBegin, this);
        this.btn_card.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCard, this);
    };
    CardItem.prototype.onCardTouchBegin = function () {
        this.imgSelect.visible = true;
        this.btn_card.y -= 20;
        this.btn_card.once(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onCardTouchEnd, this);
    };
    CardItem.prototype.onCardTouchEnd = function () {
        this.imgSelect.visible = false;
        this.btn_card.y += 20;
    };
    CardItem.prototype.onClickCard = function () {
        if (this._vo) {
            this.imgSelect.visible = false;
            this.btn_card.y += 20;
            App.NotificationCenter.dispatch(EventsType.BULLET_LAUNCH, this._vo);
        }
    };
    return CardItem;
}(BaseEuiItem));
__reflect(CardItem.prototype, "CardItem");
//# sourceMappingURL=CardItem.js.map
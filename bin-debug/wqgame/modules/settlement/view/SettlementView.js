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
 * 结算界面
 */
var SettlementView = (function (_super) {
    __extends(SettlementView, _super);
    function SettlementView($controller, $layer) {
        var _this = _super.call(this, $controller, $layer) || this;
        _this.skinName = SkinName.SettlementViewSkin;
        _this.setResources(["settlement"]);
        return _this;
    }
    /** 对面板进行显示初始化，用于子类继承 */
    SettlementView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        this.container.scaleX = this.container.scaleY = 0;
        this.container.verticalCenter = 50;
        this.rewardGroup.scaleX = this.rewardGroup.scaleY = 0;
        this.lists.itemRenderer = GoodsItem;
    };
    /** 对面板数据的初始化，用于子类继承 */
    SettlementView.prototype.initData = function () {
        _super.prototype.initData.call(this);
        this.initEffect();
    };
    SettlementView.prototype.initEffect = function () {
        var _this = this;
        egret.Tween.get(this.container).wait(100).
            to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.bounceInOut).wait(500).
            to({ verticalCenter: -120 }, 500, egret.Ease.backIn).wait(100).call(function () {
            egret.Tween.removeTweens(_this.container);
            egret.Tween.get(_this.rewardGroup).to({ scaleX: 1, scaleY: 1 }, 500).call(function () {
                egret.Tween.removeTweens(_this.rewardGroup);
                _this.updateRewardList();
            }, _this.rewardGroup);
        });
    };
    SettlementView.prototype.updateRewardList = function () {
        this.lists.dataProvider = new eui.ArrayCollection([1, 2, 3, 4]);
        this.lists.validateNow();
    };
    SettlementView.prototype.addEvents = function () {
        _super.prototype.addEvents.call(this);
        this.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGotoHall, this);
        this.setBtnEffect(["btn_sure"]);
    };
    SettlementView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        this.btn_sure.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGotoHall, this);
    };
    SettlementView.prototype.onGotoHall = function () {
        App.Scene.runScene(SceneConsts.HALL, true);
    };
    return SettlementView;
}(BaseEuiView));
__reflect(SettlementView.prototype, "SettlementView");
//# sourceMappingURL=SettlementView.js.map
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
 * 匹配界面
 */
var VSView = (function (_super) {
    __extends(VSView, _super);
    function VSView($controller, $layer) {
        var _this = _super.call(this, $controller, $layer) || this;
        _this.skinName = SkinName.VSViewSkin;
        _this.setResources(["vs"]);
        return _this;
    }
    /** 对面板进行显示初始化，用于子类继承 */
    VSView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        this.head_left.visible = this.head_right.visible = this.btn_cancel.visible = this.bar.visible = false;
        this.bar.value = 0;
        this.bar.labelDisplay.visible = false;
        this.head_left.setBgSource("vs_json.ui_pipei_lankuang");
        this.head_right.setBgSource("vs_json.ui_pipei_hongkuang");
        this.head_left.hideNameGroup();
        this.head_right.hideNameGroup();
    };
    /** 对面板数据的初始化，用于子类继承 */
    VSView.prototype.initData = function () {
        _super.prototype.initData.call(this);
        this.initEffect();
    };
    VSView.prototype.initEffect = function () {
        var _this = this;
        App.Effect.doFromTopToBottom(this.imgVS, function () {
            egret.Tween.get(_this.head_left).set({ left: -_this.head_left.width, visible: true }).wait(200).to({ left: 58 }, 200, egret.Ease.elasticInOut).call(function () {
                egret.Tween.removeTweens(_this.head_left);
                _this.head_left.doNameGroupEffect();
            }, _this.head_left);
            egret.Tween.get(_this.head_right).set({ right: -_this.head_right.width, visible: true }).wait(200).to({ right: 58 }, 200, egret.Ease.elasticInOut).call(function () {
                egret.Tween.removeTweens(_this.head_right);
                _this.btn_cancel.visible = true;
            }, _this.head_right);
        });
        egret.Tween.get(this.bar).wait(2000).set({ visible: true }).to({ value: 100 }, 1000).call(function () {
            egret.Tween.removeTweens(_this.bar);
        }, this.bar);
    };
    VSView.prototype.addEvents = function () {
        _super.prototype.addEvents.call(this);
        this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelHandler, this);
        this.setBtnEffect(["btn_cancel"]);
    };
    VSView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        this.btn_cancel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelHandler, this);
    };
    VSView.prototype.onCancelHandler = function () {
        App.View.close(ViewConst.VS);
    };
    return VSView;
}(BaseEuiView));
__reflect(VSView.prototype, "VSView");
//# sourceMappingURL=VSView.js.map
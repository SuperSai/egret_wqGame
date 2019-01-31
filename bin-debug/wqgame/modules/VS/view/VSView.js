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
    };
    /** 对面板数据的初始化，用于子类继承 */
    VSView.prototype.initData = function () {
        _super.prototype.initData.call(this);
    };
    VSView.prototype.addEvents = function () {
        _super.prototype.addEvents.call(this);
    };
    VSView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
    };
    return VSView;
}(BaseEuiView));
__reflect(VSView.prototype, "VSView");
//# sourceMappingURL=VSView.js.map
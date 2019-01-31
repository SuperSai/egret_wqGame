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
var VSController = (function (_super) {
    __extends(VSController, _super);
    function VSController() {
        var _this = _super.call(this) || this;
        _this._vsView = new VSView(_this, LayerMgr.GAME_UI_LAYER);
        App.View.register(ViewConst.VS, _this._vsView);
        //注册模块消息
        _this.registerFunc(VSConst.VS_INIT, _this.onVSInit, _this);
        return _this;
    }
    VSController.prototype.onVSInit = function (param) {
        App.View.open(ViewConst.VS, null, this._vsView);
    };
    return VSController;
}(BaseController));
__reflect(VSController.prototype, "VSController");
//# sourceMappingURL=VSController.js.map
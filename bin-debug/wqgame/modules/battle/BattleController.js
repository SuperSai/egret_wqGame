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
var BattleController = (function (_super) {
    __extends(BattleController, _super);
    function BattleController() {
        var _this = _super.call(this) || this;
        var self = _this;
        self._battleView = new BattleView(self, LayerMgr.GAME_MAP_LAYER);
        App.View.register(ViewConst.BATTLE, self._battleView);
        self._battleModel = new BattleModel(self);
        self.setModel(self._battleModel);
        self._battleProxy = new BattleProxy(self);
        //注册模块消息
        self.registerFunc(BattleConst.BATTLE_INIT, self.onBattleInit, self);
        return _this;
    }
    BattleController.prototype.onBattleInit = function () {
        var self = this;
        if (App.View.isShow(ViewConst.BATTLE))
            return;
        App.View.open(ViewConst.BATTLE);
    };
    /** 注册界面才可以打开界面 */
    BattleController.prototype.initRegisterView = function () {
        var self = this;
    };
    return BattleController;
}(BaseController));
__reflect(BattleController.prototype, "BattleController");
//# sourceMappingURL=BattleController.js.map
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
 * 战斗界面
 */
var BattleView = (function (_super) {
    __extends(BattleView, _super);
    function BattleView($controller, $layer) {
        var _this = _super.call(this, $controller, $layer) || this;
        var self = _this;
        self.skinName = SkinName.BattleViewSkin;
        self.setResources(["battle"]);
        return _this;
    }
    /** 对面板进行显示初始化，用于子类继承 */
    BattleView.prototype.initUI = function () {
        _super.prototype.initUI.call(this);
        this.blueInfo.onAwake();
        this.redInfo.onAwake();
        this.blueBlood.onAwake({ team: TEAM_TYPE.BLUE });
        this.blueBlood.setCurrBlood(1000, true);
        this.redBlood.onAwake({ team: TEAM_TYPE.RED });
        this.redBlood.setCurrBlood(1000, true);
        this.criItem.onAwake();
    };
    /** 对面板数据的初始化，用于子类继承 */
    BattleView.prototype.initData = function () {
        _super.prototype.initData.call(this);
        this._mode = this.controller.getModel();
        this._battleController = this.controller;
        this.cardSkillView.open(this._battleController);
    };
    BattleView.prototype.addEvents = function () {
        _super.prototype.addEvents.call(this);
        App.NotificationCenter.addListener(EventsType.UPDATE_BATTLE_VIEW, this.onUpdateBattleView, this);
    };
    BattleView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        App.NotificationCenter.removeListener(EventsType.UPDATE_BATTLE_VIEW, this.onUpdateBattleView, this);
    };
    BattleView.prototype.onUpdateBattleView = function (team, bullet) {
        if (team == TEAM_TYPE.BLUE) {
            ObjectUtils.removeFromArray(bullet, this._mode.bulletBlues);
        }
        else if (team == TEAM_TYPE.RED) {
            ObjectUtils.removeFromArray(bullet, this._mode.bulletReds);
        }
    };
    BattleView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.close.call(this, param);
        this.cardSkillView.close();
    };
    return BattleView;
}(BaseEuiView));
__reflect(BattleView.prototype, "BattleView");
//# sourceMappingURL=BattleView.js.map
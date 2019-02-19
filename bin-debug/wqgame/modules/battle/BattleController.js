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
        self.initRegisterView();
        return _this;
    }
    BattleController.prototype.onBattleInit = function () {
        var self = this;
        if (App.View.isShow(ViewConst.BATTLE))
            return;
        App.View.open(ViewConst.BATTLE);
        // App.Timer.doFrame(1, 0, self.onBattleUpdate, self);
    };
    // private onBattleUpdate(): void {
    // 	if (this._battleModel.bulletBlues.length > 0) {
    // 		Log.trace(this._battleModel.bulletBlues[0].x);
    // 	}
    // }
    /** 注册界面才可以打开界面 */
    BattleController.prototype.initRegisterView = function () {
        var self = this;
        App.View.register(ViewConst.SETTLEMENT, new SettlementView(this, LayerMgr.GAME_UI_LAYER));
    };
    /** 创建子弹 */
    BattleController.prototype.createBullet = function (team, vo, durable, cardType, startPos, endPos) {
        var bullet = new BaseBullet(this, LayerMgr.GAME_UI_LAYER);
        bullet.team = team;
        if (team == TEAM_TYPE.BLUE && !bullet.BattleController)
            bullet.BattleController = this;
        bullet.open({ startPos: startPos, endPos: endPos, vo: vo, durable: durable, cardType: cardType });
        this.saveBulletsData(bullet.team, cardType, bullet);
        bullet.addToParent();
        bullet.doBulletPath(team == TEAM_TYPE.BLUE ? 1 : -1);
    };
    BattleController.prototype.saveBulletsData = function (team, cardType, bullet) {
        if (team == TEAM_TYPE.BLUE) {
            var blueBullets = null;
            if (!this._battleModel.bulletBlues.ContainsKey(cardType)) {
                blueBullets = [];
                this._battleModel.bulletBlues.Add(cardType, blueBullets);
                blueBullets = this._battleModel.bulletBlues.TryGetValue(cardType);
            }
            else {
                blueBullets = this._battleModel.bulletBlues.TryGetValue(cardType);
            }
            if (blueBullets)
                blueBullets.push(bullet);
        }
        else if (team == TEAM_TYPE.RED) {
            var redBullets = null;
            if (!this._battleModel.bulletReds.ContainsKey(cardType)) {
                redBullets = [];
                this._battleModel.bulletReds.Add(cardType, redBullets);
                redBullets = this._battleModel.bulletReds.TryGetValue(cardType);
            }
            else {
                redBullets = this._battleModel.bulletReds.TryGetValue(cardType);
            }
            if (redBullets)
                redBullets.push(bullet);
        }
    };
    Object.defineProperty(BattleController.prototype, "battleView", {
        get: function () {
            return this._battleView;
        },
        set: function (value) {
            this._battleView = value;
        },
        enumerable: true,
        configurable: true
    });
    return BattleController;
}(BaseController));
__reflect(BattleController.prototype, "BattleController");
//# sourceMappingURL=BattleController.js.map
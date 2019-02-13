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
var BattleModel = (function (_super) {
    __extends(BattleModel, _super);
    function BattleModel($controller) {
        var _this = _super.call(this, $controller) || this;
        var self = _this;
        self.init();
        return _this;
    }
    /** 初始化 */
    BattleModel.prototype.init = function () {
        this._bulletBlues = [];
        this._bulletReds = [];
    };
    Object.defineProperty(BattleModel.prototype, "bulletBlues", {
        /** 蓝队子弹列表 */
        get: function () {
            return this._bulletBlues;
        },
        set: function (value) {
            this._bulletBlues = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BattleModel.prototype, "bulletReds", {
        /** 红队子弹列表 */
        get: function () {
            return this._bulletReds;
        },
        set: function (value) {
            this._bulletReds = value;
        },
        enumerable: true,
        configurable: true
    });
    return BattleModel;
}(BaseModel));
__reflect(BattleModel.prototype, "BattleModel");
var TEAM_TYPE;
(function (TEAM_TYPE) {
    TEAM_TYPE[TEAM_TYPE["RED"] = 1] = "RED";
    TEAM_TYPE[TEAM_TYPE["BLUE"] = 2] = "BLUE";
})(TEAM_TYPE || (TEAM_TYPE = {}));
//# sourceMappingURL=BattleModel.js.map
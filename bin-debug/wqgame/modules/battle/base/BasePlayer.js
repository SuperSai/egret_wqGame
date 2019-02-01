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
var BasePlayer = (function (_super) {
    __extends(BasePlayer, _super);
    function BasePlayer($controller, $layer) {
        var _this = _super.call(this, $controller, $layer) || this;
        _this._team = -1;
        _this._blood = 0;
        _this._maxBlood = 0;
        _this._isDie = false;
        _this._dieEffectName = "";
        return _this;
    }
    BasePlayer.prototype.onUpdate = function (passTime) {
    };
    Object.defineProperty(BasePlayer.prototype, "team", {
        /** 队伍 */
        get: function () {
            return this._team;
        },
        set: function (value) {
            this._team = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePlayer.prototype, "blood", {
        /** 当前血量 */
        get: function () {
            return this._blood;
        },
        set: function (value) {
            this._blood = value;
            this._isDie = this._blood <= 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePlayer.prototype, "maxBlood", {
        /** 最大血量 */
        get: function () {
            return this._maxBlood;
        },
        set: function (value) {
            this._maxBlood = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePlayer.prototype, "isDie", {
        /** 是否死亡 */
        get: function () {
            return this._isDie;
        },
        set: function (value) {
            this._isDie = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePlayer.prototype, "dieEffectName", {
        /** 死亡特效名字 */
        get: function () {
            return this._dieEffectName;
        },
        set: function (value) {
            this._dieEffectName = value;
        },
        enumerable: true,
        configurable: true
    });
    return BasePlayer;
}(BaseSpriteView));
__reflect(BasePlayer.prototype, "BasePlayer");
//# sourceMappingURL=BasePlayer.js.map
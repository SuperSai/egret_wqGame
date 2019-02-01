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
var BaseBullet = (function (_super) {
    __extends(BaseBullet, _super);
    function BaseBullet($controller, $layer) {
        var _this = _super.call(this, $controller, $layer) || this;
        _this._bulletId = -1;
        _this._type = 0;
        _this._damage = 0;
        _this._defense = 0;
        return _this;
    }
    BaseBullet.prototype.onUpdate = function (passTime) {
    };
    Object.defineProperty(BaseBullet.prototype, "bulletId", {
        get: function () {
            return this._bulletId;
        },
        set: function (value) {
            this._bulletId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseBullet.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseBullet.prototype, "damage", {
        /** 伤害力 */
        get: function () {
            return this._damage;
        },
        set: function (value) {
            this._damage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseBullet.prototype, "defense", {
        /** 防御力 */
        get: function () {
            return this._defense;
        },
        set: function (value) {
            this._defense = value;
        },
        enumerable: true,
        configurable: true
    });
    return BaseBullet;
}(BaseSpriteView));
__reflect(BaseBullet.prototype, "BaseBullet");
//# sourceMappingURL=BaseBullet.js.map
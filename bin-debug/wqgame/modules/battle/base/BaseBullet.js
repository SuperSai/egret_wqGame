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
        _this._team = 0;
        /** 耐久度 */
        _this._durable = 0;
        _this._top = 0;
        _this._distance = 750;
        return _this;
    }
    BaseBullet.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.open.call(this, param);
        this._data = param[0];
        if (this._data) {
            this._durable = this._data.durable;
            this.x = this._data.startPos.x;
            this.y = this._data.startPos.y;
            this._data.endPos.x += 60;
            this.setBulletTop();
            this.setButtleImg();
        }
    };
    /** 设置子弹的至高点 */
    BaseBullet.prototype.setBulletTop = function () {
        switch (this._data.cardType) {
            case 1:
                this._top = 600;
                break;
            case 2:
                this._top = 300;
                break;
            case 3:
                this._top = 0;
                break;
        }
    };
    BaseBullet.prototype.setButtleImg = function () {
        var path = PathConfig.ButtlePath.replace("{0}", this._data.vo.assetname + "");
        this._imgButtle = new eui.Image(path);
        this.addChild(this._imgButtle);
    };
    BaseBullet.prototype.onUpdate = function (passTime) {
    };
    Object.defineProperty(BaseBullet.prototype, "factor", {
        get: function () {
            return 0;
        },
        set: function (value) {
            this.x = this.x = (1 - value) * (1 - value) * this._data.startPos.x + 2 * value * (1 - value) * this._topPoint.x + value * value * this._data.endPos.x;
            this.y = this.y = (1 - value) * (1 - value) * this._data.startPos.y + 2 * value * (1 - value) * this._topPoint.y + value * value * this._data.endPos.y;
            this.bulletCollision();
        },
        enumerable: true,
        configurable: true
    });
    /** 子弹碰撞处理 */
    BaseBullet.prototype.bulletCollision = function () {
        if (this._team == TEAM_TYPE.BLUE && this._BattleController) {
            if (!this._battleModel) {
                this._battleModel = this._BattleController.getModel();
            }
            if (this._battleModel) {
                if (this._battleModel.bulletReds.ContainsKey(this._data.cardType)) {
                    var bullets = this._battleModel.bulletReds.TryGetValue(this._data.cardType);
                    if (bullets && bullets.length > 0) {
                        for (var i = 0; i < bullets.length; i++) {
                            var redBullet = bullets[i];
                            if (this.hitTestPoint(redBullet.x, redBullet.y)) {
                                if (this._durable - redBullet.durable > 0) {
                                    this._durable = this._durable - redBullet.durable;
                                    redBullet.removeFromParent();
                                    redBullet.bulletBombEffect();
                                }
                                else if (this._durable == redBullet.durable) {
                                    App.NotificationCenter.dispatch(EventsType.UPDATE_BATTLE_VIEW, this._team, this._data.cardType, this);
                                    App.NotificationCenter.dispatch(EventsType.UPDATE_BATTLE_VIEW, redBullet.team, this._data.cardType, redBullet);
                                    redBullet.removeBulletTweens();
                                    redBullet.removeFromParent();
                                    this.removeFromParent();
                                    this.bulletBombEffect();
                                }
                                else {
                                    redBullet.durable = redBullet.durable - this._durable;
                                    this.removeFromParent();
                                    this.bulletBombEffect();
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    /** 执行子弹轨迹 */
    BaseBullet.prototype.doBulletPath = function (dir) {
        this.setBulletPathData(dir, 700);
    };
    BaseBullet.prototype.setBulletPathData = function (dir, time) {
        var _this = this;
        this._imgButtle.scaleX = dir;
        this._distance = egret.Point.distance(this._data.startPos, this._data.endPos) * dir;
        this._topPoint = new egret.Point(this.x + this._distance / 2, this.y - this._top);
        if (this._data.vo.isRotation) {
            egret.Tween.get(this._imgButtle, { loop: true }).to({ rotation: 360 }, 100);
        }
        egret.Tween.get(this).to({ factor: 1 }, time).call(function () {
            _this.bulletBombEffect();
            _this.removeFromParent();
            App.NotificationCenter.dispatch(EventsType.UPDATE_BATTLE_VIEW, _this._team, _this._data.cardType, _this);
            App.NotificationCenter.dispatch(EventsType.UPDATE_BLOOD, _this._team, _this._durable);
        });
    };
    BaseBullet.prototype.bulletBombEffect = function () {
        this.removeBulletTweens();
        var bomb = ResourcePool.Instance.pop(this._data.vo.bombAni, ResourcePool.SKE);
        bomb.x = this.x;
        bomb.y = this.y;
        App.Layer.addToLayer(bomb, LayerMgr.GAME_EFFECT_LAYER);
        bomb.play();
    };
    BaseBullet.prototype.removeBulletTweens = function () {
        egret.Tween.removeTweens(this._imgButtle);
        egret.Tween.removeTweens(this);
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
    Object.defineProperty(BaseBullet.prototype, "team", {
        get: function () {
            return this._team;
        },
        set: function (value) {
            this._team = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseBullet.prototype, "durable", {
        /** 耐久度 */
        get: function () {
            return this._durable;
        },
        set: function (value) {
            this._durable = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseBullet.prototype, "BattleController", {
        get: function () {
            return this._BattleController;
        },
        set: function (value) {
            this._BattleController = value;
        },
        enumerable: true,
        configurable: true
    });
    return BaseBullet;
}(BaseSpriteView));
__reflect(BaseBullet.prototype, "BaseBullet");
//# sourceMappingURL=BaseBullet.js.map
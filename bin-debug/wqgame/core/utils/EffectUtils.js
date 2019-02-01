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
 * 各种效果工具类
 */
var EffectUtils = (function (_super) {
    __extends(EffectUtils, _super);
    /**
     * 构造函数
     */
    function EffectUtils() {
        return _super.call(this) || this;
    }
    /**
     * 类似mac上图标上下抖动的效果
     * @param obj 要抖动的对象，使用
     * @param initY 要抖动的对象的初始Y值，原始位置
     * @example eval(macIconShake("this.btnIcon", 100));
     * @returns {string} 返回的是一个要执行代码的字符串，通过eval执行
     */
    EffectUtils.prototype.doMacIconShake = function (obj, initY) {
        if (initY === void 0) { initY = 0; }
        //抖动频率[时间，移动距离]，可修改
        var arr = [
            [20, 200],
            [15, 200],
            [10, 200],
            [5, 200]
        ];
        var str = "egret.Tween.get(" + obj + ")";
        for (var i = 0, len = arr.length; i < len; i++) {
            str += ".to({'y':" + initY + "-" + arr[i][0] + "}, " + arr[i][1] + ")";
            str += ".to({'y':" + initY + "}, " + arr[i][1] + ")";
        }
        str += ";";
        return str;
    };
    /** 开始闪烁 */
    EffectUtils.prototype.startFlicker = function (obj, alphaTime) {
        obj.alpha = 1;
        egret.Tween.get(obj).to({ "alpha": 0 }, alphaTime).to({ "alpha": 1 }, alphaTime).call(this.startFlicker, this, [obj, alphaTime]);
    };
    /** 停止闪烁 */
    EffectUtils.prototype.stopFlicker = function (obj) {
        egret.Tween.removeTweens(obj);
    };
    /** 爆炸特效 */
    EffectUtils.prototype.doBombEffect = function (bombName, pos, obj) {
        var self = this;
        var bombBone = ResourcePool.Instance.pop(bombName, ResourcePool.SKE);
        App.Layer.addToLayer(bombBone, LayerMgr.GAME_EFFECT_LAYER);
        bombBone.x = pos.x;
        bombBone.y = pos.y;
        bombBone.play(function () {
            App.Display.removeFromParent(bombBone);
        }, obj);
    };
    /** 从上往下 */
    EffectUtils.prototype.doFromTopToBottom = function (obj, callback) {
        if (callback === void 0) { callback = null; }
        if (obj) {
            egret.Tween.get(obj).set({ scaleX: 5, scaleY: 5, verticalCenter: -300 }).wait(200).to({ scaleX: 1, scaleY: 1, verticalCenter: 0 }, 100, egret.Ease.elasticInOut).call(function () {
                egret.Tween.removeTweens(obj);
                callback && callback();
            }, obj);
        }
        else {
            callback && callback();
        }
    };
    /** 从两边进入 */
    EffectUtils.prototype.doBothSides = function (obj, dir, from, to, callback) {
        if (callback === void 0) { callback = null; }
        if (obj) {
            egret.Tween.get(obj).set({ dir: from }).wait(200).to({ dir: to }, 100).call(function () {
                egret.Tween.removeTweens(obj);
                callback && callback();
            }, obj);
        }
        else {
            callback && callback();
        }
    };
    /** 物品飞入的特效 */
    EffectUtils.prototype.doGoodsFlyEffect = function (obj, starPos, endPos, callback, duration) {
        if (duration === void 0) { duration = 300; }
        egret.Tween.get(obj).set({ x: starPos.x, y: starPos.y });
        egret.Tween.get(obj).to({ x: endPos.x, y: endPos.y }, duration).call(function () {
            egret.Tween.removeTweens(obj);
            callback && callback();
        });
    };
    return EffectUtils;
}(BaseClass));
__reflect(EffectUtils.prototype, "EffectUtils");
//# sourceMappingURL=EffectUtils.js.map
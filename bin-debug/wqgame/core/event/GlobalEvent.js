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
 * 全局事件
 */
var GlobalEvent = (function (_super) {
    __extends(GlobalEvent, _super);
    function GlobalEvent() {
        return _super.call(this) || this;
    }
    return GlobalEvent;
}(egret.EventDispatcher));
__reflect(GlobalEvent.prototype, "GlobalEvent");
//# sourceMappingURL=GlobalEvent.js.map
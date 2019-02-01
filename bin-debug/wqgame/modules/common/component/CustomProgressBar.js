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
 * 自定义进度条
 */
var CustomProgressBar = (function (_super) {
    __extends(CustomProgressBar, _super);
    function CustomProgressBar() {
        var _this = _super.call(this) || this;
        _this.name = "CustomProgressBar";
        return _this;
    }
    return CustomProgressBar;
}(eui.ProgressBar));
__reflect(CustomProgressBar.prototype, "CustomProgressBar");
//# sourceMappingURL=CustomProgressBar.js.map
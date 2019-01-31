var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var VSConst = (function () {
    function VSConst() {
    }
    VSConst.VS_INIT = 10000;
    return VSConst;
}());
__reflect(VSConst.prototype, "VSConst");
//# sourceMappingURL=VSConst.js.map
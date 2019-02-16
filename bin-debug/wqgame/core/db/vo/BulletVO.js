var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BulletVO = (function () {
    function BulletVO() {
        this._isRotation = false;
    }
    Object.defineProperty(BulletVO.prototype, "isRotation", {
        get: function () {
            return this._isRotation;
        },
        set: function (value) {
            this._isRotation = Number(value) === 0 ? false : true;
        },
        enumerable: true,
        configurable: true
    });
    return BulletVO;
}());
__reflect(BulletVO.prototype, "BulletVO");
//# sourceMappingURL=BulletVO.js.map
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
var HeadItem = (function (_super) {
    __extends(HeadItem, _super);
    function HeadItem() {
        return _super.call(this, SkinName.HeadItemSkin) || this;
    }
    HeadItem.prototype.onAwake = function ($data) {
        if ($data === void 0) { $data = null; }
        var self = this;
        _super.prototype.onAwake.call(this, $data);
        this.imgSeek.visible = false;
        this.imgHead.source = $data.headUrl;
        this.imgGuild.source = $data.guildUrl;
        this.txt_name.text = $data.name;
    };
    HeadItem.prototype.setBgSource = function (url) {
        this.imgBg.source = url;
    };
    HeadItem.prototype.doNameGroupEffect = function () {
        egret.Tween.get(this.nameGroup).wait(100).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.quartInOut);
    };
    HeadItem.prototype.hideNameGroup = function () {
        this.nameGroup.scaleX = this.nameGroup.scaleY = 0;
    };
    /** 释放 */
    HeadItem.prototype.release = function () {
        _super.prototype.release.call(this);
        this.imgSeek.visible = true;
        this.hideNameGroup();
    };
    return HeadItem;
}(BaseEuiItem));
__reflect(HeadItem.prototype, "HeadItem");
//# sourceMappingURL=HeadItem.js.map
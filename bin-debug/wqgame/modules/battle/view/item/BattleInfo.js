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
 * 战斗中的用户信息
 */
var BattleInfo = (function (_super) {
    __extends(BattleInfo, _super);
    function BattleInfo() {
        return _super.call(this, SkinName.BattleInfoSkin) || this;
    }
    BattleInfo.prototype.onAwake = function ($data) {
        if ($data === void 0) { $data = null; }
        _super.prototype.onAwake.call(this, $data);
        if (this.data) {
            this.imgGuild.source = this.data.guildUrl;
            this.txt_level.text = this.data.level; //等级
            this.txt_name.text = this.data.name; //名字
            this.txt_guildName.text = this.data.guildName; //公会名字
            this.txt_cups.text = this.data.cups; //奖杯数
        }
    };
    return BattleInfo;
}(BaseEuiItem));
__reflect(BattleInfo.prototype, "BattleInfo");
window["BattleInfo"] = BattleInfo;
//# sourceMappingURL=BattleInfo.js.map
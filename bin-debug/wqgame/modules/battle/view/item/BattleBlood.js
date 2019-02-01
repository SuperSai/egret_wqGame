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
 * 战斗中的血条
 */
var BattleBlood = (function (_super) {
    __extends(BattleBlood, _super);
    function BattleBlood() {
        return _super.call(this, SkinName.BattleBloodSkin) || this;
    }
    BattleBlood.prototype.onAwake = function ($data) {
        if ($data === void 0) { $data = null; }
        _super.prototype.onAwake.call(this, $data);
        this.bar.bg.source = "battle_bar_json.ui_zdn_xuedi";
        var barUrl = "";
        if (this.data) {
            if (this.data.team == TEAM_TYPE.BLUE) {
                barUrl = "battle_bar_json.ui_zdn_xuelan";
            }
            else {
                barUrl = "battle_bar_json.ui_zdn_xuehong";
            }
            this.bar.thumb.source = barUrl;
        }
    };
    /** 设置血量 */
    BattleBlood.prototype.setCurrBlood = function (blood, isMaxBlood) {
        if (isMaxBlood === void 0) { isMaxBlood = false; }
        this.bar.value = blood;
        this.txt_blood.text = blood + "";
        if (isMaxBlood) {
            this.bar.maximum = blood;
        }
    };
    return BattleBlood;
}(BaseEuiItem));
__reflect(BattleBlood.prototype, "BattleBlood");
window["BattleBlood"] = BattleBlood;
//# sourceMappingURL=BattleBlood.js.map
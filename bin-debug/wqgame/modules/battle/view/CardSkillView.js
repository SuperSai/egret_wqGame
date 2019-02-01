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
 * 战斗中卡片技能界面
 */
var CardSkillView = (function (_super) {
    __extends(CardSkillView, _super);
    function CardSkillView($controller, $layer) {
        var _this = _super.call(this, $controller, $layer) || this;
        var self = _this;
        self.skinName = SkinName.CardSkillViewSkin;
        return _this;
    }
    /** 面板开启执行函数，用于子类继承 */
    CardSkillView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super.prototype.open.call(this, param);
        this.initView();
    };
    CardSkillView.prototype.initView = function () {
        this.bar.bg.source = "battle_bar_json.ui_zdn_dazidi";
        this.bar.thumb.source = "battle_bar_json.ui_zdn_dazi";
        this.arrColl = new eui.ArrayCollection();
        this.lists.itemRenderer = CardItem;
        this.lists.dataProvider = this.arrColl;
        this.updateCardLists();
    };
    CardSkillView.prototype.addEvents = function () {
        _super.prototype.addEvents.call(this);
    };
    CardSkillView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        var self = this;
    };
    CardSkillView.prototype.updateCardLists = function () {
        this.arrColl.replaceAll([1, 2, 3, 4, 5]);
    };
    return CardSkillView;
}(BaseEuiView));
__reflect(CardSkillView.prototype, "CardSkillView");
window["CardSkillView"] = CardSkillView;
//# sourceMappingURL=CardSkillView.js.map
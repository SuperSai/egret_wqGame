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
        this._battleController = param[0];
        this.initView();
        this.addEvents();
    };
    CardSkillView.prototype.initView = function () {
        this.bar.labelDisplay.visible = false;
        this.bar.bg.source = "battle_bar_json.ui_zdn_dazidi";
        this.bar.thumb.source = "battle_bar_json.ui_zdn_dazi";
        this.arrColl = new eui.ArrayCollection();
        this.lists.itemRenderer = CardItem;
        this.lists.dataProvider = this.arrColl;
        this.updateCardLists();
    };
    CardSkillView.prototype.addEvents = function () {
        _super.prototype.addEvents.call(this);
        App.NotificationCenter.addListener(EventsType.BULLET_LAUNCH, this.onBulletLaunch, this);
    };
    CardSkillView.prototype.removeEvents = function () {
        _super.prototype.removeEvents.call(this);
        App.NotificationCenter.removeListener(EventsType.BULLET_LAUNCH, this.onBulletLaunch, this);
    };
    CardSkillView.prototype.updateCardLists = function () {
        this.arrColl.replaceAll([10001, 10002, 10003, 10004, 10005]);
    };
    /** 子弹发射 */
    CardSkillView.prototype.onBulletLaunch = function (cardVO) {
        if (parseInt(this.txt_energy.text) >= cardVO.energy) {
            var vo = GlobleData.getData(GlobleData.BulletVO, cardVO.bulletId);
            if (vo && this._battleController && this._battleController.battleView) {
                this._battleController.createBullet(TEAM_TYPE.BLUE, vo, cardVO.durable, cardVO.type, this._battleController.battleView.leftPlayer.localToGlobal(), this._battleController.battleView.rightPlayer.localToGlobal());
                this._battleController.createBullet(TEAM_TYPE.RED, vo, cardVO.durable, cardVO.type, this._battleController.battleView.rightPlayer.localToGlobal(), this._battleController.battleView.leftPlayer.localToGlobal());
                this.txt_energy.text = parseInt(this.txt_energy.text) - cardVO.energy + "";
            }
        }
        else {
            App.Message.showText(App.Language.getLanguageText("label.02"));
        }
    };
    return CardSkillView;
}(BaseEuiView));
__reflect(CardSkillView.prototype, "CardSkillView");
window["CardSkillView"] = CardSkillView;
//# sourceMappingURL=CardSkillView.js.map
/**
 * 战斗中卡片技能界面
 */
class CardSkillView extends BaseEuiView {

	private bar: CustomProgressBar;
	private txt_energy: eui.Label;
	private txt_maxEnergy: eui.Label;
	private lists: eui.List;
	private arrColl: eui.ArrayCollection;
	private _battleController: BattleController;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		let self = this;
		self.skinName = SkinName.CardSkillViewSkin;
	}

	/** 面板开启执行函数，用于子类继承 */
	public open(...param: any[]): void {
		super.open(param);
		this._battleController = param[0];
		this.initView();
		this.addEvents();
	}

	private initView(): void {
		this.bar.labelDisplay.visible = false;
		this.bar.bg.source = "battle_bar_json.ui_zdn_dazidi";
		(this.bar.thumb as eui.Image).source = "battle_bar_json.ui_zdn_dazi";
		this.arrColl = new eui.ArrayCollection();
		this.lists.itemRenderer = CardItem;
		this.lists.dataProvider = this.arrColl;
		this.updateCardLists();
	}

	public addEvents(): void {
		super.addEvents();
		App.NotificationCenter.addListener(EventsType.BULLET_LAUNCH, this.onBulletLaunch, this);
	}

	public removeEvents(): void {
		super.removeEvents();
		App.NotificationCenter.removeListener(EventsType.BULLET_LAUNCH, this.onBulletLaunch, this);
	}

	private updateCardLists(): void {
		this.arrColl.replaceAll([10001, 10002, 10003, 10004, 10005]);
	}

	/** 子弹发射 */
	private onBulletLaunch(cardVO: CardVO): void {
		if (parseInt(this.txt_energy.text) >= cardVO.energy) {
			let vo: BulletVO = GlobleData.getData(GlobleData.BulletVO, cardVO.bulletId);
			if (vo && this._battleController && this._battleController.battleView) {
				this._battleController.createBullet(TEAM_TYPE.BLUE, vo, cardVO.durable, cardVO.type, this._battleController.battleView.leftPlayer.localToGlobal(), this._battleController.battleView.rightPlayer.localToGlobal());
				this.txt_energy.text = parseInt(this.txt_energy.text) - cardVO.energy + "";
			}
		} else {
			App.Message.showText(App.Language.getLanguageText("label.02"));
		}
	}
}

window["CardSkillView"] = CardSkillView;
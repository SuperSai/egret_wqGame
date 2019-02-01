/**
 * 战斗中卡片技能界面
 */
class CardSkillView extends BaseEuiView {

	private bar: CustomProgressBar;
	private txt_energy: eui.Label;
	private txt_maxEnergy: eui.Label;
	private lists: eui.List;
	private arrColl: eui.ArrayCollection;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		let self = this;
		self.skinName = SkinName.CardSkillViewSkin;
	}

	/** 面板开启执行函数，用于子类继承 */
	public open(...param: any[]): void {
		super.open(param);
		this.initView();
	}

	private initView(): void {
		this.bar.bg.source = "battle_bar_json.ui_zdn_dazidi";
		(this.bar.thumb as eui.Image).source = "battle_bar_json.ui_zdn_dazi";
		this.arrColl = new eui.ArrayCollection();
		this.lists.itemRenderer = CardItem;
		this.lists.dataProvider = this.arrColl;
		this.updateCardLists();
	}

	public addEvents(): void {
		super.addEvents();
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
	}

	private updateCardLists(): void {
		this.arrColl.replaceAll([1, 2, 3, 4, 5]);
	}
}

window["CardSkillView"] = CardSkillView;
/**
 * 战斗界面
 */
class BattleView extends BaseEuiView {

	private blueInfo: BattleInfo;
	private redInfo: BattleInfo;
	private blueBlood: BattleBlood;
	private redBlood: BattleBlood;
	/** 必杀Item */
	private criItem: CriItem;
	private cardSkillView: CardSkillView;

	private _model: BattleModel;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		let self = this;
		self.skinName = SkinName.BattleViewSkin;
		self.setResources(["battle"]);
	}

	/** 对面板进行显示初始化，用于子类继承 */
	public initUI(): void {
		super.initUI();
		this.blueInfo.onAwake();
		this.redInfo.onAwake();
		this.blueBlood.onAwake();
		this.redBlood.onAwake();
		this.cardSkillView.open();
		this.criItem.onAwake();
	}

	/** 对面板数据的初始化，用于子类继承 */
	public initData(): void {
		super.initData();
		this._model = <BattleModel>this.controller.getModel();
	}

	public addEvents(): void {
		super.addEvents();
		let self = this;
	}

	public removeEvents(): void {
		super.removeEvents();
		let self = this;
	}


}
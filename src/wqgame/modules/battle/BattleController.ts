class BattleController extends BaseController {

	private _battleView: BattleView;
	private _battleModel: BattleModel;
	private _battleProxy: BattleProxy;

	public constructor() {
		super();
		let self = this;

		self._battleView = new BattleView(self, LayerMgr.GAME_MAP_LAYER);
		App.View.register(ViewConst.BATTLE, self._battleView);

		self._battleModel = new BattleModel(self);
		self.setModel(self._battleModel);

		self._battleProxy = new BattleProxy(self);

		//注册模块消息
		self.registerFunc(BattleConst.BATTLE_INIT, self.onBattleInit, self);
		self.initRegisterView();
	}

	private onBattleInit(): void {
		let self = this;
		if (App.View.isShow(ViewConst.BATTLE)) return;
		App.View.open(ViewConst.BATTLE);
	}

	/** 注册界面才可以打开界面 */
	private initRegisterView(): void {
		let self = this;
		App.View.register(ViewConst.SETTLEMENT, new SettlementView(this, LayerMgr.GAME_UI_LAYER));
	}

}
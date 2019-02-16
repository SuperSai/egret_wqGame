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
		// App.Timer.doFrame(1, 0, self.onBattleUpdate, self);
	}

	// private onBattleUpdate(): void {
	// 	if (this._battleModel.bulletBlues.length > 0) {
	// 		Log.trace(this._battleModel.bulletBlues[0].x);
	// 	}
	// }

	/** 注册界面才可以打开界面 */
	private initRegisterView(): void {
		let self = this;
		App.View.register(ViewConst.SETTLEMENT, new SettlementView(this, LayerMgr.GAME_UI_LAYER));
	}

	/** 创建子弹 */
	public createBullet(team: number, vo: BulletVO, durable: number, cardType: number, startPos: egret.Point, endPos: egret.Point): void {
		let bullet: BaseBullet = new BaseBullet(this, LayerMgr.GAME_UI_LAYER);
		bullet.team = team;
		bullet.open({ startPos: startPos, endPos: endPos, vo: vo, durable: durable, cardType: cardType });
		this.saveBulletsData(bullet.team, cardType, bullet);
		bullet.addToParent();
		bullet.doBulletPath(team == TEAM_TYPE.BLUE ? 1 : -1);
	}

	private saveBulletsData(team: number, cardType: number, bullet: BaseBullet): void {
		if (team == TEAM_TYPE.BLUE) {
			let blueBullets: BaseBullet[] = null;
			if (!this._battleModel.bulletBlues.ContainsKey(cardType)) {
				blueBullets = [];
				this._battleModel.bulletBlues.Add(cardType, blueBullets);
				blueBullets = this._battleModel.bulletBlues.TryGetValue(cardType);
			} else {
				blueBullets = this._battleModel.bulletBlues.TryGetValue(cardType);
			}
			if (blueBullets) blueBullets.push(bullet);
		} else if (team == TEAM_TYPE.RED) {
			let redBullets: BaseBullet[] = null;
			if (!this._battleModel.bulletReds.ContainsKey(cardType)) {
				redBullets = this._battleModel.bulletReds.TryGetValue(cardType);
				if (!redBullets) redBullets = [];
			} else {
				redBullets = this._battleModel.bulletReds.TryGetValue(cardType);
			}
			if (redBullets) redBullets.push(bullet);
		}
	}


	public get battleView(): BattleView {
		return this._battleView;
	}

	public set battleView(value: BattleView) {
		this._battleView = value;
	}

}
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
	public leftPlayer: eui.Image;
	public rightPlayer: eui.Image;
	private _battleController: BattleController;
	private _mode: BattleModel;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.isShowLoading = false;
		this.skinName = SkinName.BattleViewSkin;
		this.setResources(["battle"]);
	}

	/** 对面板进行显示初始化，用于子类继承 */
	public initUI(): void {
		super.initUI();
		this.blueInfo.onAwake();
		this.redInfo.onAwake();
		this.blueBlood.onAwake({ team: TEAM_TYPE.BLUE });
		this.blueBlood.setCurrBlood(1000, true);
		this.redBlood.onAwake({ team: TEAM_TYPE.RED });
		this.redBlood.setCurrBlood(1000, true);
		this.criItem.onAwake();
	}

	/** 对面板数据的初始化，用于子类继承 */
	public initData(): void {
		super.initData();
		this._mode = <BattleModel>this.controller.getModel();
		this._battleController = <BattleController>this.controller;
		this.cardSkillView.open(this._battleController);
	}

	public addEvents(): void {
		super.addEvents();
		App.NotificationCenter.addListener(EventsType.UPDATE_BATTLE_VIEW, this.onUpdateBattleView, this);
	}

	public removeEvents(): void {
		super.removeEvents();
		App.NotificationCenter.removeListener(EventsType.UPDATE_BATTLE_VIEW, this.onUpdateBattleView, this);
	}

	private onUpdateBattleView(team: number, cardType: number, bullet: BaseBullet): void {
		if (team == TEAM_TYPE.BLUE) {
			ObjectUtils.removeFromArray(bullet, this._mode.bulletBlues.TryGetValue(cardType));
		} else if (team == TEAM_TYPE.RED) {
			ObjectUtils.removeFromArray(bullet, this._mode.bulletReds.TryGetValue(cardType));
		}
	}

	public close(...param: any[]): void {
		super.close(param);
		this.cardSkillView.close();
	}
}
class BattleModel extends BaseModel {

	private _bulletBlues: BaseBullet[];
	private _bulletReds: BaseBullet[];

	public constructor($controller: BaseController) {
		super($controller)
		let self = this;
		self.init();
	}
	/** 初始化 */
	private init(): void {
		this._bulletBlues = [];
		this._bulletReds = [];
	}

	/** 蓝队子弹列表 */
	public get bulletBlues(): BaseBullet[] {
		return this._bulletBlues;
	}

	public set bulletBlues(value: BaseBullet[]) {
		this._bulletBlues = value;
	}

	/** 红队子弹列表 */
	public get bulletReds(): BaseBullet[] {
		return this._bulletReds;
	}

	public set bulletReds(value: BaseBullet[]) {
		this._bulletReds = value;
	}

}


enum TEAM_TYPE {
	RED = 1,
	BLUE = 2,
}

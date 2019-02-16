class BattleModel extends BaseModel {

	private _bulletBlues: TSDictionary<number, BaseBullet[]>;
	private _bulletReds: TSDictionary<number, BaseBullet[]>;

	public constructor($controller: BaseController) {
		super($controller)
		let self = this;
		self.init();
	}
	/** 初始化 */
	private init(): void {
		this._bulletBlues = new TSDictionary<number, BaseBullet[]>();
		this._bulletReds = new TSDictionary<number, BaseBullet[]>();
	}

	/** 蓝队子弹列表 */
	public get bulletBlues(): TSDictionary<number, BaseBullet[]> {
		return this._bulletBlues;
	}

	public set bulletBlues(value: TSDictionary<number, BaseBullet[]>) {
		this._bulletBlues = value;
	}

	/** 红队子弹列表 */
	public get bulletReds(): TSDictionary<number, BaseBullet[]> {
		return this._bulletReds;
	}

	public set bulletReds(value: TSDictionary<number, BaseBullet[]>) {
		this._bulletReds = value;
	}

}


enum TEAM_TYPE {
	RED = 1,
	BLUE = 2,
}

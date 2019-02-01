class BasePlayer extends BaseSpriteView {

	private _team: number = -1;
	private _blood: number = 0;
	private _maxBlood: number = 0;
	private _isDie: boolean = false;
	private _dieEffectName: string = "";

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
	}

	public onUpdate(passTime: number): void {

	}

	/** 队伍 */
	public get team(): number {
		return this._team;
	}

	public set team(value: number) {
		this._team = value;
	}

	/** 当前血量 */
	public get blood(): number {
		return this._blood;
	}

	public set blood(value: number) {
		this._blood = value;
		this._isDie = this._blood <= 0;
	}

	/** 最大血量 */
	public get maxBlood(): number {
		return this._maxBlood;
	}

	public set maxBlood(value: number) {
		this._maxBlood = value;
	}

	/** 是否死亡 */
	public get isDie(): boolean {
		return this._isDie;
	}

	public set isDie(value: boolean) {
		this._isDie = value;
	}

	/** 死亡特效名字 */
	public get dieEffectName(): string {
		return this._dieEffectName;
	}

	public set dieEffectName(value: string) {
		this._dieEffectName = value;
	}
}
class BaseBullet extends BaseSpriteView {

	private _bulletId: number = -1;
	private _type: number = 0;
	private _damage: number = 0;
	private _defense: number = 0;


	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
	}

	public onUpdate(passTime: number): void {

	}

	public get bulletId(): number {
		return this._bulletId;
	}

	public set bulletId(value: number) {
		this._bulletId = value;
	}

	public get type(): number {
		return this._type;
	}

	public set type(value: number) {
		this._type = value;
	}

	/** 伤害力 */
	public get damage(): number {
		return this._damage;
	}

	public set damage(value: number) {
		this._damage = value;
	}

	/** 防御力 */
	public get defense(): number {
		return this._defense;
	}

	public set defense(value: number) {
		this._defense = value;
	}
}
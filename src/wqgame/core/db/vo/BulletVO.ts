class BulletVO {

	public bulletId: number;
	/** 资源名称（类型） */
	public assetname: string;
	/** 名字 */
	public name: string;
	/** 爆炸动画 */
	public bombAni: string;
	/** 子弹发射音效 */
	public startSound: string;
	/** 子弹销毁音效 */
	public dieSound: string;

	private _isRotation: boolean = false;

	public get isRotation(): boolean {
		return this._isRotation;
	}

	public set isRotation(value) {
		this._isRotation = Number(value) === 0 ? false : true;
	}
}
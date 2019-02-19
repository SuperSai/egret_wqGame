class BaseBullet extends BaseSpriteView {

	private _bulletId: number = -1;
	private _team: number = 0;
	/** 耐久度 */
	private _durable: number = 0;
	private _imgButtle: eui.Image;
	private _data: { startPos: egret.Point, endPos: egret.Point, vo: BulletVO, durable: number, cardType: number };
	private _topPoint: egret.Point;
	private _top: number = 0;
	private _distance: number = 750;
	private _BattleController: BattleController;
	private _battleModel: BattleModel;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
	}

	public open(...param: any[]): void {
		super.open(param);
		this._data = param[0];
		if (this._data) {
			this._durable = this._data.durable;
			this.x = this._data.startPos.x;
			this.y = this._data.startPos.y;
			this._data.endPos.x += 60;
			this.setBulletTop();
			this.setButtleImg();
		}
	}

	/** 设置子弹的至高点 */
	private setBulletTop(): void {
		switch (this._data.cardType) {
			case 1:
				this._top = 600;
				break;
			case 2:
				this._top = 300;
				break;
			case 3:
				this._top = 0;
				break;
		}
	}

	private setButtleImg(): void {
		let path: string = PathConfig.ButtlePath.replace("{0}", this._data.vo.assetname + "");
		this._imgButtle = new eui.Image(path);
		this.addChild(this._imgButtle);
	}

	public onUpdate(passTime: number): void {

	}

	public get factor(): number {
		return 0;
	}

	public set factor(value: number) {
		this.x = this.x = (1 - value) * (1 - value) * this._data.startPos.x + 2 * value * (1 - value) * this._topPoint.x + value * value * this._data.endPos.x;
		this.y = this.y = (1 - value) * (1 - value) * this._data.startPos.y + 2 * value * (1 - value) * this._topPoint.y + value * value * this._data.endPos.y;
		this.bulletCollision();
	}

	/** 子弹碰撞处理 */
	private bulletCollision(): void {
		if (this._team == TEAM_TYPE.BLUE && this._BattleController) {
			if (!this._battleModel) {
				this._battleModel = this._BattleController.getModel() as BattleModel;
			}
			if (this._battleModel) {
				if (this._battleModel.bulletReds.ContainsKey(this._data.cardType)) {
					let bullets = this._battleModel.bulletReds.TryGetValue(this._data.cardType);
					if (bullets && bullets.length > 0) {
						for (let i: number = 0; i < bullets.length; i++) {
							let redBullet: BaseBullet = bullets[i];
							if (this.hitTestPoint(redBullet.x, redBullet.y)) {
								if (this._durable - redBullet.durable > 0) {
									this._durable = this._durable - redBullet.durable;
									redBullet.removeFromParent();
									redBullet.bulletBombEffect();
								} else if (this._durable == redBullet.durable) {
									App.NotificationCenter.dispatch(EventsType.UPDATE_BATTLE_VIEW, this._team, this._data.cardType, this);
									App.NotificationCenter.dispatch(EventsType.UPDATE_BATTLE_VIEW, redBullet.team, this._data.cardType, redBullet);
									redBullet.removeBulletTweens();
									redBullet.removeFromParent();
									this.removeFromParent();
									this.bulletBombEffect();
								} else {
									redBullet.durable = redBullet.durable - this._durable;
									this.removeFromParent();
									this.bulletBombEffect();
								}
							}
						}
					}
				}
			}
		}
	}

	/** 执行子弹轨迹 */
	public doBulletPath(dir: number): void {
		this.setBulletPathData(dir, 700);
	}

	private setBulletPathData(dir: number, time: number): void {
		this._imgButtle.scaleX = dir;
		this._distance = egret.Point.distance(this._data.startPos, this._data.endPos) * dir;
		this._topPoint = new egret.Point(this.x + this._distance / 2, this.y - this._top);
		if (this._data.vo.isRotation) {
			egret.Tween.get(this._imgButtle, { loop: true }).to({ rotation: 360 }, 100);
		}
		egret.Tween.get(this).to({ factor: 1 }, time).call(() => {
			this.bulletBombEffect();
			this.removeFromParent();
			App.NotificationCenter.dispatch(EventsType.UPDATE_BATTLE_VIEW, this._team, this._data.cardType, this);
			App.NotificationCenter.dispatch(EventsType.UPDATE_BLOOD, this._team, this._durable);
		});
	}

	public bulletBombEffect(): void {
		this.removeBulletTweens();
		let bomb: BoneAnimation = ResourcePool.Instance.pop(this._data.vo.bombAni, ResourcePool.SKE);
		bomb.x = this.x;
		bomb.y = this.y;
		App.Layer.addToLayer(bomb, LayerMgr.GAME_EFFECT_LAYER);
		bomb.play();
	}

	public removeBulletTweens(): void {
		egret.Tween.removeTweens(this._imgButtle);
		egret.Tween.removeTweens(this);
	}

	public get bulletId(): number {
		return this._bulletId;
	}

	public set bulletId(value: number) {
		this._bulletId = value;
	}

	public get team(): number {
		return this._team;
	}

	public set team(value: number) {
		this._team = value;
	}

	/** 耐久度 */
	public get durable(): number {
		return this._durable;
	}

	public set durable(value: number) {
		this._durable = value;
	}

	public get BattleController(): BattleController {
		return this._BattleController;
	}

	public set BattleController(value: BattleController) {
		this._BattleController = value;
	}
}
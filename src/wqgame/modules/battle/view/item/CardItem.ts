/**
 * 战斗点击的卡片
 */
class CardItem extends BaseEuiItem {

	private imgCard: eui.Image;
	private imgCDMask: eui.Image;
	private imgSelect: eui.Image;
	private txt_cd: eui.Label;
	/** 能量 */
	private txt_energy: eui.Label;
	/** 耐久度 */
	private txt_durable: eui.Label;
	private btn_card: eui.Group;
	private _vo: CardVO;
	private _isCDTime: boolean = false;

	public constructor() {
		super(SkinName.CardItemSkin);
	}

	public childrenCreated() {
		super.childrenCreated();
		this.addEvents();
	}

	public dataChanged() {
		super.dataChanged();
		this.imgSelect.visible = false;
		if (!this._isCDTime) {
			this.imgCDMask.visible = this.txt_cd.visible = false;
		}
		this._vo = GlobleData.getData(GlobleData.CardVO, this.data);
		if (this._vo) {
			let path: string = PathConfig.CardPath.replace("{0}", this._vo.icon);
			this.imgCard.source = path;
			this.txt_energy.text = this._vo.energy + "";
			this.txt_durable.text = this._vo.durable + "";
		}
	}

	public addEvents(): void {
		this.btn_card.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onCardTouchBegin, this);
		this.btn_card.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCard, this);
		this.setBtnEffect(["btn_card"]);
	}

	public removeEvents(): void {
		super.removeEvents();
		this.btn_card.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onCardTouchBegin, this);
		this.btn_card.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCard, this);
	}

	private onCardTouchBegin(): void {
		this.imgSelect.visible = true;
		this.btn_card.y -= 20;
		this.btn_card.once(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onCardTouchEnd, this);
	}

	private onCardTouchEnd(): void {
		this.imgSelect.visible = false;
		this.btn_card.y += 20;
	}

	private onClickCard(): void {
		if (this._vo) {
			this.imgSelect.visible = false;
			this.btn_card.y += 20;
			App.NotificationCenter.dispatch(EventsType.BULLET_LAUNCH, this._vo);
		}
	}
}
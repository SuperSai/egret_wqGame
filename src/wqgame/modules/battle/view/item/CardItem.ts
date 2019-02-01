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

	public constructor() {
		super(SkinName.CardItemSkin);
	}

	public childrenCreated() {
		super.childrenCreated();
		this.addEvents();
	}

	public dataChanged() {
		super.dataChanged();
	}

	public addEvents(): void {
		this.btn_card.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCard, this);
		this.setBtnEffect(["btn_card"]);
	}

	public removeEvents(): void {
		super.removeEvents();
		this.btn_card.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCard, this);
	}

	private onClickCard(): void {

	}
}
/**
 * 必杀
 */
class CriItem extends BaseEuiItem {

	private imgCri: eui.Image;
	private btn_cri: eui.Group;

	public constructor() {
		super(SkinName.CriItemSkin);
	}

	public onAwake($data: any = null): void {
		super.onAwake($data);
		this.addEvents();
	}

	public addEvents(): void {
		this.btn_cri.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCri, this);
		this.setBtnEffect(["btn_cri"]);
	}

	public removeEvents(): void {
		super.removeEvents();
		this.btn_cri.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCri, this);
	}

	private onClickCri(): void {
		App.View.open(ViewConst.SETTLEMENT);
	}
}

window["CriItem"] = CriItem;
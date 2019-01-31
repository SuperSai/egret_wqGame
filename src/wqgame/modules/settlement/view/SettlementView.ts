/**
 * 结算界面
 */
class SettlementView extends BaseEuiView {

	private imgBg: eui.Image;
	private btn_sure: eui.Button;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.SettlementViewSkin;
		this.setResources(["settlement"]);
	}

	/** 对面板进行显示初始化，用于子类继承 */
	public initUI(): void {
		super.initUI();
	}

	/** 对面板数据的初始化，用于子类继承 */
	public initData(): void {
		super.initData();
	}

	public addEvents(): void {
		super.addEvents();
	}

	public removeEvents(): void {
		super.removeEvents();
	}
}
/**
 * 匹配界面
 */
class VSView extends BaseEuiView {

	private head_left: HeadItem;
	private head_right: HeadItem;
	private imgSeek: eui.Image;
	private imgVS: eui.Image;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.VSViewSkin;
		this.setResources(["vs"]);
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
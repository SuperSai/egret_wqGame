/**
 * 大厅主界面
 */
class HallView extends BaseEuiView {

	private btn_battle: eui.Button;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.HallViewSkin;
		this.setResources(["hall", "guildIcon"]);
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
		this.btn_battle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterBattle, this);
		this.setBtnEffect(["btn_battle"]);
	}

	public removeEvents(): void {
		super.removeEvents();
		this.btn_battle.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onEnterBattle, this);
	}

	/** 进入战斗 */
	private onEnterBattle(): void {
		App.Scene.runScene(SceneConsts.VS, true);
	}

	/** 显示功能菜单 */
	private onShowMenu(): void {

	}
}
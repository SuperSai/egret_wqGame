/**
 * 匹配界面
 */
class VSView extends BaseEuiView {

	private head_left: HeadItem;
	private head_right: HeadItem;
	private imgSeek: eui.Image;
	private imgVS: eui.Image;
	private bar: CustomProgressBar;
	private btn_cancel: eui.Group;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.VSViewSkin;
		this.setResources(["vs"]);
	}

	/** 对面板进行显示初始化，用于子类继承 */
	public initUI(): void {
		super.initUI();
		this.btn_cancel.visible = true;
		this.head_left.visible = this.head_right.visible = this.btn_cancel.visible = this.bar.visible = false;
		this.bar.value = 0;
		this.bar.labelDisplay.visible = false;
		this.head_left.setBgSource("vs_json.ui_pipei_lankuang");
		this.head_right.setBgSource("vs_json.ui_pipei_hongkuang");
		this.head_left.hideNameGroup();
		this.head_right.hideNameGroup();
	}

	/** 对面板数据的初始化，用于子类继承 */
	public initData(): void {
		super.initData();
		this.initEffect();
	}

	private initEffect(): void {
		App.Effect.doFromTopToBottom(this.imgVS, () => {
			egret.Tween.get(this.head_left).set({ left: -this.head_left.width, visible: true }).wait(200).to({ left: 58 }, 200, egret.Ease.elasticInOut).call(() => {
				egret.Tween.removeTweens(this.head_left);
				this.head_left.doNameGroupEffect();
			}, this.head_left);
			egret.Tween.get(this.head_right).set({ right: -this.head_right.width, visible: true }).wait(200).to({ right: 58 }, 200, egret.Ease.elasticInOut).call(() => {
				egret.Tween.removeTweens(this.head_right);
				this.btn_cancel.visible = true;
			}, this.head_right);
		});
		egret.Tween.get(this.bar).wait(2000).set({ visible: true }).call(() => { this.btn_cancel.visible = false }).to({ value: 100 }, 1000).call(() => {
			egret.Tween.removeTweens(this.bar);
			this.onCancelHandler();
			App.Scene.runScene(SceneConsts.BATTLE, true);
		}, this.bar);
	}

	public addEvents(): void {
		super.addEvents();
		this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelHandler, this);
		this.setBtnEffect(["btn_cancel"]);
	}

	public removeEvents(): void {
		super.removeEvents();
		this.btn_cancel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onCancelHandler, this);
	}

	private onCancelHandler(): void {
		App.View.close(ViewConst.VS);
	}
}
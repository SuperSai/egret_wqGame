/**
 * 结算界面
 */
class SettlementView extends BaseEuiView {

	private imgBg: eui.Image;
	private btn_sure: eui.Button;
	private lists: eui.List;
	private rewardGroup: eui.Group;
	private container: eui.Group;

	public constructor($controller: BaseController, $layer: number) {
		super($controller, $layer);
		this.skinName = SkinName.SettlementViewSkin;
		this.setResources(["settlement"]);
	}

	/** 对面板进行显示初始化，用于子类继承 */
	public initUI(): void {
		super.initUI();
		this.container.scaleX = this.container.scaleY = 0;
		this.container.verticalCenter = 50;
		this.rewardGroup.scaleX = this.rewardGroup.scaleY = 0;
		this.lists.itemRenderer = GoodsItem;
	}

	/** 对面板数据的初始化，用于子类继承 */
	public initData(): void {
		super.initData();
		this.initEffect();
	}

	private initEffect() {
		egret.Tween.get(this.container).wait(100).
			to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.bounceInOut).wait(1000).
			to({ verticalCenter: -120 }, 500, egret.Ease.bounceInOut).wait(100).call(() => {
				egret.Tween.removeTweens(this.container);
				egret.Tween.get(this.rewardGroup).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.quintInOut).call(() => {
					egret.Tween.removeTweens(this.rewardGroup);
					this.updateRewardList();
				}, this.rewardGroup);
			});
	}

	private updateRewardList(): void {
		this.lists.dataProvider = new eui.ArrayCollection([1, 2, 3, 4]);
		this.lists.validateNow();
	}

	public addEvents(): void {
		super.addEvents();
		this.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGotoHall, this);
		this.setBtnEffect(["btn_sure"]);
	}

	public removeEvents(): void {
		super.removeEvents();
		this.btn_sure.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onGotoHall, this);
	}

	private onGotoHall(): void {
		App.Scene.runScene(SceneConsts.HALL, true);
	}
}
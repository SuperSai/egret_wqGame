class HeadItem extends BaseEuiItem {

	private imgBg: eui.Image;
	private imgHead: eui.Image;
	private imgSeek: eui.Image;

	private imgGuild: eui.Image;
	private txt_name: eui.Label;
	private nameGroup: eui.Group;

	public constructor() {
		super(SkinName.HeadItemSkin);
	}

	public onAwake($data: any = null): void {
		let self = this;
		super.onAwake($data);
		this.imgSeek.visible = false;
		this.imgHead.source = $data.headUrl;
		this.imgGuild.source = $data.guildUrl;
		this.txt_name.text = $data.name;
	}

	public setBgSource(url: string) {
		this.imgBg.source = url;
	}

	public doNameGroupEffect(): void {
		egret.Tween.get(this.nameGroup).wait(100).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.quartInOut);
	}

	public hideNameGroup(): void {
		this.nameGroup.scaleX = this.nameGroup.scaleY = 0;
	}

	/** 释放 */
	public release(): void {
		super.release();
		this.imgSeek.visible = true;
		this.hideNameGroup();
	}
}
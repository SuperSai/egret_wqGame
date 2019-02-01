/**
 * 战斗中的用户信息
 */
class BattleInfo extends BaseEuiItem {

	private imgGuild: eui.Image;
	private txt_level: eui.Label;
	private txt_name: eui.Label;
	private txt_guildName: eui.Label;
	private txt_cups: eui.Label;

	public constructor() {
		super(SkinName.BattleInfoSkin);
	}

	public onAwake($data: any = null): void {
		super.onAwake($data);
		if (this.data) {
			this.imgGuild.source = this.data.guildUrl;
			this.txt_level.text = this.data.level;//等级
			this.txt_name.text = this.data.name;//名字
			this.txt_guildName.text = this.data.guildName;//公会名字
			this.txt_cups.text = this.data.cups;//奖杯数
		}
	}
}

window["BattleInfo"] = BattleInfo;
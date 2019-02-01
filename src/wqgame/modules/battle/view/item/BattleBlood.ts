/**
 * 战斗中的血条
 */
class BattleBlood extends BaseEuiItem {

	private bar: CustomProgressBar;
	private txt_blood: eui.Label;

	public constructor() {
		super(SkinName.BattleBloodSkin);

	}

	public onAwake($data: any = null): void {
		super.onAwake($data);
		this.bar.bg.source = "battle_bar_json.ui_zdn_xuedi";
		let barUrl: string = "";
		if (this.data) {
			if (this.data.team == TEAM_TYPE.BLUE) {
				barUrl = "battle_bar_json.ui_zdn_xuelan";
			} else {
				barUrl = "battle_bar_json.ui_zdn_xuehong";
			}
			(this.bar.thumb as eui.Image).source = barUrl;
		}
	}

	/** 设置血量 */
	public setCurrBlood(blood: number, isMaxBlood: boolean = false): void {
		this.bar.value = blood;
		this.txt_blood.text = blood + "";
		if (isMaxBlood) {
			this.bar.maximum = blood;
		}
	}

}

window["BattleBlood"] = BattleBlood;
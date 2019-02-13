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
		this.bar.labelDisplay.visible = false;
		this.bar.bg.source = "battle_bar_json.ui_zdn_xuedi";
		let barUrl: string = "";
		if (this.data) {
			if (this.data.team == TEAM_TYPE.BLUE) {
				barUrl = "battle_bar_json.ui_zdn_xuelan";
			} else {
				barUrl = "battle_bar_json.ui_zdn_xuehong";
			}
			(this.bar.thumb as eui.Image).source = barUrl;
			this.addEvents();
		}
	}

	private addEvents(): void {
		App.NotificationCenter.addListener(EventsType.UPDATE_BLOOD, this.onUpdateBlood, this);
	}

	public removeEvents(): void {
		super.removeEvents();
		App.NotificationCenter.removeListener(EventsType.UPDATE_BLOOD, this.onUpdateBlood, this);
	}

	private onUpdateBlood(team: number, durable: number): void {
		if (team != this.data.team) {
			this.bar.value -= durable;
			this.txt_blood.text = this.bar.value + "";
		}
	}

	/** 设置血量 */
	public setCurrBlood(blood: number, isMaxBlood: boolean = false): void {
		if (isMaxBlood) {
			this.bar.maximum = blood;
		}
		this.bar.value = blood;
		this.txt_blood.text = blood + "";
	}

}

window["BattleBlood"] = BattleBlood;
class BattleModel extends BaseModel {


	public constructor($controller: BaseController) {
		super($controller)
		let self = this;
		self.init();
	}
	/** 初始化 */
	private init(): void {
	}

}


enum TEAM_TYPE {
	RED = 1,
	BLUE = 2,
}

class VSController extends BaseController {

	private _vsView: VSView;

	public constructor() {
		super();

		this._vsView = new VSView(this, LayerMgr.GAME_UI_LAYER);
		App.View.register(ViewConst.VS, this._vsView);

		//注册模块消息
		this.registerFunc(VSConst.VS_INIT, this.onVSInit, this);
	}

	private onVSInit(param: any[]): void {
		App.View.open(ViewConst.VS, null, this._vsView);
	}
}
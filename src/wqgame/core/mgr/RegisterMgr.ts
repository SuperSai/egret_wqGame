/** 
 * 控制器注册管理类
 */
class RegisterMgr extends BaseClass {
	public constructor() {
		super();
	}

	/** 初始化场景 */
	public initScene(): void {
		App.Scene.register(SceneConsts.LOGIN, new LoginScene());
		App.Scene.register(SceneConsts.HALL, new HallScene());
		App.Scene.register(SceneConsts.BATTLE, new BattleScene());
	}

	/** 
	 * 初始化所有模块控制器
	 */
	public initModules(): void {
		App.Controller.register(ControllerConst.LOGIN, new LoginController());
		App.Controller.register(ControllerConst.HALL, new HallController());
		App.Controller.register(ControllerConst.BATTLE, new BattleController());
		App.Controller.register(ControllerConst.VS, new VSController());
	}
}

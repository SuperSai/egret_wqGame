/**
 * 各种效果工具类
 */
class EffectUtils extends BaseClass {
    /**
     * 构造函数
     */
	public constructor() {
		super();
	}

    /**
     * 类似mac上图标上下抖动的效果
     * @param obj 要抖动的对象，使用
     * @param initY 要抖动的对象的初始Y值，原始位置
     * @example eval(macIconShake("this.btnIcon", 100));
     * @returns {string} 返回的是一个要执行代码的字符串，通过eval执行
     */
	public doMacIconShake(obj: string, initY: number = 0): string {
		//抖动频率[时间，移动距离]，可修改
		var arr: Array<any> = [
			[20, 200],
			[15, 200],
			[10, 200],
			[5, 200]
		];

		var str: string = "egret.Tween.get(" + obj + ")";
		for (var i: number = 0, len: number = arr.length; i < len; i++) {
			str += ".to({'y':" + initY + "-" + arr[i][0] + "}, " + arr[i][1] + ")";
			str += ".to({'y':" + initY + "}, " + arr[i][1] + ")";
		}
		str += ";";
		return str;
	}

	/** 开始闪烁 */
	public startFlicker(obj: egret.DisplayObject, alphaTime: number): void {
		obj.alpha = 1;
		egret.Tween.get(obj).to({ "alpha": 0 }, alphaTime).to({ "alpha": 1 }, alphaTime).call(this.startFlicker, this, [obj, alphaTime]);
	}

	/** 停止闪烁 */
	public stopFlicker(obj: egret.DisplayObject): void {
		egret.Tween.removeTweens(obj);
	}

	/** 爆炸特效 */
	public doBombEffect(bombName: string, pos: egret.Point, obj: any): void {
		let self = this;
		let bombBone: BoneAnimation = ResourcePool.Instance.pop(bombName, ResourcePool.SKE);
		App.Layer.addToLayer(bombBone, LayerMgr.GAME_EFFECT_LAYER);
		bombBone.x = pos.x;
		bombBone.y = pos.y;
		bombBone.play(() => {
			App.Display.removeFromParent(bombBone);
		}, obj);
	}

	/** 从上往下 */
	public doFromTopToBottom(obj: any, callback: Function = null): void {
		if (obj) {
			egret.Tween.get(obj).set({ scaleX: 5, scaleY: 5, verticalCenter: -300 }).wait(200).to({ scaleX: 1, scaleY: 1, verticalCenter: 0 }, 100, egret.Ease.elasticInOut).call(() => {
				egret.Tween.removeTweens(obj);
				callback && callback();
			}, obj);
		} else {
			callback && callback();
		}
	}

	/** 从两边进入 */
	public doBothSides(obj: any, dir: string, from: number, to: number, callback: Function = null): void {
		if (obj) {
			egret.Tween.get(obj).set({ dir: from }).wait(200).to({ dir: to }, 100).call(() => {
				egret.Tween.removeTweens(obj);
				callback && callback();
			}, obj);
		} else {
			callback && callback();
		}
	}

	/** 物品飞入的特效 */
	public doGoodsFlyEffect(obj: egret.DisplayObjectContainer, starPos: egret.Point, endPos: egret.Point, callback: Function, duration: number = 300): void {
		egret.Tween.get(obj).set({ x: starPos.x, y: starPos.y });
		egret.Tween.get(obj).to({ x: endPos.x, y: endPos.y }, duration).call(() => {
			egret.Tween.removeTweens(obj);
			callback && callback();
		})
	}


}

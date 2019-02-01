/**
 * 物品Item
 */
class GoodsItem extends BaseEuiItem {

	private imgQua: eui.Image;
	private imgIcon: eui.Image;
	private _info: GoodsInfo;
	public constructor() {
		super(SkinName.GoodsItemSkin);
	}

	public dataChanged() {
		super.dataChanged();
		if (this.data && this.data instanceof GoodsInfo) {
			this._info = this.data;
			if (this._info) {
				this.imgIcon.source = this._info.url;
			}
		} else {
			Log.traceError("@David 物品数据为空或物品数据类型不是GoodsInfo!");
		}
	}
}
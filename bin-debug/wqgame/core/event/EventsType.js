var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EventsType = (function () {
    function EventsType() {
    }
    /** 发射子弹 */
    EventsType.BULLET_LAUNCH = "BULLET_LAUNCH";
    /** 更新城堡的血量 */
    EventsType.UPDATE_BLOOD = "UPDATE_BLOOD";
    EventsType.UPDATE_BATTLE_VIEW = "UPDATE_BATTLE_VIEW";
    return EventsType;
}());
__reflect(EventsType.prototype, "EventsType");
//# sourceMappingURL=EventsType.js.map
import { MenuType } from "../types/menu-type";
import { MenuActionType } from "../types/menu-action-type";
import { MenuActionEnum } from "../enums/menu-action-enum";

export function menuReducer(menu: MenuType, action: MenuActionType) {
  switch (action.type) {
    case MenuActionEnum.CHANGED_IS_OPEN:
      return { ...menu, isOpen: !menu.isOpen };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

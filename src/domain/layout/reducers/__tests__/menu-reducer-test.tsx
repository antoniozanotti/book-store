import { MenuActionEnum } from "../../enums/menu-action-enum";
import { MenuType } from "../../types/menu-type";
import { menuReducer } from "../menu-reducer";

describe("MenuReducer", () => {
  it("should open/close menu", async () => {
    let menu: MenuType = { isOpen: false };

    menu = menuReducer(menu, {
      type: MenuActionEnum.CHANGED_IS_OPEN,
    });

    expect(menu).toStrictEqual({ isOpen: true });

    menu = menuReducer(menu, {
      type: MenuActionEnum.CHANGED_IS_OPEN,
    });

    expect(menu).toStrictEqual({ isOpen: false });
  });

  it("should throw error", async () => {
    let menu: MenuType = { isOpen: false };

    const error = () => {
      menuReducer(menu, {
        type: "error",
      });
    };

    expect(error).toThrow(Error);
  });
});

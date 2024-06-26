"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { MenuType } from "../types/menu-type";
import { MenuActionType } from "../types/menu-action-type";
import { MenuActionEnum } from "../enums/menu-action-enum";
import { MenuContextType } from "../types/menu-context-type";

const initialState: MenuType = {
  isOpen: false,
};

const MenuContext = createContext<MenuContextType>({
  state: initialState,
  dispatch: () => {},
});

function menuReducer(menu: MenuType, action: MenuActionType) {
  switch (action.type) {
    case MenuActionEnum.CHANGED_IS_OPEN:
      return { ...menu, isOpen: !menu.isOpen };
    default:
      throw Error("Unknown action: " + action.type);
  }
}

export function MenuProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(menuReducer, initialState);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenuContext(): MenuContextType {
  return useContext(MenuContext);
}

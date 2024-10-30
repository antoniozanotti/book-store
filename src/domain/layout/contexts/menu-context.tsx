"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { MenuType } from "../types/menu-type";
import { MenuContextType } from "../types/menu-context-type";
import { menuReducer } from "../reducers/menu-reducer";

const initialState: MenuType = { isOpen: false };

const MenuContext = createContext<MenuContextType>({
  state: initialState,
  dispatch: () => {},
});

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

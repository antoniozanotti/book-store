"use client";

import { ChevronDownIcon, ChevronLeft } from "lucide-react";
import { useState, useRef } from "react";
import { UiCollapsibleComponentInterface } from "./ui-collapsible-component-interface";

export function UiCollapsibleComponent({
  shouldCloseWhenOutside,
  theHeader,
  theContent,
  ...props
}: UiCollapsibleComponentInterface) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  function onClickHandler() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function onFocusHandler() {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
  }

  function onBlurHandler() {
    timeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
    });
  }

  const contentStyles = isOpen ? "lg:absolute lg:z-[100]" : "hidden";

  return (
    <div {...props} onBlur={onBlurHandler} onFocus={onFocusHandler}>
      <button
        className="flex cursor-pointer gap-2 p-4 lg:px-10 lg:py-2 items-center"
        onClick={onClickHandler}
        tabIndex={0}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="grow">{theHeader}</span>
        {isOpen ? (
          <ChevronDownIcon className="size-4" />
        ) : (
          <ChevronLeft className="size-4" />
        )}
      </button>
      <div className={contentStyles}>{theContent}</div>
    </div>
  );
}

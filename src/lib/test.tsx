import React, { ReactElement, ReactNode } from "react";
import {
  render,
  RenderOptions,
  RenderResult,
  Screen,
} from "@testing-library/react";

function AllTheProviders({ children }: { children: React.ReactNode }) {
  return <div data-testid="container">{children}</div>;
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): RenderResult {
  return render(ui, { wrapper: AllTheProviders, ...options });
}

function firstComponent(screen: Screen) {
  return screen.getByTestId("container").firstChild;
}

export * from "@testing-library/react";
export * from "@testing-library/user-event";
export { customRender as render, firstComponent };
import "@testing-library/jest-dom";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => {
  return {
    useRouter() {
      return { push: () => {} };
    },
    useParams: () => ({}),
    notFound: () => null,
    usePathname: () => null,
    useSearchParams: () => null,
  };
});

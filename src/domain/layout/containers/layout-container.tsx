import { ReactNode, Suspense } from "react";
import { HeaderContainer } from "@/domain/layout/containers/header-container";
import { UiWrapperComponent } from "@/domain/ui/components/ui-wrapper-component";
import { WarningModalComponent } from "../components/warning-modal-component";
import Loading from "@/app/loading";
import { FooterComponent } from "../components/footer-component";

export async function LayoutContainer({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col">
      <WarningModalComponent />
      <HeaderContainer />
      <UiWrapperComponent
        className="bg-primary-50 xl:rounded-t-lg grow -mt-20 mb-20"
        data-testid="content"
      >
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </UiWrapperComponent>
      <FooterComponent />
    </div>
  );
}

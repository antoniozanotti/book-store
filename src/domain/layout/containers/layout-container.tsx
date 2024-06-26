import { ReactNode, Suspense } from "react";
import prisma from "@/lib/db";
import { HeaderContainer } from "@/domain/layout/containers/header-container";
import { LayoutProvider } from "../contexts/layout-context";
import { CategoryWithPagePrisma } from "@/domain/category/types/category-prisma";
import { UiWrapperComponent } from "@/domain/ui/components/ui-wrapper-component";
import { WarningModalComponent } from "../components/warning-modal-component";
import Loading from "@/app/loading";
import { FooterComponent } from "../components/footer-component";

export async function LayoutContainer({ children }: { children: ReactNode }) {
  const categories: CategoryWithPagePrisma[] = await prisma.category.findMany({
    include: {
      page: true,
    },
  });

  return (
    <LayoutProvider categories={categories}>
      <div className="min-h-dvh flex flex-col">
        <WarningModalComponent />
        <HeaderContainer />
        <UiWrapperComponent className="bg-primary-50 xl:rounded-t-lg grow -mt-20 mb-20" data-testid="content">
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </UiWrapperComponent>
        <FooterComponent />
      </div>
    </LayoutProvider>
  );
}

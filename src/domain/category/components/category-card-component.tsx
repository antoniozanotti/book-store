import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { CategoryWithPagePrisma } from "../types/category-prisma";
import { CategoryLinkComponent } from "./category-link-component";
import { UiFigureComponent } from "@/ui-figure-component";

export function CategoryCardComponent({
  category,
}: {
  category: CategoryWithPagePrisma;
}) {
  return (
    <article className="snap-start p-5 w-[227px] h-[361px] flex-none text-sm text-pretty">
      <CategoryLinkComponent category={category}>
        <UiFigureComponent
          src={`category/${category.page.slug}`}
          width={187}
          height={269}
          alt={category.name}
          className="w-[187px] h-[249px] overflow-hidden"
          innerImgStyle="hover:-mt-[20px]"
        />
      </CategoryLinkComponent>
      <UiTitleComponent level="p" size="small" className="line-clamp-2 mt-2">
        <CategoryLinkComponent category={category}>
          {category.name}
        </CategoryLinkComponent>
      </UiTitleComponent>
    </article>
  );
}

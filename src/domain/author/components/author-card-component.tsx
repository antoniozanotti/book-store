import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { AuthorWithPagePrisma } from "../types/author-prisma";
import { AuthorLinkComponent } from "./author-link-component";
import { UiFigureComponent } from "@/ui-figure-component";

export function AuthorCardComponent({
  author,
}: {
  author: AuthorWithPagePrisma;
}) {
  return (
    <article className="p-5 w-[227px] h-[267px] flex-none text-sm text-pretty">
      <AuthorLinkComponent author={author}>
        <UiFigureComponent
          src={`author/${author.page.slug}`}
          width={207}
          height={207}
          alt={author.name}
          className="w-[187px] h-[187px] relative overflow-hidden rounded-full"
          innerImgStyle="w-[187px] h-[187px] hover:w-[207px] hover:h-[207px] hover:-mt-[10px] object-cover"
        />
      </AuthorLinkComponent>
      <UiTitleComponent level="p" size="small" className="line-clamp-2 mt-2">
        <AuthorLinkComponent author={author}>{author.name}</AuthorLinkComponent>
      </UiTitleComponent>
    </article>
  );
}

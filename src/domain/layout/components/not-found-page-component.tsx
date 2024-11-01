import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import Link from "next/link";

export function NotFoundPageComponent() {
  return (
    <main className="p-10">
      <UiTitleComponent>Not Found</UiTitleComponent>
      <p>Could not find requested resource.</p>
      <Link href="/">Return Home.</Link>
    </main>
  );
}

import { render, screen } from "@/lib/test";
import { UiFigureComponent } from "../ui-figure-component";
import { productWithPagEandBookMock } from "@/domain/product/__tests__/product-with-page-and-book-mock";

describe("UiFigureComponent", () => {
  it("should render", async () => {
    const { container } = render(
      <UiFigureComponent
        src={`product/${productWithPagEandBookMock.page.slug}`}
        width={145}
        height={193}
        alt={productWithPagEandBookMock.name}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("should render with optional args", async () => {
    const { container } = render(
      <UiFigureComponent
        src={`product/${productWithPagEandBookMock.page.slug}`}
        width={187}
        originalWidth={640}
        height={269}
        alt={productWithPagEandBookMock.name}
        className="w-full sm:w-[187px] h-[249px] relative overflow-hidden"
        innerImgStyle="hover:-mt-[20px] w-full h-[269px] object-cover"
      />
    );
    expect(container).toMatchSnapshot();
  });
});

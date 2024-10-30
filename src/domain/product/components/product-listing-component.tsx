import { ProductListingComponentInterface } from "./product-listing-component-interface";
import { ProductCardComponent } from "./product-card-component";

export function ProductListingComponent({
  products,
  endCard,
  ...props
}: ProductListingComponentInterface) {
  const divStyles = "flex flex-wrap justify-center gap-4";
  props.className = props.className ? `${divStyles} ${props.className}` : divStyles;
  
  return (
    <div {...props}>
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product} />
      ))}
      {endCard}
    </div>
  );
}

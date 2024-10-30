import { UiButtonComponentInterface } from "./ui-price-component-interface";
import { Prisma } from "@prisma/client";
import { NumberFormatBase } from "react-number-format";

export function UiPriceComponent({ ...props }: UiButtonComponentInterface) {
  const value = new Prisma.Decimal(props.value ?? 0);
  props.value = value.toFixed(2);

  function format(value: string) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(parseFloat(value));
  }

  return (
    <NumberFormatBase
      {...props}
      format={format}
      displayType="text"
      valueIsNumericString={true}
      renderText={(value) => <>{value}</>}
    />
  );
}

"use client";

import { Slider } from "@nextui-org/react";
import { SearchActionEnum } from "../../enums/search-action-enum";
import { useSearchContext } from "../../contexts/search-context";
import { useCustomRouter } from "@/helpers/use-custom-router";
import { MAX_PRICE, MIN_PRICE } from "@/const/global";

export function FilterByPriceComponent() {
  const minPriceSelected = useSearchContext().state.minprice;
  const maxPriceSelected = useSearchContext().state.maxprice;
  const searchDispatch = useSearchContext().dispatch;
  const customRouter = useCustomRouter();

  function handleChangePriceRange(values: number[]) {
    searchDispatch({
      type: SearchActionEnum.UPDATED_PRICE,
      payload: { minprice: values[0], maxprice: values[1] },
    });
    customRouter.push(
      ["minprice", "maxprice"],
      values.map((value) => value.toString())
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full h-full items-start justify-center overflow-hidden">
      <Slider
        label="Price"
        size="sm"
        formatOptions={{ style: "currency", currency: "USD" }}
        step={10}
        minValue={MIN_PRICE}
        maxValue={MAX_PRICE}
        value={[minPriceSelected, maxPriceSelected]}
        onChange={(value) =>
          handleChangePriceRange(Array.isArray(value) ? value : [value])
        }
      />
    </div>
  );
}

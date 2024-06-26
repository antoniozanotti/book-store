"use client";

import { Divider, RadioGroup, Radio, cn } from "@nextui-org/react";
import { OrderByEnum } from "../../enums/order-by-enum";
import { SearchActionEnum } from "../../enums/search-action-enum";
import { useSearchContext } from "../../contexts/search-context";
import { useCustomRouter } from "@/helpers/use-custom-router";

export function OrderByComponent() {
  const orderby = useSearchContext().state.orderby;
  const searchDispatch = useSearchContext().dispatch;
  const customRouter = useCustomRouter();

  function handleChangeOrderBy(value: string) {
    searchDispatch({
      type: SearchActionEnum.UPDATED_ORDERBY,
      payload: { orderby: value },
    });
    customRouter.push("orderby", value);
  }

  return (
    <RadioGroup
      value={orderby}
      onValueChange={handleChangeOrderBy}
      size="sm"
      classNames={{
        wrapper: cn("gap-0"),
      }}
    >
      <Radio
        value={OrderByEnum.TITLE}
        classNames={{
          label: cn("py-2"),
        }}
      >
        Title
      </Radio>
      <Divider />
      <Radio
        value={OrderByEnum.PRICE}
        classNames={{
          label: cn("py-2"),
        }}
      >
        Price
      </Radio>
    </RadioGroup>
  );
}

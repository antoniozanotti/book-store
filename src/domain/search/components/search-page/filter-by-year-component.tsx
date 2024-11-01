"use client";

import { Slider } from "@nextui-org/react";
import { SearchActionEnum } from "../../enums/search-action-enum";
import { useSearchContext } from "../../contexts/search-context";
import { useCustomRouter } from "@/helpers/use-custom-router";
import { MAX_YEAR, MIN_YEAR } from "@/const/global";

export function FilterByYearComponent() {
  const minYearSelected = useSearchContext().state.minyear;
  const maxYearSelected = useSearchContext().state.maxyear;
  const searchDispatch = useSearchContext().dispatch;
  const customRouter = useCustomRouter();

  function handleChangeYearRange(values: number[]) {
    searchDispatch({
      type: SearchActionEnum.UPDATED_YEAR,
      payload: { minyear: values[0], maxyear: values[1] },
    });
    customRouter.push(
      ["minyear", "maxyear"],
      values.map((value) => value.toString())
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full h-full items-start justify-center overflow-hidden pt-10">
      <Slider
        label="Publication year"
        size="sm"
        formatOptions={{ useGrouping: false }}
        step={1}
        minValue={MIN_YEAR}
        maxValue={MAX_YEAR}
        value={[minYearSelected, maxYearSelected]}
        onChange={(value) =>
          handleChangeYearRange(Array.isArray(value) ? value : [value])
        }
      />
    </div>
  );
}

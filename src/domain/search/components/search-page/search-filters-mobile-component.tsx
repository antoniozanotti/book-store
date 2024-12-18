"use client";

import { UiTitleComponent } from "@/domain/ui/components/ui-title-component";
import { Accordion, AccordionItem, Tabs, Tab } from "@nextui-org/react";
import { FilterIcon } from "lucide-react";
import { FilterByCategoryComponent } from "./filter-by-category-component";
import { FilterByPriceComponent } from "./filter-by-price-component";
import { FilterByYearComponent } from "./filter-by-year-component";
import { OrderByComponent } from "./order-by-component";
import { ArrowDownNarrowWideIcon } from "lucide-react";

export function SearchFiltersMobileComponent() {
  return (
    <div className="px-4 lg:hidden bg-primary-100">
      <UiTitleComponent
        size="small"
        level="h2"
        className="hidden lg:block p-10 pb-0"
      >
        Filter
      </UiTitleComponent>
      <UiTitleComponent
        size="small"
        level="h2"
        className="hidden lg:block p-10 pb-0"
      >
        Order by
      </UiTitleComponent>
      <Accordion className="px-0">
        <AccordionItem
          key="1"
          aria-label="Search Options"
          title={
            <UiTitleComponent size="small" level="h2">
              Search Options
            </UiTitleComponent>
          }
        >
          <Tabs size="lg" fullWidth={true} color="primary">
            <Tab
              key="filter"
              title={
                <div className="flex items-center gap-x-2">
                  <FilterIcon />
                  <span>Filter</span>
                </div>
              }
            >
              <Accordion className="px-0">
                <AccordionItem
                  key="1"
                  aria-label="Filter by Category"
                  title="Category"
                >
                  <FilterByCategoryComponent />
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Additional Filters"
                  title="Additional Filters"
                >
                  <FilterByPriceComponent />
                  <FilterByYearComponent />
                </AccordionItem>
              </Accordion>
            </Tab>
            <Tab
              key="orderBy"
              title={
                <div className="flex items-center gap-x-2">
                  <ArrowDownNarrowWideIcon />
                  <span>Order by</span>
                </div>
              }
            >
              <OrderByComponent />
            </Tab>
          </Tabs>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

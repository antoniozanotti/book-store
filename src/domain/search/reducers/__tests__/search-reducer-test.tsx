import { searchMock } from "../../__tests__/search-mock";
import { OrderByEnum } from "../../enums/order-by-enum";
import { SearchActionEnum } from "../../enums/search-action-enum";
import { SearchType } from "../../types/search-type";
import { searchReducer } from "../search-reducer";

describe("About", () => {
  it("should update keyword", async () => {
    let search: SearchType = searchMock;

    search = searchReducer(search, {
      type: SearchActionEnum.UPDATED_KEYWORD,
      payload: { keyword: "Test" },
    });

    expect(search).toMatchSnapshot();
  });

  it("should update orderby", async () => {
    let search: SearchType = searchMock;

    search = searchReducer(search, {
      type: SearchActionEnum.UPDATED_ORDERBY,
      payload: { orderby: OrderByEnum.PRICE },
    });

    expect(search).toMatchSnapshot();
  });

  it("should update categories", async () => {
    let search: SearchType = searchMock;

    search = searchReducer(search, {
      type: SearchActionEnum.UPDATED_CATEGORIES,
      payload: { categories: ["a", "b"] },
    });

    expect(search).toMatchSnapshot();
  });

  it("should update price", async () => {
    let search: SearchType = searchMock;

    search = searchReducer(search, {
      type: SearchActionEnum.UPDATED_PRICE,
      payload: { minprice: 10, maxprice: 20 },
    });

    expect(search).toMatchSnapshot();
  });

  it("should update year", async () => {
    let search: SearchType = searchMock;

    search = searchReducer(search, {
      type: SearchActionEnum.UPDATED_YEAR,
      payload: { minyear: 2005, maxyear: 2010 },
    });

    expect(search).toMatchSnapshot();
  });

  it("should throw error", async () => {
    let search: SearchType = searchMock;

    const error = () => {
      searchReducer(search, {
        type: "error",
      });
    };

    expect(error).toThrow(Error);
  });
});

/**
 * @jest-environment node
 */
import { requestUrlMock } from "../../__tests__/request-url-mock";
import { searchParamsMock } from "../../__tests__/search-params-mock";
import {
  getCursor,
  getProductsByRequestUrl,
  getSearchParams,
} from "../search-service";

describe("SearchService", () => {
  it("should return cursor", async () => {
    const cursor = getCursor(requestUrlMock);

    expect(cursor).toMatchSnapshot();
  });

  it("should return products by request url", async () => {
    const products = await getProductsByRequestUrl(requestUrlMock);

    expect(products).toMatchSnapshot();
  });

  it("should return search params", async () => {
    const searchArgs = getSearchParams(searchParamsMock);

    expect(searchArgs).toMatchSnapshot();
  });
});

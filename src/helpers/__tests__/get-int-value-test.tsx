import { getIntValue } from "../get-int-value";

describe("getIntValue", () => {
  it("should return int value", async () => {
    const value = getIntValue("20", 30);
    expect(value).toBe(20);
  });

  it("should return default value", async () => {
    const value = getIntValue(null, 30);
    expect(value).toBe(30);
  });
});
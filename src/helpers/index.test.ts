import { getLetterMatchCount } from "./";

describe("getLetterMatchCount", () => {
  const secretWod = "party";
  test("returns correct count when there are no macthing letters", () => {
    const letterMatchCount = getLetterMatchCount("bones", secretWod);
    expect(letterMatchCount).toBe(0);
  });
  test("returns the correct count when there are 3 matching letters", () => {
    const letterMatchCount = getLetterMatchCount("train", secretWod);
    expect(letterMatchCount).toBe(3);
  });
  test("returns correct count when there are duplicate letters in the guess", () => {
    const letterMatchCount = getLetterMatchCount("parka", secretWod);
    expect(letterMatchCount).toBe(3);
  });
});

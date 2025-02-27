/* global describe, test, expect */
import { validateForm } from "./helpers";

// Testing form validation
describe("validateForm function", () => {
 // Test case 1, only return true when all fields are filled
  test("returns true when all fields are filled", () => {
    const validInput = {
      topic: "javascript",
      expertise: "2",
      numberOfQuestions: "5",
      style: "normal",
    };
    expect(validateForm(validInput)).toBe(true);
  });

  // Test 2, return false when one field is missing
  test("returns false when one field is missing", () => {
    const invalidInput = {
      topic: "javascript",
      expertise: "2",
      numberOfQuestions: "5",
      style: "",
    };
    expect(validateForm(invalidInput)).toBe(false);
  });

  // Test 3, return false when all fields are empty
  test("returns false when all fields are empty", () => {
    expect(validateForm({})).toBe(false);
  });

  // Test 4, return false when fields are undefined
  test("returns false when fields are undefined", () => {
    const undefinedInput = {
      topic: undefined,
      expertise: undefined,
      numberOfQuestions: undefined,
      style: undefined,
    };
    expect(validateForm(undefinedInput)).toBe(false);
  });
});

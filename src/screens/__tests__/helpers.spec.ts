import { validatePassword } from "../helpers";

describe("ResetPassword Helpers", () => {
    describe.each([
        ["", false],
        ["Password", false],
        ["Password123", false],
        ["Password123!", false],
        ["Password123!@", true],
        ["fivefivefivefive", true],
        ["fivefivefivefiv", false],
    ])("validatePassword()", (testString, expectation) => {
        it(`should return ${expectation} when the password is '${testString}'`, () => {
            expect(validatePassword(testString)).toBe(expectation);
        });
    });
});

export {};

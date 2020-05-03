/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a given value is a number.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L293)
     */
    export function Number(value: any, failureDescription?: string): boolean;

    /**
     * Asserts that a given value is not a number.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L293)
     */
    export function not_number(value: any, failureDescription?: string): boolean;

    export const is_number: typeof Number;
    export const is_not_number: typeof not_number;
    export const was_number: typeof Number;
    export const was_not_number: typeof not_number;

}

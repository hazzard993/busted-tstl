/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that the given value is true.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L258)
     */
    export function True(value: any, failureDescription?: string): boolean;

    /**
     * Asserts that the given value is not true.
     * @param value The value to check truthiness for.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L258)
     */
    export function not_true(value: any, failureDescription?: string): boolean;

    export const is_true: typeof True;
    export const is_not_true: typeof not_true;
    export const was_true: typeof True;
    export const was_not_true: typeof not_true;

}

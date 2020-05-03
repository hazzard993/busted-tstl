/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a given value is a boolean.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L292)
     */
    export function Boolean(value: any, failureDescription?: string): boolean;

    /**
     * Asserts that a given value is not a boolean.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L292)
     */
    export function not_boolean(value: any, failureDescription?: string): boolean;

    export const is_boolean: typeof Boolean;
    export const is_not_boolean: typeof not_boolean;
    export const was_boolean: typeof Boolean;
    export const was_not_boolean: typeof not_boolean;

}

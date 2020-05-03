/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that a given value is a function.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L298)
     */
    export function Function(value: any, failureDescription?: string): boolean;

    /**
     * Asserts that a given value is not a function.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L298)
     */
    export function not_function(value: any, failureDescription?: string): boolean;

    export const is_function: typeof Function;
    export const is_not_function: typeof not_function;
    export const was_function: typeof Function;
    export const was_not_function: typeof not_function;

}

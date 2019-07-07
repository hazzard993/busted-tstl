declare namespace assert {

    /**
     * Asserts that a given value is falsy.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L149)
     */
    export function falsy(value: any, failureDescription?: string): boolean;

    /**
     * Asserts that a given value is truthy.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L149)
     */
    export function not_falsy(value: any, failureDescription?: string): boolean;

    export const is_falsy: typeof falsy;
    export const is_not_falsy: typeof not_falsy;
    export const are_falsy: typeof falsy;
    export const are_not_falsy: typeof not_falsy;
    export const was_falsy: typeof falsy;
    export const was_not_falsy: typeof not_falsy;

}

declare namespace same {

    /**
     * Asserts that two values are the same. Can deeply compare tables.
     * @param expected The expected value.
     * @param actual The actual value.
     * @param failureDescription The error message to display on failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L123)
     */
    export function same(expected: any, actual: any, failureDescription?: string): boolean;

    /**
     * Asserts that two values are NOT the same. Can deeply compare tables.
     * @param expected The expected value.
     * @param actual The actual value.
     * @param failureDescription The error message to display on failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L123)
     */
    export function not_same(expected: any, actual: any, failureDescription?: string): boolean;

    export const is_same: typeof same;
    export const is_not_same: typeof not_same;
    export const are_same: typeof same;
    export const are_not_same: typeof not_same;
    export const was_same: typeof same;
    export const was_not_same: typeof not_same;
    export const has_same: typeof same;
    export const has_not_same: typeof not_same;

}

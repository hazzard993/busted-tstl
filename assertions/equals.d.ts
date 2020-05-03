/** @noSelfInFile */
declare namespace assert {

    /**
     * Uses simple comparison to assert if an expected value equals an actual value.
     * @param expected The expected value.
     * @param actual The actual value.
     * @param failureDescription Custom message to show on assertion failure.
     * @param [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L112)
     */
    export function equals(expected: any, actual: any, failureDescription?: string): boolean;

    /**
     * Uses simple comparison to assert if an expected value does NOT equal an actual value.
     * @param expected The expected value.
     * @param actual The actual value.
     * @param failureDescription Custom message to show on assertion failure.
     * @param [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L112)
     */
    export function not_equals(expected: any, actual: any, failureDescription?: string): boolean;

    export const equal: typeof equals;
    export const not_equal: typeof not_equals;
    export const is_equal: typeof equals;
    export const is_not_equal: typeof not_equals;
    export const are_equal: typeof equals;
    export const are_not_equal: typeof not_equals;
    export const was_equal: typeof equals;
    export const was_not_equal: typeof not_equals;
    export const does_equal: typeof equals;
    export const does_not_equal: typeof not_equals;

}

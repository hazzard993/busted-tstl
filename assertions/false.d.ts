declare namespace assert {

    /**
     * Asserts that a given value is false.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L264)
     */
    export function False(value: any, failureDescription?: string): boolean;

    /**
     * Asserts that a given value is not false.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L264)
     */
    export function not_false(value: any, failureDescription?: string): boolean;

    export const is_false: typeof False;
    export const is_not_false: typeof not_false;
    export const was_false: typeof False;
    export const was_not_false: typeof not_false;

}

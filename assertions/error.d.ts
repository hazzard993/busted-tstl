declare namespace assert {

    /**
     * Calls a function expecting it to throw an error.
     * @param func The function to call, expecting it to error.
     * @param errorExpected The error message expected from the error.
     * @param failureDescription Custom message to show on assertion failure.
     * @param [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L153)
     */
    export function error(func: Function, errorExpected?: string, failureDescription?: string): boolean;

    /**
     * Calls a function expecting it to not to throw an error.
     * @param expected The expected value.
     * @param actual The actual value.
     * @param failureDescription Custom message to show on assertion failure.
     * @param [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L153)
     */
    export function not_error(expected: any, errorExpected?: string, failureDescription?: string): boolean;

    export const is_error: typeof error;
    export const is_not_error: typeof not_error;
    export const are_error: typeof error;
    export const are_not_error: typeof not_error;
    export const was_error: typeof error;
    export const was_not_error: typeof not_error;
    export const has_error: typeof error;
    export const has_no_error: typeof not_error;
    export const does_error: typeof error;
    export const does_not_error: typeof not_error;

}

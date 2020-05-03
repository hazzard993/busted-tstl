/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that the given value is a thread.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L299)
     */
    export function Thread(value: any, failureDescription?: string): boolean;

    /**
     * Asserts that the given value is not a thread.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L299)
     */
    export function not_thread(value: any, failureDescription?: string): boolean;

    export const is_thread: typeof Thread;
    export const is_not_thread: typeof not_thread;
    export const was_thread: typeof Thread;
    export const was_not_thread: typeof not_thread;

}

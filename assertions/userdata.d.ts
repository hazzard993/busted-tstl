/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that the given value is userdata.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L297)
     */
    export function Userdata(value: any, failureDescription?: string): boolean;

    /**
     * Asserts that the given value is not userdata.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L297)
     */
    export function not_userdata(value: any, failureDescription?: string): boolean;

    export const is_userdata: typeof Userdata;
    export const is_not_userdata: typeof not_userdata;
    export const was_userdata: typeof Userdata;
    export const was_not_userdata: typeof not_userdata;

}

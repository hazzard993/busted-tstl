/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that the given value is a table.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L295)
     */
    export function Table(value: any, failureDescription?: string): boolean;

    /**
     * Asserts that the given value is not a table.
     * @param failureDescription Custom error message to show on assertion failure.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L295)
     */
    export function not_table(value: any, failureDescription?: string): boolean;

    export const is_table: typeof Table;
    export const is_not_table: typeof not_table;
    export const was_table: typeof Table;
    export const was_not_table: typeof not_table;

}

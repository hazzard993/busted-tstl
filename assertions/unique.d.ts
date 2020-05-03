/** @noSelfInFile */
declare namespace assert {

    /**
     * Asserts that each member within a list is unique.
     * @param list A list members to compare.
     * @param failureDescription The error message to display on failure.
     * @param deepComparison Deeply compare each member in the list.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L24)
     */
    export function unique(list: any[], failureDescription?: string, deepComparison?: boolean): void;
    export function unique(list: any[], deepComparison?: boolean): void;

    /**
     * Asserts that there is at least one member within a list is the same as another member.
     * @param list A list members to compare.
     * @param failureDescription The error message to display on failure.
     * @param deepComparison Deeply compare each member in the list.
     * @link [Function Implementation](https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/assertions.lua#L24)
     */
    export function not_unique(list: any[], failureDescription?: string, deepComparison?: boolean): void;
    export function not_unique(list: any[], deepComparison?: boolean): void;

    export const is_unique: typeof unique;
    export const is_not_unique: typeof not_unique;
    export const are_unique: typeof unique;
    export const are_not_unique: typeof not_unique;
    export const was_unique: typeof unique;
    export const was_not_unique: typeof not_unique;

}

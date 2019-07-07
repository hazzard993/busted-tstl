declare namespace assert {

    // Modifiers
    // https://github.com/Olivine-Labs/luassert/blob/b8fb59ac1eb1a2d59793ee1707ac42f979438e8f/src/modifiers.lua

    /** A modifier that does nothing in an assertion statement. */
    export const is: typeof assert;

    /** A modifier that does nothing in an assertion statement. */
    export const are: typeof assert;

    /** A modifier that does nothing in an assertion statement. */
    export const was: typeof assert;

    /** A modifier that does nothing in an assertion statement. */
    export const has: typeof assert;

    /** A modifier that does nothing in an assertion statement. */
    export const does: typeof assert;

    /** A modifier that pollutes the assertion statement expecting the assertion to be false. */
    export const not: typeof assert;

    /** A modifier that pollutes the assertion statement expecting the assertion to be false. */
    export const no: typeof assert;

    // Modifier permutations
    export const are_no: typeof assert;
    export const has_no: typeof assert;
    export const are_not: typeof assert;
    export const is_not: typeof assert;

}

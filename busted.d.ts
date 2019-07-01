/** @noSelfInFile */
declare function describe(description: string, block: () => void): void;
declare function context(description: string, block: () => void): void;
declare function insulate(description: string, block: () => void): void;
declare function expose(description: string, block: () => void): void;

declare function pending(todoDescription: string, block?: () => void): void;

declare function it(title: string, callback: () => void): void;
declare function spec(title: string, callback: () => void): void;
declare function test(title: string, callback: () => void): void;

declare function before_each(callback: () => void): void;

declare function after_each(callback: () => void): void;

declare function strict_setup(callback: () => void): void;
declare function lazy_setup(callback: () => void): void;
declare function setup(callback: () => void): void;

declare function strict_teardown(callback: () => void): void;
declare function lazy_teardown(callback: () => void): void;
declare function teardown(callback: () => void): void;

declare function async(): void;

declare function done(): void;

declare function randomize(disable?: boolean): void;

declare function stub(toStub: any, alias: string): any;

declare function mock<T>(toMock: T, withStubs?: boolean): T;

declare namespace mock {
    export function revert(toRevert: object): void;
}

declare type ValueTest = (this: void, value: any, failureDescription?: string) => void;
declare type BinaryTest<T> = (this: void, expected: T, actual: T, failureDescription?: string) => void;

declare namespace assert {
    export const truthy: ValueTest;
    export const is_truthy: ValueTest;
    export const is_not_truthy: ValueTest;
    export const falsy: ValueTest;
    export const is_falsy: ValueTest;
    export const is_not_falsy: ValueTest;
    export const is_nil: ValueTest;
    export const is_not_nil: ValueTest;
    export const boolean: ValueTest;
    export const is_boolean: ValueTest;
    export const is_not_boolean: ValueTest;
    export const number: ValueTest;
    export const is_number: ValueTest;
    export const is_not_number: ValueTest;
    export const string: ValueTest;
    export const is_string: ValueTest;
    export const is_not_string: ValueTest;
    export const is_userdata: ValueTest;
    export const is_not_userdata: ValueTest;
    export const is_function: ValueTest;
    export const is_not_function: ValueTest;
    export const is_thread: ValueTest;
    export const is_not_thread: ValueTest;
    export const is_table: ValueTest;
    export const is_not_table: ValueTest;
    export const True: ValueTest;
    export const is_true: ValueTest;
    export const is_not_true: ValueTest;
    export const False: ValueTest;
    export const is_false: ValueTest;
    export const is_not_false: ValueTest;
    export const equal: BinaryTest<any>;
    export const equals: BinaryTest<any>;
    export const unique: (this: void, ...toCompare: any) => void;
    /**
     * Deep comparison
     */
    export const same: BinaryTest<any>;
    export const error: (this: void, func: Function, expectedErrorMessage: string, failureDescription?: string) => void;
    export const has_error: (this: void, func: Function, expectedErrorMessage: string, failureDescription?: string) => void;
    export const has_no_error: (this: void, func: Function) => void;
    export const property: (this: void, object: object, propertyName: string) => void;
    export const has_property: (this: void, object: object, propertyName: string) => void;
    // Verbs
    export const has: typeof assert;
    export const has_no: typeof assert;
    export const are: typeof assert;
    export const are_not: typeof assert;
    export const is: typeof assert;
    export const is_not: typeof assert;
    // Spy
    export const spy: (s: Function) => {
        was: SpyAssertion;
        was_not: SpyAssertion;
    };
    // Stub
    export const stub: (s: Function) => {
        was: SpyAssertion;
        was_not: SpyAssertion;
    };
}

type SpyAssertion = {
    returned_with: (this: void, arguments: any[], level?: number) => void;
    /**
     * Checks every time the spied upon function has been called for the specified parameters.
     */
    called_with: (this: void, ...arguments: any[]) => void;
    /**
     * Whether or not the spied upon function has been called.
```ts
assert.spy(mySpy).was.called();     // ✔
assert.spy(mySpy).was.called;       // ❌
```
     * @param numberOfTimes The number of times this function is expected to be called.
     */
    called: (this: void, numberOfTimes?: number) => void;
    called_at_least: SpyAssertion["called"];
    called_at_most: SpyAssertion["called"];
    called_more_than: SpyAssertion["called"];
    called_less_than: SpyAssertion["called"];
};

type Spy = {
    /**
     * Stops spying reverting the target function back to its original state.
     */
    revert: (this: void) => void;
    /**
     * Clears all records of calls and return values.
     */
    clear: (this: void) => void;
    /**
     * An array of arrays representing each call.
     */
    calls: any[][];
    returnvals: any[][];
};

/**
 * [Source (GitHub)](https://github.com/Olivine-Labs/luassert/blob/3b2351c384cf982b953ab6d7964f835acb8cb7db/src/spy.lua)
 */
declare const spy: {
    /**
     * Shorthand spy constructor. Spies on the specified callable function.
     * @param callback The function to spy on.
     * @returns A new callable spy.
     */
    <T extends Function>(this: void, callback: T): T & Spy;
    /**
     * Spies on the specified callable function.
     * @param callback The function to spy on.
     * @returns A new callable spy.
     */
    new: <T extends Function>(this: void, callback: T) => T & Spy;
    /**
     * Spies on the specified method within the specified table.
     * @param table The table / object to spy on.
     * @param methodName The method within the table to spy on.
     * @returns A new callable spy.
     */
    on: <T extends object, K extends keyof T>(this: void, table: T, methodName: K) => T[K] & Spy;
    /**
     * Returns whether or not the specified value is a spy.
     */
    is_spy: (this: void, value: any) => Function & Spy;
};

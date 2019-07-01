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

declare function mock(toMock: any): any;

declare type ValueTest<T> = (this: void, value: T, failureDescription?: string) => void;
declare type BinaryTest<T> = (this: void, expected: T, actual: T, failureDescription?: string) => void;

declare namespace assert {
    export const is_truthy: ValueTest<any>;
    export const is_not_truthy: ValueTest<any>;
    export const is_falsy: ValueTest<any>;
    export const is_not_falsy: ValueTest<any>;
    export const is_nil: ValueTest<undefined | null>;
    export const is_not_nil: ValueTest<any>;
    export const boolean: ValueTest<boolean>;
    export const is_boolean: ValueTest<boolean>;
    export const is_not_boolean: ValueTest<any>;
    export const number: ValueTest<number>;
    export const is_number: ValueTest<number>;
    export const is_not_number: ValueTest<any>;
    export const string: ValueTest<true>;
    export const is_string: ValueTest<true>;
    export const is_not_string: ValueTest<any>;
    export const is_userdata: ValueTest<any>;
    export const is_not_userdata: ValueTest<any>;
    export const is_function: ValueTest<Function>;
    export const is_not_function: ValueTest<any>;
    export const is_thread: ValueTest<any>;
    export const is_not_thread: ValueTest<any>;
    export const is_table: ValueTest<object>;
    export const is_not_table: ValueTest<any>;
    export const True: ValueTest<true>;
    export const is_true: ValueTest<true>;
    export const is_not_true: ValueTest<any>;
    export const False: ValueTest<false>;
    export const is_false: ValueTest<false>;
    export const is_not_false: ValueTest<any>;
    export const equal: BinaryTest<any>;
    export const equals: BinaryTest<any>;
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
}

declare const spy: {
    new: (this: void, func: Function) => Function,
    on: (this: void, table: object, methodName: string) => void;
};
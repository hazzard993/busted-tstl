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

declare type Assertion = {

    // Value checking
    is_truthy: ValueTest<any>,
    is_not_truthy: ValueTest<any>,
    is_falsy: ValueTest<any>,
    is_not_falsy: ValueTest<any>,
    is_nil: ValueTest<undefined | null>,
    is_not_nil: ValueTest<any>,
    boolean: ValueTest<boolean>,
    is_boolean: ValueTest<boolean>,
    is_not_boolean: ValueTest<any>,
    number: ValueTest<number>,
    is_number: ValueTest<number>,
    is_not_number: ValueTest<any>,
    string: ValueTest<true>,
    is_string: ValueTest<true>,
    is_not_string: ValueTest<any>,
    is_userdata: ValueTest<any>,
    is_not_userdata: ValueTest<any>,
    is_function: ValueTest<Function>,
    is_not_function: ValueTest<any>,
    is_thread: ValueTest<any>,
    is_not_thread: ValueTest<any>,
    is_table: ValueTest<object>,
    is_not_table: ValueTest<any>,
    True: ValueTest<true>,
    is_true: ValueTest<true>,
    is_not_true: ValueTest<any>,
    False: ValueTest<false>,
    is_false: ValueTest<false>,
    is_not_false: ValueTest<any>,
    equal: BinaryTest<any>,
    equals: BinaryTest<any>,
    /**
     * Deep comparison
     */
    same: BinaryTest<any>,
    error: (this: void, func: Function, expectedErrorMessage: string, failureDescription?: string) => void,
    has_error: (this: void, func: Function, expectedErrorMessage: string, failureDescription?: string) => void,
    has_no_error: (this: void, func: Function) => void;
    property: (this: void, object: object, propertyName: string) => void;
    has_property: (this: void, object: object, propertyName: string) => void;
    // Verbs
    has: Assertion,
    has_no: Assertion,
    are: Assertion,
    are_not: Assertion,
    is: Assertion,
    is_not: Assertion
}

declare const assert: Assertion;

declare const spy: {
    new: (this: void, func: Function) => Function,
    on: (this: void, table: object, methodName: string) => void;
};
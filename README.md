# TypeScript declarations for Busted

This repository contains TypeScript declarations for [Busted](https://olivinelabs.com/busted/). An Elegant Lua unit testing framework.

You can install these via npm.

```
npm install busted-tstl
```

link them up in your **tsconfig.json** file.

> It is recommended to use [lua-types](https://github.com/ark120202/lua-types) with these declarations as those will tell TypeScript about Lua's environment.

```json
{
    "compilerOptions": {
        "lib": ["esnext"],
        "types": [
            "busted-tstl",
            "lua-types/5.1
        ]
    }
}
```

start creating your busted tests within _.ts_ files (preferably with the suffix _\_spec.ts_ within a folder named _spec_).

```ts
describe("mocks", () => {
    it("replaces a table with spies", () => {
        const t = {
            thing: function (this: void, msg) { print(msg) }
        };

        const m = mock(t); // mocks the table with spies, so it will print

        m.thing("Coffee");
        assert.spy(m.thing).was.called_with("Coffee");
    });

    it("replaces a table with stubs", () => {
        const t = {
            thing: function (this: void, msg) { print(msg) }
        };

        const m = mock(t, true); // mocks the table with stubs, so it will not print

        m.thing("Coffee");
        assert.stub(m.thing).was.called_with("Coffee");
        mock.revert(m); // reverts all stubs/spies in m
        m.thing("Tea"); // DOES print 'Tea'
    });
});
```

Then transpile the file(s) with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua) and run busted!

```sh
tstl spec/test_spec.ts
tstl -p tsconfig.json
busted      # Install with `luarocks install busted`
```

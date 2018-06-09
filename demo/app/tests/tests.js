var SakComponents = require("nativescript-sak-components").SakComponents;
var sakComponents = new SakComponents();

describe("greet function", function() {
    it("exists", function() {
        expect(sakComponents.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(sakComponents.greet()).toEqual("Hello, NS");
    });
});
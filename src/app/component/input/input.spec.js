import React from "react";
import { Input } from "./input";
import { shallow } from "enzyme";

describe("Input", () => {
    it("should not throw an error", () => {
        expect(shallow(<Input />)).toBeTruthy();
    });

    it("should display the unit", () => {
        const cmp = shallow(<Input value="mock_value" />);
        expect(cmp.debug()).toContain("mock_value");
    });
});

import React from "react";
import { Tag } from "./tag";
import { shallow } from "enzyme";

describe("Tag", () => {
    it("should not throw an error", () => {
        expect(shallow(<Tag />)).toBeTruthy();
    });

    it("should display the mock_value", () => {
        const cmp = shallow(<Tag>mock_value</Tag>);
        expect(cmp.debug()).toContain("mock_value");
    });
});

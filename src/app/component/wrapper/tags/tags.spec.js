import React from "react";
import { WrapperTags } from "./tags";
import { mount, shallow } from "enzyme";

describe("Tag", () => {
    it("should not throw an error", () => {
        expect(mount(<WrapperTags />)).toBeTruthy();
    });

    it("should display the mock_value", () => {
        const tags = ['mock_value'];
        const cmp = shallow(<WrapperTags tags={tags} />);
        expect(cmp.debug()).toContain("mock_value");
    });
});

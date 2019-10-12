import React from "react";
import { WrapperCards } from "./cards";
import { mount } from "enzyme";

describe("Tag", () => {
    it("should not throw an error", () => {
        expect(mount(<WrapperCards />)).toBeTruthy();
    });
});

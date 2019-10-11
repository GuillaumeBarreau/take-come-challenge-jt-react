import React from "react";
import { Typography } from "./typography";
import { shallow } from "enzyme";

describe("Typography", () => {
    it("should not throw an error", () => {
        expect(shallow(<Typography />)).toBeTruthy();
    });

    it("should contain typography children", () => {
        expect(shallow(<Typography>typogrpahy_children</Typography>).debug()).toContain("typogrpahy_children");
    });
});

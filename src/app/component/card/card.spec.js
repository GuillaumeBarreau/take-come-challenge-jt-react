import React from "react";
import { Card } from "./card";
import { shallow } from "enzyme";

describe("Typography", () => {
    it("should not throw an error", () => {
        expect(shallow(<Card />)).toBeTruthy();
    });
});

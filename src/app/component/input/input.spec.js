import React from "react";
import Input from "./input";
import { shallow } from "enzyme";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);

describe("Input", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            cards: [
                {
                    _id: '5d10a1fdc4a42d1426d14ac6',
                    name: 'Mediot',
                    tags: ['itemA', 'itemB'],
                },
            ],
        });
    });

    it("should not throw an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Input />
                </Provider>
            )
        ).toBeTruthy();
    });
});

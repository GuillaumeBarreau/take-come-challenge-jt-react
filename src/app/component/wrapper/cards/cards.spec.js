import React from "react";
import { Provider } from 'react-redux';
import WrapperCards from "./cards";
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe("Tag", () => {
    let store;

    beforeEach(() => {
        store = mockStore({
            cards: [
                {
                    _id:  "5d10a1fdc4a42d1426d14ac6",
                    name:  "Mediot",
                    tags: ['itemA', 'itemB']
                }
            ],
        });
    });

    it("should not throw an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <WrapperCards />
                </Provider>
            )
        ).toBeTruthy();
    });

});

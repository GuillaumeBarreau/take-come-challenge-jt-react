import React from 'react';

import { Provider } from 'react-redux';

import { Layout } from "./layout/layout";
import Input from "./component/input/input";
import WrapperCards from "./component/wrapper/cards/cards";

import { store } from "./store/index";

function App() {
    return (
        <Provider store={store}>
            <Layout>
                <section>
                    <Input />
                </section>
                <section>
                    <WrapperCards />
                </section>
            </Layout>
        </Provider>
    );
}

export default App;

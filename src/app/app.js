import React from 'react';
import { Layout } from "./layout/layout";
import { Input } from "./component/input/input";
import { WrapperCards } from "./component/wrapper/cards/cards";

function App() {
    return (
        <Layout>
            <section>
                <Input />
                <WrapperCards />
            </section>
        </Layout>
    );
}

export default App;

import React from 'react';
import './app.css';
import { Layout } from "./layout/layout";
import { Input } from "./component/input/input";
import { Card } from "./component/card/card";

function App() {
    return (
        <Layout>
            <section>
                <Input />
                <Card />
            </section>
        </Layout>
    );
}

export default App;

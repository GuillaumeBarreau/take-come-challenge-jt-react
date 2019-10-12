import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import "./reset.css";
import React from 'react';
import ReactDOM from 'react-dom';

import "./app/component/color.css";
import "./app/component/breakpoint.css";
import "./app/component/spacing.css";

import App from "./app/app";

ReactDOM.render(<App />, document.getElementById('root'));

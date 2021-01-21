import './css/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from "./js/components/header";
import {MainContent} from "./js/components/main";
//import {Footer} from "./js/components/footer";

ReactDOM.render(
    <div>
        <header><Header></Header></header>
        <section><MainContent></MainContent></section>
    </div>, 
    document.getElementById("container")
);
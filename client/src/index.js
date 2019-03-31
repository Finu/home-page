import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const data = {
    companies: [
        {
            name: "NOVOMATIC Technologies Poland S.A.",
            dateFrom: "2014.09",
            dateTo: null,
            logo: "/novomatic.png",
            tasks: [
                "Creating reporting portal",
                "Integrating with other products",
                "Writing tests",
                "Creating automation environment",
                "Implementing client requirements",
                "Writing documentation",
                "Scrum methodology"
            ]
        },
        {
            name: "Qumak S.A.",
            dateFrom: "2008.09",
            dateTo: "2014.08",
            logo: "qumak.png",
            tasks: [
                "Designing and implementintg of applications",
                "Writing documentation",
                "Managing harmonograms of works for project",
                "Solving unforseen problems when integrating with exisitng systems",
                "Programming and configuring varius building automation systems"
            ]
        }
    ]
};

ReactDOM.render(<App data={data} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
            ],
            url: "https://novomatic-tech.com/"
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
            ],
            url: "http://www.qumak.pl/"
        }
    ]
};

const theme = createMuiTheme({
    palette: {
        primary: { main: "#5e35b1" },
        secondary: { main: "#f9a825" }
    },
    typography: { useNextVariants: true }
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App data={data} />
    </MuiThemeProvider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

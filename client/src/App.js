import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CompanyCard from "./components/CompanyCard";
import TopBar from "./components/TopBar";

const styles = {
    grid: {
        paddingLeft: "10%",
        paddingRight: "10%"
    }
};

class App extends Component {
    constructor(props) {
        super(props);
        this.companies = props.data.companies;
    }

    render() {
        return (
            <div className="App">
                <TopBar />
                <Grid
                    container
                    className={this.props.classes.grid}
                    item
                    xs={12}
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                >
                    {this.companies.map(item => (
                        <CompanyCard key={item.name} company={item} />
                    ))}
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.shape({
        companies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
    }).isRequired
};

export default withStyles(styles)(App);

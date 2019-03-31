import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import SimpleCard from "./test/Card";

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    grid: {
        padding: "100px"
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
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            color="inherit"
                            className={this.props.classes.grow}
                        >
                            Jarek Gajos - Software developer
                        </Typography>
                        <IconButton
                            className={this.props.classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Grid
                    item
                    xs={12}
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                >
                    {this.companies.map(item => (
                        <SimpleCard key={item.name} company={item} />
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

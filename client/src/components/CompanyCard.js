import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const styles = {
    card: {
        minWidth: 275,
        marginTop: 20
    }
};

function SimpleCard(props) {
    const { classes, company } = props;

    return (
        <Card className={classes.card}>
            <CardActionArea href={company.url}>
                <CardHeader
                    avatar={
                        <Avatar
                            alt={company.name[0].toUpperCase()}
                            src={company.logo}
                        />
                    }
                    title={company.name}
                    subheader={
                        "Working " +
                        company.dateFrom +
                        " untill " +
                        (!!company.dateTo ? company.dateTo : "present")
                    }
                />
            </CardActionArea>

            <CardContent>
                <ul>
                    {company.tasks.map(task => (
                        <li>
                            <Typography variant="subtitle2">{task}</Typography>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
    company: PropTypes.shape({
        name: PropTypes.string.isRequired,
        dateFrom: PropTypes.string.isRequired,
        dateTo: PropTypes.string,
        logo: PropTypes.string.isRequired,
        task: PropTypes.arrayOf(PropTypes.string),
        url: PropTypes.string
    }).isRequired
};

export default withStyles(styles)(SimpleCard);

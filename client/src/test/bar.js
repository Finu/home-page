import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Bar extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" color="primary">
                    Hello World
                </Button>
            </div>
        );
    }
}
import * as React from 'react';
// Components
import {Grid} from "@material-ui/core";
import Header from './Components/Header';
import Content from './Components/Content'

export default () => {
        return (
            <Grid container>
                <Header />
                <Content />
            </Grid>
        );
};

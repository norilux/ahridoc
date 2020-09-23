import * as React from 'react';
// Components
import Card from "./Card";
// Elements
import {Box, Grid} from "@material-ui/core";
//Data
import commands from "../../data/commands";


export default () => {
    return (
        <Grid item xs={12}>
            <Grid container spacing={1}>
                {commands.map(e =>
                    e.show &&
                    <Grid item xs={12} key={e.name} lg={6}>
                        <Box t={1}>
                            <Card options={e}/>
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Grid>
    );
};

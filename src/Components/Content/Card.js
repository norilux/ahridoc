import React from 'react';
// Elements
import {Card, CardActionArea, CardContent, CardHeader, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
// Hooks
import {useLangStore} from "../../hooks/store/app";
// Helpers
import Helpers from './../../helpers'
const {replaceToBlock} = Helpers;
// Styles
const useStyle = makeStyles({
    card: {
        backgroundColor: "rgba(0,0,0,.5)",
        color: "snow"
    }
});

export default props =>
{
    const styles = useStyle();
    const lang = useLangStore();

    return (
        <Card className={styles.card}>
            <CardContent>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <CardHeader title={props.options.name} />
                    </Grid>
                    {props.options.image &&
                    <Grid item xs={12} md={6}>
                        <img style={{width: '100%'}} src={`/gifs/${props.options.image}.gif`} alt="command gif"/>
                    </Grid>
                    }
                    <Grid item>
                        <CardActionArea>
                            <Typography variant={"body1"} dangerouslySetInnerHTML={{__html: replaceToBlock(props.options.description[lang.state])}} />
                        </CardActionArea>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

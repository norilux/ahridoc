import React from 'react';
// Elements
import {Button, Grid} from "@material-ui/core";
// Hooks
import {useLangStore} from "../../hooks/store/app";
import {makeStyles} from "@material-ui/core/styles";
// Data
import {buttonNames} from './data'
// Styles
const useStyle = makeStyles({
    addButton: {
        background: 'linear-gradient(90deg, #EB5757 0%, #F2C94C 100%)'
    }
})

const Buttons = () => {
    const style = useStyle();
    const lang = useLangStore();

    return (
        <Grid container spacing={1}>
            <Grid item>
                <Button
                    className={style.addButton}
                    href={'https://discordapp.com/api/oauth2/authorize?client_id=660128781670940695&scope=bot&permissions=8'}
                    color={"primary"}
                    variant={"contained"}
                >{buttonNames.addToServer[lang.state]}</Button>
            </Grid>
            <Grid item>
                <Button
                    href={'https://discord.gg/hTSA5nk'}
                    color={"primary"}
                    variant={"contained"}
                >{buttonNames.supportServer[lang.state]}</Button>
            </Grid>
            <Grid item>
                <Button
                    color={"secondary"}
                    variant={"contained"}
                    onClick={() => lang.set(lang.state === 'en' ? 'ru' : 'en')}
                >{lang.state.toUpperCase()}</Button>
            </Grid>
        </Grid>
    );
}

export default Buttons;

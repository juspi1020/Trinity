import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 'lg',
        height: '100vh',
        backgroundColor:'red',
        position:'fixed',
    },
    typography:{
        color:'white',
        fontSize:'80px',
        textAlign:'left',
        margin:'0% 0% 0% 10%',
    }
}));

export default function SimpleContainer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container className={classes.root}>
                <Typography className={classes.typography}>
                    Your next <br/> proyect with us
                </Typography>
            </Container>
        </React.Fragment>
    );
}
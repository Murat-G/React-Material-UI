import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GoogleMap from "../components/GoogleMap";
import { Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        height: "70vh",
        marginBottom: "30em",
        "@media (max-width: 700px)": {
        marginBottom: "60em",
        },
    },
    containerTop: {
        display: "flex",
        flexDirection: "row",
        "@media (max-width: 700px)": {
            flexDirection:'column',
          },
    },
    title: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    items: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "1em",
        padding: "1em",
        backgroundColor: "#efefef",
        width: "15em",
        borderRadius: "5em",
        
    },
}));

function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ display:"flex", flexDirection:'column',alignItems:'center',marginBottom:'10em',}}>
                <div>
                    <h1> Contact Us</h1>
                </div>

                <div className={classes.containerTop}>
                    <div className={classes.items}>
                        <Icon className="fas fa-map-marker-alt" />
                        <h4> 34485 Sarıyer/İstanbul </h4>
                        <h2> ADDRESS</h2>
                    </div>
                    <div className={classes.items}>
                        <Icon className="fas fa-mobile-alt" />
                        <h4> +90 212 567 22 00 </h4>
                        <h2> PHONE</h2>
                    </div>
                    <div className={classes.items}>
                        <Icon className="far fa-file-alt" />
                        <h4> support@ulakapp.com </h4>
                        <h2> EMAİL </h2>
                    </div>
                </div>
            </div>


            <div style={{ display: "flex", width: "40em"}}>
                <GoogleMap />
            </div>
        </div>
    );
}

export default Contact;

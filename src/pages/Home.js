import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width:500,
    height: 250,
    margin: `${theme.spacing(4)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message = `Normal Kurye Hizmeti, İstanbul'da bir yerden başka bir yere kısa sürede ulaştırılması 
gereken evrak veya paketlerinizin taşınması işini semte göre 120 - 180 dk arasında istenilen adresten 
alınarak istenilen adrese teslim edilen gönderi şeklidir. Motorlu Kuryelerimiz günün her saatinde İstanbul’un her yerinde özel takip sistemimiz 
vasıtasıyla yüzlerce kuruluşun ve kişinin isteği doğrultusunda hizmeti vermektedir.
 `;

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
        <Grid marginTop = {5}>
            <Typography variant="h4" component="h4" gutterBottom  align="center">
                KİŞİYE ÖZEL KURYE
            </Typography>
            <Typography variant="h4" component="h4" gutterBottom align="center">
                ULAK sana zaman kazandırır, zamanı satın almanı sağlar.
            </Typography>  
        </Grid>

      <Grid xs={12} container spacing={3}>
        <Grid container xs={12} justify="center" spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={3}>
                <Grid item>
                  <Avatar src="https://ulakapp.com/img/service-normal.png" />
                </Grid>
                <Grid item>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar src="https://ulakapp.com/img/service-normal.png" />
                </Grid>
                <Grid item>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid container xs={12} justify="center" spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar src="https://ulakapp.com/img/service-vip.png" />
                </Grid>
                <Grid item>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar src="https://ulakapp.com/img/service-night-owl.png" />
                </Grid>
                <Grid item>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

        <Grid container xs={12} justify="center" spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid item>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar>W</Avatar>
                </Grid>
                <Grid item>
                  <Typography>{message}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

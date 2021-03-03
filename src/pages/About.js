import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const message = `Günlük yaşantımızda ulaşımın önemi çok büyüktür. Bir yere, bir şeye ulaşmak için değerli olan 
zamanımızı harcarız. ULAK sana zaman kazandırır, zamanı satın almanı sağlar. ULAK ile bulunduğun konuma en yakın kurye sana yönlendirilir, seçeceğin 
gönderi şekli ile hizmet verir, kargon teslim edilene kadar anlık lokasyon bilgisini gösterir, 
teslimat detaylarını iletir, ödemenizi güvenli bir şekilde kredi kartından tahsil eder ve işlemi tamamlar.`;

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    marginBottom: "5em",
    marginTop: "5em",
  },
  image: {
    width: "40vh",
  },
  gridpaper: {
    borderRadius: "10em",
  },
  paper: {
    margin: theme.spacing(6, 6, 4),
    display: "flex",
    flexDirection: "column",
  },
  cart: {
    display: "flex",
    flexDirection: "column",
    marginTop: "2em",
    lineHeight: "3em",
  },
  cart2: {
    display: "flex",
    flexDirection: "column",
    textAlign:'center'
  },
  avatar: {
    width: "30em",
    margin: "1rem auto",
    backgroundColor: "#FAFAFA",
    "@media (max-width: 700px)": {
      width: "45vh",
    },
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://ulakapp.com/img/ulak-app-on-iphone.png"
          alt="mobile"
          className={classes.image}
        />
        <img
          src="https://appradar.com/wp-content/uploads/App-Store-Google-Play-Icons.png"
          alt="store"
          className={classes.avatar}
        />
      </div>
      <Grid
        item
        xs={12}
        md={5}
        component={Paper}
        square
        className={classes.gridpaper}
      >
        <div className={classes.paper}>
          <div className={classes.cart}>
            <Typography color="secondary" component="div">
              <h1 style={{ marginTop: "0px", textAlign: "center" }}>
                Kişiye Özel Kurye ULAK
              </h1>
            </Typography>
            <Typography component="div" color="textSecondary">
              <h4>{message}</h4>
            </Typography>
          </div>
          <div className={classes.cart2}>
            <Typography color="primary" component="div">
              <h2>Özellikleri</h2>
            </Typography>
            <Typography component="div">
              <h3>En Yakın Kuryeyi Çağırma</h3>
              <Typography component="div" color="textSecondary">
                <h4>
                  ULAK, bulunduğun konuma en yakın kuryeyi çağırmanı sağlar.
                </h4>
              </Typography>
            </Typography>
            <Typography component="div">
              <h3>Anlık Kurye Takibi</h3>
              <Typography component="div" color="textSecondary">
                <h4>
                  ULAK, kuryenin konumunu göstererek gönderini anlık takip
                  etmene imkan verir.
                </h4>
              </Typography>
            </Typography>
            <Typography component="div">
              <h3>Farklı Gönderi Seçenekleri</h3>
              <Typography component="div" color="textSecondary">
                <h4>İhtiyacına göre farklı gönderi tipleri seçmeni sağlar.</h4>
              </Typography>
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

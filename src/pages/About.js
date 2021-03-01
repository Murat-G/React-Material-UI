import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { Grid, Typography, Avatar } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const message = `Günlük yaşantımızda ulaşımın önemi çok büyüktür. Bir yere, bir şeye ulaşmak için değerli olan 
zamanımızı harcarız. ULAK sana zaman kazandırır, zamanı satın almanı sağlar. ULAK ile bulunduğun konuma en yakın kurye sana yönlendirilir, seçeceğin 
gönderi şekli ile hizmet verir, kargon teslim edilene kadar anlık lokasyon bilgisini gösterir, 
teslimat detaylarını iletir, ödemenizi güvenli bir şekilde kredi kartından tahsil eder ve işlemi tamamlar.`;

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    justifyContent: "center",
  },
  image: {
    backgroundImage: "url(https://ulakapp.com/img/ulak-app-on-iphone.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(6, 6, 4),
    display: "flex",
    flexDirection: "column",
  },
  cart: {
    display: "flex",
    flexDirection: "column",
    letterSpacing: "5.5",
    marginTop: "2.5em",
  }, 
  avatar: {
    width: "30em",
    height: "5em",
    margin: "1rem auto",
  },
 
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item sm={4} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <div className={classes.cart}>
            <Typography variant="h4" color="secondary">
              Kişiye Özel Kurye ULAK
            </Typography>
            <Typography align="left" variant="h6">
              {message}
            </Typography>
          </div>
          <div className={classes.cart}>
            <Typography color="primary" variant="h4">
              Özellikleri;
            </Typography>
            <Typography align="left" variant="h6">
              <h5>En Yakın Kuryeyi Çağırma</h5>
              <p>ULAK, bulunduğun konuma en yakın kuryeyi çağırmanı sağlar.</p>
            </Typography>
            <Typography align="left" variant="h6">
              <h5>Anlık Kurye Takibi</h5>
              <p>
                ULAK, kuryenin konumunu göstererek gönderini anlık takip etmene
                imkan verir.
              </p>
            </Typography>
            <Typography align="left" variant="h6">
              <h5>Farklı Gönderi Seçenekleri</h5>
              <p>İhtiyacına göre farklı gönderi tipleri seçmeni sağlar.</p>
            </Typography>
          </div>
            <Avatar
              src="https://appradar.com/wp-content/uploads/App-Store-Google-Play-Icons.png"
              className={classes.avatar}
            />
        </div>
      </Grid>
    </Grid>
  );
}

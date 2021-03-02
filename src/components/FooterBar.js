import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Icon from "@material-ui/core/Icon";
import { loadCSS } from "fg-loadcss";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://ulakapp.com/">
        UlakApp
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    textAlign: "center"
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    textAlign: "center",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200],
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    listStyle:  "none",
    justifyContent: "center",
    paddingLeft: "0em"
  },
  iconItem: {
    padding: "1em 0em 1em 1em",
    textDecoration: "none"
  }
}));

export default function FooterBar() {
  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sen neredeysen kuryen orada.
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            Tüm hakları "ULAK Yazılım Teknoloji ve Taşımacılık A.Ş"' ye aittir.
          </Typography>
          <Copyright />
          <Typography>
            <div className={classes.icons}>
              <ul className={classes.iconContainer}>
                <li className={classes.iconItem}> 
                <Link href="https://www.facebook.com/ulakappcom/">
                  <Icon className="fab fa-facebook" color="red"/>
                </Link>
                </li>
                
                <li className={classes.iconItem}>
                  <Link href="https://www.instagram.com/ulakappcom/">
                    <Icon className="fab fa-instagram" />
                  </Link>
                </li>

                <li className={classes.iconItem}>
                  <Link href="https://twitter.com/ulakappcom?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                  <Icon className="fab fa-twitter" />
                  </Link>
                </li>
              </ul>      
            </div>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

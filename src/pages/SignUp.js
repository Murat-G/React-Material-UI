import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ulakapp from '../asset/ulakapp.png';
import {useFormik} from 'formik';
import * as Yup from "yup";


const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required!!"),
  lastName: Yup.string().required("lastName Name is required!!"),
  email: Yup.string().email("Invalid Email").required("Email is required!!"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
  confirmPasword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    alignItems: 'center',
  },
  form: {
    width: '85%', // Fix IE 11 issue.
    marginLeft: theme.spacing(8)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: '20em'
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPasword: '',
    },
    validationSchema: signUpValidationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} src={ulakapp} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={10}>
              <TextField
                name="firstName"
                autoComplete="fname"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                autoFocus
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && formik.errors.firstName}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                name="lastName"
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                autoComplete="lname"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && formik.errors.lastName}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                name="email"
                variant="outlined"
                required
                fullWidth
                label="Email Address"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                name="password"
                variant="outlined"
                required
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                name="confirmPasword"
                variant="outlined"
                required
                fullWidth
                label="Confirm Password"
                type="password"
                autoComplete="current-password-confirm"
                value={formik.values.confirmPasword}
                onChange={formik.handleChange}
                error={formik.touched.confirmPasword && formik.errors.confirmPasword}
                helperText={formik.touched.confirmPasword && formik.errors.confirmPasword}
              />
            </Grid>
            <Grid item xs={10}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
            />
            </Grid>
          </Grid>
          <Grid item xs={12}>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Sign Up
          </Button>
          <Grid >
            <Grid>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
          </form>

      </div>
    </Container>
  );
}
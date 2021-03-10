import React from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Avatar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ulakapp from '../asset/ulakapp.png';
import {useFormik} from 'formik';
import * as Yup from "yup";


const forgetValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required!!"),
});


const stylesFunc = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
    height: "calc(60vh - 11.0625rem)",
    textAlign: "center",
  },
  avatar: {
    margin: "1rem auto",
    backgroundColor: theme.palette.primary.main,
  },
  forgotPassword: {
    margin: "1rem",
  },
}));

function ForgotPassword() {
  const forgotPasswordStyles = stylesFunc();


  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgetValidationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <Container className={forgotPasswordStyles.wrapper} maxWidth="sm">
      <Avatar className={forgotPasswordStyles.avatar} src={ulakapp} />  
      <Typography className={forgotPasswordStyles.forgotPassword} variant="h4">
        Forgot Password
      </Typography>
        
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  required
                  error={formik.touched.email && formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Reset My Password
                </Button>
              </Grid>
            </Grid>
          </form>

    </Container>
  );
}

export default ForgotPassword;
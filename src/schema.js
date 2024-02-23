import * as Yup from "yup";

export const validation = Yup.object().shape({
  username: Yup.string()
    .label("please enter a username")
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("please enter a username"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8)
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])?.{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and Optional Special Case Characters"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "password must match")
    .required("please confirm your password"),
});



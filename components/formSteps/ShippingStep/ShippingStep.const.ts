import * as yup from "yup";

const PHONE_REGEXP =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const SHIPPING_FORM_SCHEMA = yup
  .object({
    firstName: yup.string().required("Please provide name."),
    surName: yup.string().required("Please provide surname."),
    phoneNumber: yup
      .string()
      .matches(PHONE_REGEXP, "Phone number is not valid.")
      .required("Please provide phone number."),
    email: yup.string().email().required("Please provide valid email."),
    dateOfBirth: yup
      .date()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .required("Please provide date of birth."),
    address: yup.string().required("Please provide address."),
    city: yup.string().required("Please provide city."),
    state: yup.string().required("Please provide state."),
    zip: yup
      .string()
      .required("Please provide zip code.")
      .matches(/^[0-9]{5}$/, "Must be exactly 5 digits."),
  })
  .required();

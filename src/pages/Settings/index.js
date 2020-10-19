import React, { useState } from 'react';
import * as Yup from 'yup';
import { FormikProvider, useFormik, Form } from 'formik';
import { StyledContainer } from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SettingSchema = Yup.object().shape({
  email: Yup.string().email('Please enter a valid email address'),
  password: Yup.string()
    .min(6, 'Password should be more than 6 Characters')
    .required('The field cannot be empty')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
      'Password should contains atleast one Uppercase,lowecase and symbol'
    ),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});
const Settings = () => {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const onSubmit = (value) => {
    const { email, password } = value;
    setData({ email, password });
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      passwordConfirmation: '',
      onSubmit,
    },
    onSubmit,
    validationSchema: SettingSchema,
  });

  return (
    <StyledContainer>
      <FormikProvider value={formik}>
        <Form>
          <Input label="Email Address" id="email" name="email" type="email" />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
          />
          <Input
            label=" Confirm Password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </FormikProvider>
    </StyledContainer>
  );
};

export default Settings;

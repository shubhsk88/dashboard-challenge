import React, { useState } from 'react';
import { StyledContainer } from './style';
import { FormikProvider, Field, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';

const UpdateSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name cannot be empty'),
  lastName: Yup.string().required('Last Name cannot be empty'),
  address: Yup.string().required('Address Cannot be empty'),
  country: Yup.string(),
});

const UpdateInformation = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    address: '',
    country: '',
  };
  // eslint-disable-next-line no-unused-vars
  const [update, setUpdate] = useState(initialValues);
  const onSubmit = (value) => {
    console.log(value);
    setUpdate(value);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: UpdateSchema,
  });
  const updateArray = [
    { name: 'Enter your first Name', dataEntry: 'firstName' },
    { name: 'Enter your last Name', dataEntry: 'lastName' },
    { name: 'Enter your Address', dataEntry: 'address' },
  ];

  return (
    <StyledContainer>
      <FormikProvider value={formik}>
        <Form>
          {updateArray.map((input) => (
            <Input
              key={input.dataEntry}
              type="text"
              label={input.name}
              name={input.dataEntry}
              id={input.dataEntry}
            />
          ))}
          <label htmlFor="country">Select your country</label>
          <Field component="select" name="country" id="country">
            <option value="Germany">Germany</option>
            <option value="Austria">Austria</option>
            <option value="Switzerland">Switzerland</option>
          </Field>
          <Button>Update</Button>
        </Form>
      </FormikProvider>
    </StyledContainer>
  );
};

export default UpdateInformation;

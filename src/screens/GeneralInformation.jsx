import React, { Component } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const GeneralInformationForm = ({ values, errors, isSubmitting }) => {
    return (
        <Form>
            <div>
                <h3>Agent {values.agentNumber} - CIG Demo Agent</h3>
            </div>
            <div>
                {errors.firstName && <p>{errors.firstName}</p>}
                <label htmlFor="firstName">First Name:</label>
                <Field type="text" name="firstName" placeholder="First Name" />
            </div>
            <div>
                {errors.middleName && <p>{errors.middleName}</p>}
                <label htmlFor="middleName">Middle Name:</label>
                <Field
                    type="text"
                    name="middleName"
                    placeholder="Middle Name"
                />
            </div>
            <div>
                {errors.lastName && <p>{errors.lastName}</p>}
                <label htmlFor="lastName">Last Name:</label>
                <Field type="text" name="lastName" placeholder="Last Name" />
            </div>
            <div>
                {errors.street && <p>{errors.street}</p>}
                <label htmlFor="street">Street:</label>
                <Field type="text" name="street" placeholder="Street" />
            </div>
            <div>
                {errors.city && <p>{errors.city}</p>}
                <label htmlFor="city">City:</label>
                <Field type="text" name="city" placeholder="City" />
            </div>
            <div>
                {errors.state && <p>{errors.state}</p>}
                <label htmlFor="state">State:</label>
                <Field type="text" name="state" placeholder="State" />
            </div>
            <div>
                {errors.zip && <p>{errors.zip}</p>}
                <label htmlFor="zip">Zip:</label>
                <Field type="text" name="zip" placeholder="Zip" />
            </div>
            <div>
                {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
                <label htmlFor="phoneNumber">Phone Number:</label>
                <Field
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                />
            </div>
            <div>
                {errors.emailAddress && <p>{errors.emailAddress}</p>}
                <label htmlFor="emailAddress">Email Address:</label>
                <Field
                    type="email"
                    name="emailAddress"
                    placeholder="Email Address"
                />
            </div>
            <button disabled={isSubmitting}>Submit</button>
        </Form>
    );
};

const GeneralInformation = withFormik({
    mapPropsToValues({
        agentNumber,
        firstName,
        middleName,
        lastName,
        street,
        city,
        state,
        zip,
        phoneNumber,
        emailAddress
    }) {
        return {
            agentNumber: agentNumber || '55110',
            firstName: firstName || '',
            middleName: middleName || '',
            lastName: lastName || '',
            street: street || '',
            city: city || '',
            state: state || '',
            zip: zip || '',
            phoneNumber: phoneNumber || '',
            emailAddress: emailAddress || ''
        };
    },
    validationSchema: Yup.object().shape({
        lastName: Yup.string().required('Last Name is required'),
        zip: Yup.string()
            .min(5)
            .max(9)
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        setSubmitting(false);
        console.log(values);
    }
})(GeneralInformationForm);

export default GeneralInformation;

import { Typography } from "@material-ui/core";
import { React } from "react";
import { Form } from "./Form";
import { MainContainer } from "./MainContainer";
import { Input } from "./Input"
import { PrimaryButton } from "./PrimarryButton";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from "react-router";
import { useData } from "../DataContext";






const schema = yup.object().shape({
    firstName: yup
        .string()
        // .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field"),
    lastName: yup
        .string()
        // .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Last name is a required field"),
    email: yup
        .string()

        // .matches(/^([^0-9]*)$/, "email  should not contain numbers")
        .required("email  is a required field"),
    password: yup
        .number()
        // .matches(/^([^0-9]*)$/, "password  should not contain numbers")
        .required("password  is a required field"),
    // text: yup
    //     .string()
    //     // .matches(/^([^0-9]*)$/, "text  should not contain numbers")
    //     .required("text  is a required field"),

})


export const Step1 = () => {
    const history = useHistory()
    const { data, setValues } = useData()

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: { firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password, text: data.text },
        mode: "onBlur",
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        history.push("/step2")
        setValues(data)
    }
    return (
        <MainContainer>
            <Typography
                component="h2"
                variant="h5" >
                🦄 Step1
            </Typography>
            <Form
                onSubmit={handleSubmit(onSubmit)}
            >
                <Input
                    {...register("firstName")}

                    id="firstName"
                    type="text"
                    label="First Name"
                    name="firstName"
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />

                <Input

                    {...register("lastName")}
                    id="lastName"
                    type="text"
                    label="Last Name"
                    name="lastName"
                    error={!errors.lastName}
                    helperText={errors?.lastName?.message}
                />


                <Input

                    {...register("email")}
                    type="email"
                    id="email"
                    label="Email"
                    name="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                />


                <Input

                    {...register("password")}
                    id="password"
                    type="password"
                    label="password"
                    name="password"
                    error={!!errors.password}
                    helperText={errors?.password?.message}
                    required
                />




                <PrimaryButton>next</PrimaryButton>
            </Form>
        </MainContainer>
    )
}
// import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Form } from "./Form";
import { MainContainer } from "./MainContainer";
import { Input } from "./Input";
import { PrimateButton } from "./PrimatButton";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
// import { parsePhoneNumberFromString } from "libphonenumber-js"
import { useData } from "../DataContext";

const shema = yup.object()
    .shape({
        email: yup
            .string()
            .email("Email should  have email correct format ")
            .required("Email is required field"),

    })


export const Step2 = () => {
    const history = useHistory()
    const { data, setValues } = useData()
    const { register, handleSubmit, errors, watch } = useForm({

        defaultValues: {
            email: data.email,

        },
        mode: "onBlur",
        resolver: yupResolver(shema)
    })



    const onSubmit = (data) => {

        history.push("/result")
        setValues(data)

    }

    return <MainContainer>
        <Typography
            component="h2"
            variant="h5" >
            🦄 Step2
        </Typography>

        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input

                {...register("email")}
                type="email"
                id="email"
                label="Email"
                name="email"
                required />



            <PrimateButton>
                next
            </PrimateButton>
        </Form>
    </MainContainer>
}
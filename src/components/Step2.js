import { Typography } from "@material-ui/core";
import { PrimaryButton } from "./PrimarryButton";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Form } from "./Form";
import { MainContainer } from "./MainContainer";
import { Input } from "./Input";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useData } from "../DataContext";



const schema = yup.object()
    .shape({
        text: yup
            .string()
            .required("text is required field"),
        name: yup
            .string()
            .required("text is required field"),
        location: yup
            .string()
            .required("text is required field"),

    })



export const Step2 = () => {

    const history = useHistory()
    const { data, setValues } = useData()

    const { register, handleSubmit, formState: { errors } } = useForm({

        defaultValues: {
            text: data.text,
            name: data.name,
            location: data.location

        },

        mode: "onBlur",
        resolver: yupResolver(schema)
    })


    const onSubmit = (data) => {
        history.push("/result")
        setValues(data)

    }

    return (<MainContainer >
        <Typography
            component="h2"
            variant="h8" >
            📸 Step2
        </Typography>

        <Form onSubmit={handleSubmit(onSubmit)} >

            <Input
                {...register("text")}
                type="text"
                id="text"
                label="text"
                name="text"
                error={!!errors.text}
                helperText={errors?.text?.message}
                required />

            <Input
                {...register("name")}
                type="name"
                id="name"
                label="name"
                name="name"
                error={!!errors.name}
                helperText={errors?.name?.message}
                required />

            <Input
                {...register("location")}
                type="location"
                id="location"
                label="location"
                name="location"
                error={!!errors.location}
                helperText={errors?.location?.message}
                required />


            <PrimaryButton>next</PrimaryButton>

        </Form >
    </MainContainer>
    )
}




import { Typography } from "@material-ui/core";
import { React } from "react";
import { Form } from "./components/Form";
import { MainContainer } from "./components/MainContainer";
import { Input } from "./components/Input"
import { PrimateButton } from "./components/PrimatButton";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useHistory } from "react-router";
import { useData } from "./DataContext";



const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Last name is a required field"),
})


export const Step1 = () => {
    const history = useHistory()
    const { data, setValues } = useData()

    const { register, handleSubmit, errors } = useForm({
        defaultValues: { firstName: data.firstName, lastName: data.lastName },
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
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("firstName")}
                    id="firstName"
                    type="text"
                    label="First Name"
                    name="firstName"
                // error={!!errors.firstName}
                // helperText={errors?.firstName?.message}
                />

                <Input
                    // ref={register}

                    {...register("lastName")}
                    id="lastName"
                    type="text"
                    label="Last Name"
                    name="lastName"
                // error={!!errors.lastName}
                // helperText={errors?.lastName?.message}
                />
                <PrimateButton>next</PrimateButton>
            </Form>
        </MainContainer>
    )
}
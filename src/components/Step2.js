import { Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Form } from "./Form";
import { MainContainer } from "./MainContainer";
import { Input } from "./Input";
import { PrimateButton } from "./PrimatButton";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const shema = yup.object()
    .shape({
        email: yup.string().email("Email should  have email correct format ").required("Email is required field")

    })

export const Step2 = () => {
    const history = useHistory()
    const { register, handleSubmit, errors, watch } = useForm({
        made: "onBlur",
        resolver: yupResolver(shema)
    })

    const hasPhone = watch("hasPhone")

    const onSubmit = (data) => {
        history.push("/step3")
    }

    return <MainContainer>
        <Typography
            component="h2"
            variant="h5" >
            🦄 Step2
        </Typography>

        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                // {...register("firstName")}
                {...register("email")}
                type="email"
                id="email"
                label="Email"
                name="email"
                required
            // error={!!errors.email}
            // helperText={errors?.email?.message}
            />
            <FormControlLabel control={
                <Checkbox
                    name="hasPhone"
                    {...register("inputRef")}
                    // inputRef={register}
                    color="primary" />}
                label="Do you have a phone"
            />


            {
                hasPhone && (
                    <Input
                        ref={register}
                        id="phoneNumber"
                        type="tel"
                        label="phoneNumber "
                        name="phoneNumber" />
                )
            }
            <PrimateButton>
                next
            </PrimateButton>
        </Form>
    </MainContainer>
}
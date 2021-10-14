import { Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { FileInput } from "./components/FILEINPUT.JS";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";


export const Step3 = () => {
    const { control, handleSubmit } = useForm()
    return < MainContainer>
        <Typography
            component="h2"
            variant="h5" >
            🦄 Step2
        </Typography>
        <Form>
            <FileInput name="files" control={control} />
        </Form>
    </MainContainer>
}
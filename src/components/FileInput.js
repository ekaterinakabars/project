import { ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core";
import { Controller } from "react-hook-form";
// import { Dropzone } from "@dropzone-ui/react";
// import { CloudUpLoad } from '@material-ui/icons'
import { Dropzone } from "@dropzone-ui/react"




export const FileInput = ({ control, name }) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({ onChange, onBlur, value }) => <>
                <Dropzone onDrop={onChange}>

                    {
                        ({ getRootProps, getInputProps }) => (<Paper variant="outlined" {...getRootProps}>
                            {/* <CloudUpLoad /> */}
                            <input {...getInputProps()} name={name} onBlur={onBlur} />
                            <p>как загрузить знаешь?</p>
                        </Paper>)
                    }
                </Dropzone>
                <list>
                    {
                        value.map((f, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    {/* <InsertDriveFile /> */}
                                </ListItemIcon>
                                <ListItemText primary={f.name} secondary={f.size} />
                            </ListItem>
                        ))
                    }
                </list>
            </>}
        />
    )
};



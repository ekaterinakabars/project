import { ListItem, ListItemIcon, ListItemText, Paper } from "@material-ui/core";
import { Controller } from "react-hook-form";


export const FileInput = ({ control, name }) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({ onChange, onBlur, value }) => <>

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



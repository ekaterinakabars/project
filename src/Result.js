import React from "react";
import { MainContainer } from "./components/MainContainer";
import { Table, Paper, TableContainer, Typography, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { useData } from "./DataContext";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
// import { PrimateButton } from "./components/PrimatButton";
// import Confetti from 'confetti-react';


// const Submit = () => {

//     return <Confetti />;

// }


const useStyles = makeStyles({
    root: {
        marginBottom: "30px"
    },
    table: {
        marginBottom: "30px"

    }
})

export const Result = () => {

    const styles = useStyles()
    const { data } = useData()
    const entries = Object.entries(data).filter((entry) => entry[0] !== "files")

    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                📋 Form values
            </Typography>
            <TableContainer className={styles.root} component={Paper}>
                <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Field
                            </TableCell>
                            <TableCell align="right">
                                Value
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{entries.map(entry => (
                        <TableRow key={entry[0]}>
                            <TableCell>{entry[0]}
                            </TableCell>
                            <TableCell align="right">
                                {entry[1]}</TableCell>
                        </TableRow>
                    ))
                    }
                    </TableBody>
                </Table>
            </TableContainer>

            {/* <PrimateButton onClick={Submit}>Submit
            </PrimateButton> */}


            <Link to="/">Start over </Link>
        </MainContainer>
    )
}

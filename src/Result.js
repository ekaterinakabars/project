import React from "react";
import { MainContainer } from "./components/MainContainer";
import { Table, Paper, TableContainer, Typography, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { useData } from "./DataContext";
import { Link } from "react-router-dom";

export const Result = () => {
    const { data } = useData()
    const entries = Object.entries(data).filter((entry) => entry[0] !== "files")
    const { files } = data;
    return (
        <MainContainer>
            <Typography component="h2" variant="h5">
                📋 Form values
            </Typography>
            <TableContainer component={Paper}>
                <Table>
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
            <Link to="/">Start over </Link>
        </MainContainer>
    )
}

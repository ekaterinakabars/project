import React, { useState, useEffect, } from "react";
import { getData } from "./Step3";
import { MainContainer } from "./MainContainer";
import { Table, Paper, TableContainer, Typography, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { useData } from "../DataContext";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";




const useStyles = makeStyles({
    root: {
        marginBottom: "30px"
    },
    table: {
        marginBottom: "30px"

    }
})

export const Result = () => {


    const [kata, setKata] = useState("1")
    useEffect(() => {
        async function getDataDevice() {
            const data = await getData()
            setKata(data);
        }
        getDataDevice()
    }, []);





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


            {
                kata ? <img src={kata.img} alt="" width="400" height="250" /> : "please await"
            }

            <Link to="/">Start over </Link>
        </MainContainer>)
}







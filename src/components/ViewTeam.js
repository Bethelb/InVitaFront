import React from "react";
import { Button, TextField, Table, TableCell, TableBody, TableRow, TableContainer, TableHead, Paper } from "@mui/material";
import axios from "axios";

class ViewTeam extends React.Component{
    
    constructor(){
        super()
        this.teams = []
        this.state = {
            teams: []
    }

    }

    componentDidMount() {
        axios.get(`http://localhost:8081/soccer/details`)
          .then(res => {
            const data = res.data.map(d => (
                {
                    id: d.id,
                    name: d.name,
                    stadium: d.stadium,
                    fifaRating: d.fifaRating,
                    squadSize: d.squadSize,
                    nextMatch: d.nextMatch
                }
            ))
            this.setState({ teams: data })
            console.log("MAPPED DATA", data);
            console.log('THE STATE: ', this.state.teams)
          })

    }

    render() {
        const data = []
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Team Name</TableCell>
                        <TableCell align="right">Stadium</TableCell>
                        <TableCell align="right">Fifa Rating</TableCell>
                        <TableCell align="right">Squad Size</TableCell>
                        <TableCell align="right">Next Match</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {this.state.teams.map(row => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.stadium}</TableCell>
                            <TableCell align="right">{row.fifaRating}</TableCell>
                            <TableCell align="right">{row.squadSize}</TableCell>
                            <TableCell align="right">{row.nextMatch}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default ViewTeam;
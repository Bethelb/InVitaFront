import React from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

class CreateTeam extends React.Component {
    constructor(){
        super()

        this.state = {
            name: '',
            stadium: '',
            rating: 0,
            size: 0,
            match: '',
        }

        this.onTeamNameChange = this.onTeamNameChange.bind(this);
        this.onStadiumChange = this.onStadiumChange.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);
        this.onSizeChange = this.onSizeChange.bind(this);
        this.onMatchChange = this.onMatchChange.bind(this);
      }
    

      onTeamNameChange(event) {
        this.setState({ name: event.target.value })
      }

      onStadiumChange(event) {
        this.setState({ stadium: event.target.value })
      }

      onRatingChange(event) {
        this.setState({ rating: event.target.value })
      }

      onSizeChange(event) {
        this.setState({ size: event.target.value })
      }

      onMatchChange(event) {
        this.setState({ match: event.target.value })
      }

      handleChange = event => {
        this.setState({ [event.target.name] : event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
        const team = {
          name: this.state.name,
          stadium: this.state.stadium,
          fifaRating: this.state.rating,
          squadSize: this.state.size,
          nextMatch: this.state.match
        };

        // console.log(team)
    
        axios.post(`http://localhost:8081/soccer/details`, team)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

      
      
    render() {
        return (
            <div style={{marginTop: 15}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="name"
                        label="Team Name"
                        type="text"
                        value={this.state.name}
                        onChange={this.onTeamNameChange}
                        // defaultValue={this.state.name}
                    />
                    <br />
                    <br />
                    <TextField
                        id="stadium"
                        label="Stadium"
                        type="text"
                        autoComplete="current-stadium"
                        onChange={this.onStadiumChange}
                    />
                    <br />
                    <br />
                    <TextField
                        id="rating"
                        label="Fifa Rating"
                        type="number"
                        autoComplete="current-rating"
                        onChange={this.onRatingChange}
                    />
                    <br />
                    <br />
                    <TextField
                        id="size"
                        label="Team Size"
                        type="number"
                        autoComplete="current-size"
                        onChange={this.onSizeChange}
                    />
                    <br />
                    <br />
                    <TextField
                        id="match"
                        label="Next Match"
                        type="text"
                        autoComplete="current-match"
                        onChange={this.onMatchChange}
                    />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            
            </div>
        )
    }   
}

export default CreateTeam;
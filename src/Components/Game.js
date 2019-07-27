import React, { Component } from 'react';
import axios from 'axios';

class Game extends Component {

    state = {
        game: null
    }

    componentDidMount(){
        let id = this.props.match.params.game_id;
        axios.get('https://volleyballers.herokuapp.com/api/game/get?gameID='+id)
            .then( res => {
                this.setState({
                    game: res
                })
                console.log(this.state.game.data.winningTeamName);
                console.log(res.data.winningTeamName);
            })
            .catch(err => {

            });
    }

    render(){
        const dataIn = this.state.game ? true : false;
        if(dataIn){
            console.log(this.state.game.data.winningTeamName);
            // console.log(this.state.game.data[0].winningTeamName);
            return(
            <div className="container">
                <h1>{this.state.game.data.winningTeamName}</h1>
            </div>
            )
        } else{
            return(
            <div className="container">
                <h1>Loading</h1>
            </div>
            )
        }
        
    }
}

export default Game;
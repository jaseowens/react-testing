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
                console.log(res);
            })
            .catch(err => {

            });
    }

    render(){
        return(
        <div className="container">

        </div>
        )
    }


}

export default Game;
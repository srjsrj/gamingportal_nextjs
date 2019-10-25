import fetch from 'isomorphic-unfetch';
import Thumbnail from './thumbnail';
import React, { Component } from 'react';

class SimilarGames extends Component {
    state = {
        loading: true,
        games: []
    };

    componentDidMount() {
        fetch('http://api.spilgames.com/v1/gamedata/88/all?limit=43&offset=43&capabilities=desktop&capabilityBlacklist=touch&capabilityBlacklist=unity&sort_field=newlist_date&sort_order=desc')
            .then(gameDataResponse => gameDataResponse.json())
            .then((gamedata) => {
                let games = gamedata.documents;
                if(games) {
                    this.setState({
                        loading: false,
                        games: games
                    })
                }
            })
    }

    render() {
        if(!this.state.loading) {
            return (
                this.state.games.map((game, key) => (
                    <Thumbnail className='c-grid--thumbnail' id={key} key={key} data={game}></Thumbnail>
                ))
            );
        } else
            return null;
    }
}

export default SimilarGames;
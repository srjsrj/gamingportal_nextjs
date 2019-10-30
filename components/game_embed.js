import fetch from 'isomorphic-unfetch';
import React, { Component } from 'react';

class GameEmbed extends Component {
    state = {
        gamedata: {
            object_url: ''
        }
    };

    componentDidUpdate = (prevPros) => {
        if(this.props.gameUrl !== prevPros.gameUrl) {
            fetch(`https://api.spilgames.com/v1/gamedata/88/list/by-urls?limit=24&offset=0&capabilities=desktop&urls=${this.props.gameUrl}&extended=true`)
                .then(gameDataResponse => gameDataResponse.json())
                .then((gamedata) => {
                    let gameDocument = gamedata.documents[0];
                    if(gameDocument) {
                        this.setState({
                            loading: false,
                            gamedata: gameDocument
                        })
                    }
                })
        }
    }

    render() {
        return (
            <figure className='game-frame'>
                <iframe src={this.state.gamedata.object_url}></iframe>
                <figcaption>
                    <h1 className='title'>{this.state.gamedata.title}</h1>
                </figcaption>
                <style jsx>{`
                    .game-frame {
                        width: 100%;
                        height: 100%;
                        padding: 5px;
                        border-radius: 5px;
                        background: #fff url('/loader.gif') 50% 50% no-repeat;
                        background-size: 100px 100px;
                        margin: 0;
                    }
                    figcaption {
                        padding: 10px 5px;
                        margin: 0 -5px;
                    }
                    .description {

                    }
                    .title {
                        margin: 0;
                        font-size: 16px;
                    }
                    iframe {
                        width: 100%;
                        height: calc(100% - 38px);
                        border: none;
                    }
                `}</style>
            </figure>
        )
    }
}

export default GameEmbed;
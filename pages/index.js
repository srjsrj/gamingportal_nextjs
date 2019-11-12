import fetch from 'isomorphic-unfetch';

import Thumbnail from '../components/thumbnail';
import Logo from '../components/logo';
import Layout from '../components/layout';

const Index = props => (
    <Layout>
        <Logo></Logo>

        {props.games.map((game, key) => (
            <Thumbnail className='c-grid--thumbnail' id={key} key={key} data={game}></Thumbnail>
        ))}
    </Layout>
);
  
Index.getInitialProps = async function() {
    const newGamesReq = require('../games_all.json');
    const newGames = newGamesReq.documents;
    newGames.length = 70; // Limit games

    return {
        games: newGames.map((game, index) => {
            return {
                ...game,
                promotion: (index < 2) ? true : false
            };
        })
    }
}

export default Index;
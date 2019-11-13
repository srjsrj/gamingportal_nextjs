import { NextSeo } from 'next-seo';

import Thumbnail from '../components/thumbnail';
import Logo from '../components/logo';
import Layout from '../components/layout';

const Index = props => (
    <Layout>
        <Logo></Logo>

        {props.games.map((game, key) => (
            <Thumbnail className='c-grid--thumbnail' id={key} key={key} data={game}></Thumbnail>
        ))}
    <NextSeo
        title='Online games without ads and vodka'
        description='You can play free online games at school or at home. VodkaGames has the best online game selection and offers the most fun experience to play alone or with friends. We support desktop and mobile!'
    />
    </Layout>
);

const getGames = () => {
    const gameList = require('../games_all.json');
    const gamesDocuments = gameList.documents;
    const gameFilter = (game) => {
        // TODO; fetch from microservice
        return game.data.capabilities.indexOf('mobile') && game.data.integration === 'iframe';
    }
    return gamesDocuments.filter(game => gameFilter);
}
  
Index.getInitialProps = async function() {;
    const games = getGames();
    games.length = 100; // Limit games

    return {
        games: games.map((game, index) => {
            return {
                ...game,
                promotion: (index < 2) ? true : false
            };
        })
    }
}

export default Index;
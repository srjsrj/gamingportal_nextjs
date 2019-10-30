import fetch from 'isomorphic-unfetch';

import Thumbnail from '../components/thumbnail';
import Logo from '../components/logo';
import Layout from '../components/layout';

const Index = props => (
    <Layout>
        <Logo></Logo>

        {/* {props.editorPickGames.map((game, key) => (
            <Thumbnail className='c-grid--thumbnail' id={key} key={key} data={game} promotion='true'></Thumbnail>
        ))} */}

        {props.games.map((game, key) => (
            <Thumbnail className='c-grid--thumbnail' id={key} key={key} data={game}></Thumbnail>
        ))}
    </Layout>
);
  
Index.getInitialProps = async function() {
    const newGamesReq = require('../games_all.json');
    // const newGamesReqJSON = await newGamesReq.json();
    const newGames = newGamesReq.documents;

    // const editorPick = await fetch('http://portal-services-prd.api.internal.gc.spilcloud.com:31999/v1/promotion/editorspick?site_id=88&view=desktop');
    // const editorPickGames = await editorPick.json();

    return {
        games: newGames.map(game => game),
        // editorPickGames: editorPickGames
    }
}

export default Index;
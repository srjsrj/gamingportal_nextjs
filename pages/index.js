import fetch from 'isomorphic-unfetch';

import Thumbnail from './thumbnail';
import Logo from './logo';
import Layout from './layout';
import Search from './search';

const Index = props => (
    <Layout>
        <Logo></Logo>

        {props.games.map((game, key) => (
            <Thumbnail className='c-grid--thumbnail' id={key} key={key} data={game}></Thumbnail>
        ))}
    </Layout>
);
  
Index.getInitialProps = async function() {
    const newGamesReq = await fetch('http://api.spilgames.com/v1/gamedata/88/all?limit=90&offset=0&capabilities=desktop&capabilityBlacklist=unity&sort_field=newlist_date&sort_order=desc');
    const newGamesReqJSON = await newGamesReq.json();
    const newGames = newGamesReqJSON.documents;

    const editorPick = await fetch('http://portal-services-prd.api.internal.gc.spilcloud.com:31999/v1/promotion/editorspick?site_id=88&view=desktop');
    const editorPickJSON = await editorPick.json();
    const editorPickGames = editorPickJSON.map(game => ({...game, isPromotion: true})); // Mark some specific games to be a promotion

    return {
        games: [...editorPickGames, ...newGames].map(game => game)
    }
}

export default Index;
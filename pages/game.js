import { useRouter } from 'next/router';

import Layout from '../components/layout';
import Logo from '../components/logo';
import GameEmbed from '../components/game_embed';
import SimilarGames from '../components/similar_games';
import Advertisement from '../components/advertisement';

const Game = () => {
    const router = useRouter();
    
    return (
        <Layout>
            <Logo></Logo>

            <section className='game-embed-handler'>
                <GameEmbed gameUrl={router.query.title}></GameEmbed>
            </section>
            
            <SimilarGames></SimilarGames>
            
            <aside className='advertisment'><Advertisement></Advertisement></aside>

            <style jsx>{`
                .game-embed-handler {
                    grid-column-start: 2;
                    grid-column-end: 10;
                    grid-row-start: 1;
                    grid-row-end: 7;
                }

                .advertisment {
                    display: none;
                    grid-column-start: 12;
                    grid-column-end: 14;
                    grid-row-start: 1;
                    grid-row-end: 7;
                }        
            `}</style>
        </Layout>
    );
};

export default Game;
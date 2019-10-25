import { useRouter } from 'next/router';

const Logo = () => {
    const router = useRouter();

    return (
        <div>
            <figure onClick={() => router.push('/')}><img src='/meowth.svg' alt='' className='logo' title='Home'/></figure>
            <button onClick={() => router.back()} title='Back'>
                <img src='/return.svg' alt='back'/>
            </button>
            <button onClick={() => router.push('/')} title='Home'>
                <img src='/home.svg' alt=''/>
            </button>
            <style jsx>{`
                div {
                    width: 100%;
                    height: 94px;
                    font-size: 32px;
                    border-radius: 10px;
                    text-decoration: none;
                    color: #002646;
                    background: #EDF5E1;
                    border: 2px solid #093A69;
                    text-align: center;
                    font-size: 0;
                    z-index: 10;
                    overflow: hidden;
                }

                figure {
                    width: 100%;
                    overflow: hidden;
                    margin: 0;
                    border-bottom: 1px solid #093A69;
                    cursor: pointer;
                }

                figure:hover .logo {
                    transform: scale(1.03) rotate(3deg);
                }

                .logo {
                    height: 60px;
                    transition: transform .1s ease;
                }
                
                button {
                    float: left;
                    width: 50%;
                    height: 30px;
                    border: none;
                    background: none;
                    cursor: pointer;
                }

                button:last-child {
                    border-left: 1px solid #093A69;
                }

                button:hover {
                    background: #3C9483;
                }

                button img {
                    height: 20px;
                }
            `}</style>
        </div>
    );
};

export default Logo;
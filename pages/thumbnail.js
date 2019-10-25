import Link from 'next/link';

const Thumbnail = props => (
    <div className={props.data.isPromotion ? 'c-thumbnail c-thumbnail--promotion' : 'c-thumbnail'}>
        <Link href={`/game?title=${props.data.url_part}`}>
            <img className='c-thumbnail--image' src={props.data.thumbnail_large} alt={props.data.title}/>
        </Link>

        <span className='c-thumbnail--title'>{props.data.title}</span>
        <style jsx>{`
            .c-thumbnail {
                position: relative;
                box-shadow: 1px 1px 1px rgba(0, 0, 0, .5);
                border-radius: 10px;
                background: #fff;
                transition: transform .2s ease, box-shadow .2s ease;
                will-change: transition;
                overflow: hidden;
                height: 94px;
                cursor: pointer;
            }

            .c-thumbnail:hover {
                box-shadow: 0 0 10px rgba(0, 0, 0, .8);
                transform: scale(1.02);
            }

            .c-thumbnail:active {
                box-shadow: 0 0 2px rgba(0, 0, 0, .9);
                transform: scale(1);
            }

            .c-thumbnail:hover .c-thumbnail--image {
                opacity: 0.7;
            }

            .c-thumbnail:hover .c-thumbnail--title {
                opacity: 1;
            }

            .c-thumbnail--image {
                object-fit: cover;
                height: 100%;
            }

            .c-thumbnail--title {
                position: absolute;
                bottom: 5px;
                left: 10px;
                right: 10px;
                text-align: center;
                font-size: 14px;
                opacity: 0;
                transition: opacity .3s ease .1s;
                text-shadow: 0 0 5px #000;
                color: #fff;
                will-change: opacity;
            }

            .c-thumbnail--promotion {
                grid-column: span 2;
            }

            .c-thumbnail--promotion .c-thumbnail--image {
                width: 100%;
            }
        `}</style>
    </div>
);

export default Thumbnail;
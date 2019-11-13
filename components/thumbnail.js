
import Link from 'next/link';
import Image from '../components/image';

const Thumbnail = props => (
    <div className={props.data.promotion === true ? 'c-thumbnail c-thumbnail--promotion' : 'c-thumbnail'}>
        <a className='c-thumbnail--link' href={`/game?title=${props.data.url_part}`}>
            <Image class='c-thumbnail--image' key={props.id} src={props.data.thumbnail_large} alt={props.data.title}/>
        </a>

        <span className='c-thumbnail--title'>{props.data.title}</span>
        <style jsx>{`
            .c-thumbnail {
                position: relative;
                box-shadow: 1px 1px 1px rgba(0, 0, 0, .5);
                border-radius: 10px;
                background: #fff;
                transition: transform .2s ease, box-shadow .2s ease;
                will-change: transform, box-shadow;
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

            .c-thumbnail--link:before {
                content: '';
                width: 10%;
                height: 150%;
                background: #fff;
                position: absolute;
                top: -50%;
                left: 0;
                transform: rotate(30deg) translate(-100px, 0);
                filter: blur(10px);
                transition: transform .2s ease, filter .2s ease;
                will-change: transform, filter;
            }

            .c-thumbnail:hover .c-thumbnail--link:before {
                transform: rotate(40deg) translate(800%, 0);
                filter: blur(15px);
            }

            .c-thumbnail:hover .c-thumbnail--image {
                opacity: 0.8;
            }

            .c-thumbnail:hover .c-thumbnail--title {
                opacity: 1;
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
                grid-row: span 2;
                height: 198px;
            }

            .c-thumbnail--promotion:before {
                content: '';
                width: 80px;
                height: 80px;
                background: url('/new.svg') 100% 100% no-repeat;
                background-size: cover;
                position: absolute;
                top: 5px;
                right: 5px;
                transform: rotate(10deg);
                filter: drop-shadow(5px 5px 5px #000);
            }

            .c-thumbnail--promotion .c-thumbnail--image {
                width: 100%;
            }
        `}</style>
    </div>
);

export default Thumbnail;
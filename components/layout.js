import Head from "next/head";

const Layout = props => (
    <div className='c-layout'>
        <Head>
        </Head>
        {props.children}
        <style jsx>{`
            {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(94px,1fr));
                grid-template-rows: repeat(auto-fill, minmax(94px,1fr));
                grid-gap: 10px;
            }
        `}</style>
        
        {/* https://take.ms/byeIXw */}
        
        <style jsx global>{`
            html {
                box-sizing: border-box;
            }
            
            *,
            *::before,
            *::after {
                box-sizing: inherit;
            }
            :root {
                -moz-tab-size: 4;
                tab-size: 4;
            }
            
            html {
                line-height: 1.15; /* 1 */
                -webkit-text-size-adjust: 100%; /* 2 */
            }
            
            body {
                font-family:
                    -apple-system,
                    BlinkMacSystemFont,
                    'Segoe UI',
                    Roboto,
                    Helvetica,
                    Arial,
                    sans-serif,
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol';
            }
            hr {
                height: 0;
            }
            button,
            input,
            optgroup,
            select,
            textarea {
                font-family: inherit; /* 1 */
                font-size: 100%; /* 1 */
                line-height: 1.15; /* 1 */
                margin: 0; /* 2 */
            }
            button,
            select { /* 1 */
                text-transform: none;
            }
            button,
            [type='button'],
            [type='reset'],
            [type='submit'] {
                -webkit-appearance: button;
            }
            button::-moz-focus-inner,
            [type='button']::-moz-focus-inner,
            [type='reset']::-moz-focus-inner,
            [type='submit']::-moz-focus-inner {
                border-style: none;
                padding: 0;
            }

            body {
                padding: 10px;
                background: #62DA96;
                color: #093A69;
            }
            .h-img-thumb-sizer {
                object-fit: cover;height: 100%;
            }
        `}</style>
    </div>
);

export default Layout;
import Head from "next/head";

const Layout = props => (
    <div>
        <Head>
            <script async src="//www.googletagservices.com/tag/js/gpt.js"></script>
            <script>var googletag=googletag||{};googletag.cmd=googletag.cmd||[]</script>
            <script async src="//acdn.adnxs.com/prebid/not-for-prod/1/prebid.js"></script>
            <script>var pbjs=pbjs||{};pbjs.que=pbjs.que||[]</script>
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
        `}</style>
    </div>
);

export default Layout;
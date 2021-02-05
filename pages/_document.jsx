import Document,{ Head,Main,NextScript } from 'next/document';

class MyDocument extends Document{
    render(){
        return(
            <html>
                <Head>
                    <title>Next js Awesome kit</title>
                </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
            </html>
        )
    }
}

export default MyDocument;
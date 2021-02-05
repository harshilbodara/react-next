import Document,{ Head,Main,NextScript } from 'next/document';

class MyDocument extends Document{
    render(){
        return(
            <html>
                <Head>
                    <title>Next js Awesome kit</title>
                </Head>
                <Main/>
                <NextScript/>
            </html>
        )
    }
}

export default MyDocument;
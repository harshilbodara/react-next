import Link from 'next/link'

const Index = () => {
    return (
        <section>
            <p>Hello world</p>
            <Link href="/about">
                <a title="about Nextjs">About</a>
            </Link>
        </section>
    )
}

export default Index;
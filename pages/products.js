import React from 'react'
import Link from 'next/link';
import Head from "next/head"

const Products = ({ data }) => {

    return (
        <div>
            <Head>
                <title>Products List</title>
                <meta name="description" content="Products List" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Link href={'/'}>
                    <a>Home</a>
                </Link>
            </div>
            <br />
            {data.map(element => {
                return (
                    <div key={element.id}>{element.title}</div>
                )
            })}
        </div>
    )
}

export async function getStaticProps() {
    // Fetch data from external API
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Products

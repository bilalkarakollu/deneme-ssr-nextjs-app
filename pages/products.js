import React from 'react'
import Link from 'next/dist/client/link'
const Products = ({ data }) => {

    return (
        <div>
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

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://fakestoreapi.com/products`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Products

import type {NextPage}
from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import Header from '../components/Header'

export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()

    return {
        props: {
            todos: data
        }
    }
}

const Home: NextPage = ({}) => {
    return (
        <div className="">
            {/* {todos?.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          {todos?.map((todos: any) => (
            <div key={todos['id']}>
              <p>
                {todos['id']}: {todos['title']}
              </p>
            </div>
          ))}
        </div>
      )} */}
            <Head>
                <title>
                    Reddit 2.0
                </title>
            </Head>

            <Header/>
        </div>
    )
}

export default Home

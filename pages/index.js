import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div className=" rounded-lg bg-red-400 text-center mb-6 p-3">
        Hello, I am a software developer based in India.
      </div>
      <div className="md:flex ">
        <div className="flex-grow">
          <h3>Mohammed Sameer G</h3>
        </div>
      </div>
    </div>
  )
}

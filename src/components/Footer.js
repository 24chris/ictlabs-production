import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
   
    return (
        <footer className="">
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          from{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
        <div className="flex justify-center text-sm">from</div>
        <span className="flex justify-center text-sm">The <span className="text-center text-red-500">ICT</span> Labs</span>
        
      </footer>
    )
}

export default Footer


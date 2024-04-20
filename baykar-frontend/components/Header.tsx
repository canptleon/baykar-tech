import React from 'react'
import Link from "next/link";

function Header() {

  return (
    <header> 
        <div className="header-body flex-row mx-auto d-flex justify-content-between align-items-center">
          <div className="header-logo">
            <img src="/images/logo.svg" alt="Collers Logo" />
          </div>
          <div className="header-nav">
            <nav>
              <ul>
                <li><Link href={"#products"}>Products</Link></li>
                <li><Link href={"#solutions"}>Solutions</Link></li>
                <li><Link href={"#pricing"}>Pricing</Link></li>
                <li><Link href={"#resources"}>Resources</Link></li>
                <li><Link href={"#log-in"}>Log In</Link></li>
                <li><Link href={"#sign-up"} className="sign-up-nav">Sign up now</Link></li>
              </ul>
            </nav>
            <img src="/images/menu-scale.svg" alt="Menu" />
          </div>
        </div>
      </header>
  )
}

export default Header;
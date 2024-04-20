import React from 'react'
import Link from "next/link";

function Header() {

  return (
    <Link  href="https://www.baykartech.com/tr/" target="_blank"><img src="/images/Baykar-Logo.svg" alt="Baykar Logo" className="xsfull:right-[0] xsfull:left-[0] xsfull:mx-[auto] my-[0] absolute top-[20px] left-[20px] [filter:drop-shadow(2px_4px_6px_gray)]" /></Link>
  )
}

export default Header;
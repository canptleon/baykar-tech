import React from 'react'
import Link from "next/link";

function Bests() {

  return (
    <section className="triple-products">
        <div className="triple-products-body">
          <div className="row w-100 mx-auto align-items-center">
            <div className="col-sm-6 px-0">
              <h2>The best of best</h2>
            </div>
            <div className="col-sm-6 justify-content-end px-0">
              <Link href={"#"} className="sign-up-white">Sign up now</Link>
            </div>
          </div>
          <div className="triple-products-body-content w-100 mx-auto relative d-flex justify-content-between">
            <div className="triple-products-item">
              <img src="/images/bestof-1.png" alt="Title" className="triple-products-item-img" />
              <div className="triple-products-item-content">
                <h6>Title</h6>
                <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                <Link href={"#"}><img src="/images/shopping-cart.svg" alt="Buy Now" /> Buy Now</Link>
              </div>
            </div>
            <div className="triple-products-item">
              <img src="/images/bestof-2.png" alt="" className="triple-products-item-img" />
              <div className="triple-products-item-content">
                <h6>Title</h6>
                <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                <Link href={"#"}><img src="/images/shopping-cart.svg" alt="Buy Now" /> Buy Now</Link>
              </div>
            </div>
            <div className="triple-products-item">
              <img src="/images/bestof-3.png" alt="" className="triple-products-item-img" />
              <div className="triple-products-item-content">
                <h6>Title</h6>
                <p>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                <Link href={"#"}><img src="/images/shopping-cart.svg" alt="Buy Now" /> Buy Now</Link>
              </div>
            </div>
            <img src="/images/rectangle-pink-big.png" className="rectangle-absolute rectangle-pink-big" alt="Rectangle" />
            <img src="/images/rectangle-blue-big.png" className="rectangle-absolute rectangle-blue-big" alt="Rectangle" />
            <img src="/images/rectangle-brown-big.png" className="rectangle-absolute rectangle-brown-big" alt="Rectangle" />
            <img src="/images/rectangle-purple-big.png" className="rectangle-absolute rectangle-purple-big" alt="Rectangle" />
            <img src="/images/rectangle-green-big.png" className="rectangle-absolute rectangle-green-big" alt="Rectangle" />
          </div>
        </div>
      </section>
  )
}

export default Bests;
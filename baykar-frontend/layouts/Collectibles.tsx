import React from 'react'
import Link from "next/link";

function Collectibles() {

  return (
    <section className="main-area">
        <div className="main-area-body mx-auto">
          <div className="main-area-flex w-100 d-flex flex-row align-center justify-content-between align-items-center">
            <div className="main-area-body-left">
              <h1>Collectible Sneakers</h1>
              <p>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
              <div className="d-flex">
                <Link href={"#log-in"} className="sign-up-main">Sign up now</Link>
                <button><img src="/images/watch-icon.svg" alt="Watch Demo" /> Watch Demo</button>
              </div>
            </div>
            <div className="main-area-body-right">
              <div className="position-relative">
                <img src="/images/yellow-shoe.png" alt="Collectible Sneakers" />
                <span className="yellow-shoe-bg"></span>
              </div>
            </div>
          </div>
          <div className="main-area-bottom d-flex w-100 mx-auto align-center justify-content-between">
            <div className="main-area-bottom-1 px-0">
              <div className="position-relative">
                <img src="/images/main-small-1.svg" alt="" />
                <img src="/images/main-small-1-absolute.svg" alt="" />
              </div>
              <h6>Nibh vivierra</h6>
              <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
            </div>
            <div className="main-area-bottom-2 px-0">
              <div className="position-relative">
                <img src="/images/main-small-2.svg" alt="" />
                <img src="/images/main-small-2-absolute.svg" alt="" />
              </div>
              <h6>Cursus amet</h6>
              <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
            </div>
            <div className="main-area-bottom-3 px-0">
              <div className="position-relative">
                <img src="/images/main-small-3.svg" alt="" />
                <img src="/images/main-small-3-absolute.svg" alt="" />
              </div>
              <h6>Ipsum fermentum</h6>
              <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. </p>
            </div>
          </div>
          <img src="/images/rectangle-main.png" className="rectangle-main" alt="Rectangle" />
        </div>
      </section>
  )
}

export default Collectibles;
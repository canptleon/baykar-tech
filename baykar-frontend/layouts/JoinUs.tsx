import React from 'react'
import Link from "next/link";

function JoinUs() {

  return (
    <section className="why-join-us">
        <div className="why-join-us-body">
          <div className="container-fluid px-0">
            <div className="row w-100 mx-auto justify-between align-items-center">
              <div className="col-md-6">
                <h2>Why join us</h2>
                <ul>
                  <li><img src="/images/check-green.svg" alt="Check" /> Est et in pharetra magna adipiscing ornare aliquam.</li>
                  <li><img src="/images/check-green.svg" alt="Check" /> Tellus arcu sed consequat ac velit ut eu blandit.</li>
                  <li><img src="/images/check-green.svg" alt="Check" /> Ullamcorper ornare in et egestas dolor orci.</li>
                </ul>
                <Link href={"#"} className="sign-up">Sign up now</Link>
              </div>
              <div className="col-md-6">
                <div className="why-join-us-video-area position-relative">
                  <div className="why-join-us-img">
                    <img src="/images/video.png" alt="Video" className="why-join-us-image" />
                  </div>
                  <img src="/images/rectangle-brown-medium.png" alt="Rectangle" className="absolute absolute-orange" />
                  <img src="/images/rectangle-yellow.png" alt="Rectangle" className="absolute absolute-yellow" />
                  <img src="/images/rectangle-green-medium.png" alt="Rectangle" className="absolute absolute-green" />
                  <img src="/images/rectangle-blue-medium.png" alt="Rectangle" className="absolute absolute-blue" />
                  <img src="/images/rectangle-purple-medium.png" alt="Rectangle" className="absolute absolute-purple" />
                  <img src="/images/rectangle-pink-medium.png" alt="Rectangle" className="absolute absolute-pink" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default JoinUs;
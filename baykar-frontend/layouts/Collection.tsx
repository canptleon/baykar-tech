import React, { useState } from "react";

function Collection() {

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="grow-your-collection">
        <div className="grow-your-collection-body">
          <div className="grow-your-collection-head">
            <h2>Grow your collection</h2>
            <p>Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
              Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
          </div>
          <div className="grow-your-collection-content">
            <div className="grow-your-collection-content-flex d-flex flex-row align-items-start w-100 mx-auto">
              <div className="collection-tab-links">
                <ul>
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <li key={index}>
                      <button className={index === activeIndex ? "nav-active" : ""} onClick={() => handleTabClick(index)}>
                        {index === 0 && <img src="/images/nav-icon-1.svg" alt="Bibendum tellus" />}
                        {index === 1 && <img src="/images/shield-check.svg" alt="Cras eget" />}
                        {index === 2 && <img src="/images/rocket.svg" alt="Dolor pharetra" />}
                        {index === 3 && <img src="/images/screen.svg" alt="Amet, fringilla" />}
                        {index === 4 && <img src="/images/podcast.svg" alt="Amet nibh" />}
                        {index === 5 && <img src="/images/settings-alt.svg" alt="Se velit" />}
                        {['Bibendum tellus', 'Cras eget', 'Dolor pharetra', 'Amet, fringilla', 'Amet nibh', 'Se velit'][index]} <img src="/images/nav-arrow.svg" alt="Nav Arrow" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="collection-tab-content">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className={`collection-tab-content-item ${index === activeIndex ? "content-item-active" : ""}`}>
                    <div className="position-relative">
                      <img src="/images/grow-your-collection-1.png" alt="" className="collection-tab-content-item-img-1" />
                      <img src="/images/grow-your-collection-2.png" alt="" className="collection-tab-content-item-img-2" />
                      <img src="/images/grow-your-collection-3.png" alt="" className="collection-tab-content-item-img-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <img src="/images/waves.png" alt="Vawes" className="waves" />
        </div>
      </section>
  )
}

export default Collection;
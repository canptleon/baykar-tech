import React from 'react'

function Map() {
  
  const handlePinClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const mapAreaItem = target.closest('.map-area-item');
    if (mapAreaItem) {
      const mapPins = document.querySelectorAll('.map-area-item');
      mapPins.forEach(pin => pin.classList.remove('map-pin-active'));

      mapAreaItem.classList.add('map-pin-active');
    }
  };
 
  return(
    <section className="collected-shoes">
      <div className="collected-shoes-body">
        <img src="/images/" alt="" className="collected-shoes-bg" />
        <div className="map-area">
          <img src="/images/map.png" alt="Map" className="map-img" />
          <div className="map-area-item map-pin-1 map-pin-active" onMouseEnter={handlePinClick}>
            <div className="map-area-item-body">
              <div className="map-area-item-img">
                <img src="/images/map-item-image.png" alt="Map Item" />
              </div>
              <div className="map-area-item-text">
                <p>Emma Simpson collected one pair of <b>Cool Shoes</b>.</p>
              </div>
            </div>
            <span className="map-pin"></span>
          </div>
          <div className="map-area-item map-pin-2" onMouseEnter={handlePinClick}>
            <div className="map-area-item-body">
              <div className="map-area-item-img">
                <img src="/images/map-item-image.png" alt="Map Item" />
              </div>
              <div className="map-area-item-text">
                <p>Emma Simpson collected one pair of <b>Cool Shoes</b>.</p>
              </div>
            </div>
            <span className="map-pin"></span>
          </div>
          <div className="map-area-item map-pin-3" onMouseEnter={handlePinClick}>
            <div className="map-area-item-body">
              <div className="map-area-item-img">
                <img src="/images/map-item-image.png" alt="Map Item" />
              </div>
              <div className="map-area-item-text">
                <p>Emma Simpson collected one pair of <b>Cool Shoes</b>.</p>
              </div>
            </div>
            <span className="map-pin"></span>
          </div>
          <div className="map-area-item map-pin-4" onMouseEnter={handlePinClick}>
            <div className="map-area-item-body">
              <div className="map-area-item-img">
                <img src="/images/map-item-image.png" alt="Map Item" />
              </div>
              <div className="map-area-item-text">
                <p>Emma Simpson collected one pair of <b>Cool Shoes</b>.</p>
              </div>
            </div>
            <span className="map-pin"></span>
          </div>
          <div className="map-area-item map-pin-5" onMouseEnter={handlePinClick}>
            <div className="map-area-item-body">
              <div className="map-area-item-img">
                <img src="/images/map-item-image.png" alt="Map Item" />
              </div>
              <div className="map-area-item-text">
                <p>Emma Simpson collected one pair of <b>Cool Shoes</b>.</p>
              </div>
            </div>
            <span className="map-pin"></span>
          </div>
          <div className="map-area-item map-pin-6" onMouseEnter={handlePinClick}>
            <div className="map-area-item-body">
              <div className="map-area-item-img">
                <img src="/images/map-item-image.png" alt="Map Item" />
              </div>
              <div className="map-area-item-text">
                <p>Emma Simpson collected one pair of <b>Cool Shoes</b>.</p>
              </div>
            </div>
            <span className="map-pin"></span>
          </div>
          <div className="map-area-item map-pin-7" onMouseEnter={handlePinClick}>
            <div className="map-area-item-body">
              <div className="map-area-item-img">
                <img src="/images/map-item-image.png" alt="Map Item" />
              </div>
              <div className="map-area-item-text">
                <p>Emma Simpson collected one pair of <b>Cool Shoes</b>.</p>
              </div>
            </div>
            <span className="map-pin"></span>
          </div>
          <div className="map-area-item map-pin-8" onMouseEnter={handlePinClick}>
            <div className="map-area-item-body">
              <div className="map-area-item-img">
                <img src="/images/map-item-image.png" alt="Map Item" />
              </div>
              <div className="map-area-item-text">
                <p>Emma Simpson collected one pair of <b>Cool Shoes</b>.</p>
              </div>
            </div>
            <span className="map-pin"></span>
          </div>
          <div className="map-area-item map-pin-9" onMouseEnter={handlePinClick}>
            <div className="map-area-item-body">
              <div className="map-area-item-img">
                <img src="/images/map-item-image.png" alt="Map Item" />
              </div>
              <div className="map-area-item-text">
                <p>Emma Simpson collected one pair of <b>Cool Shoes</b>.</p>
              </div>
            </div>
            <span className="map-pin"></span>
          </div>
          <div className="map-area-item map-pin-10" onMouseEnter={handlePinClick}>
            <div className="map-area-item-body">
              <div className="map-area-item-img">
                <img src="/images/map-item-image.png" alt="Map Item" />
              </div>
              <div className="map-area-item-text">
                <p>Emma Simpson collected one pair of <b>Cool Shoes</b>.</p>
              </div>
            </div>
            <span className="map-pin"></span>
          </div>
          <div className="map-area-text">
            <h2 className="d-flex flex-col">11,658,567 <span>Shoes Collected</span></h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map;
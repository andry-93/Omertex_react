import React from 'react';

import './style.css';

export default function Catalog() {
  return (
    <section className="full-section">
      <h1>Каталог</h1>
      <div className="container">
        <div className="column">
          <div className="post-module">
            <div className="thumbnail">
              <img alt="" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
            </div>
            <div className="post-content">
              <h2 className="title">City Lights in New York</h2>
              <h3 className="price">The city that never sleeps.</h3>
              <div>
                <div className="availability">Наличие: нет в наличии</div>
                <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="post-module">
            <div className="thumbnail">
              <img alt="" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg" />
            </div>
            <div className="post-content">
              <h2 className="title">City Lights in New York</h2>
              <h3 className="price">The city that never sleeps.</h3>
              <div>
                <div className="availability">Наличие: нет в наличии</div>
                <p className="description">New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

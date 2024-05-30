import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "react-responsive-modal/styles.css";
import { Modal } from 'react-responsive-modal';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import "../Styles/filter.css";

export default function Filter() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openAccountModal, setOpenAccountModal] = useState(false);

  return (
    <div>
      <div className="navbar">
        <nav>
          <ul>
            <li><Link to="/" className="left-sec col-sm-12 col-md-12 col-lg-12">e!</Link></li>
            <li><a href="#" className="right-sec col-sm-12 col-md-12 col-lg-12" onClick={() => setOpenLoginModal(true)}>Login</a></li>
            <li><a href="#" className="right-sec account col-sm-12 col-md-12" onClick={() => setOpenAccountModal(true)}>Create an account</a></li>
          </ul>
        </nav>
      </div>

      <div id="myId" className="heading">
        Breakfast Places in Mumbai
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 filter-options">
            <div className="filter-heading">Filters / Sort</div>
            <span className="glyphicon glyphicon-chevron-down toggle-span" data-toggle="collapse"
              data-target="#filter">
            </span>
            <div id="filter" className="collapse show">
              <div className="Select-Location">Select Location</div>
              <select className="Rectangle-2236">
                <option>Select</option>
                <option>ShalimarBagh, Delhi</option>
                <option>Janpat, Delhi</option>
                <option>MSP, Delhi</option>
                <option>AnandVihar,Delhi</option>
              </select>
              <div className="Cuisine">Cuisine</div>
              <div>
                <input type="checkbox" />
                <span className="checkbox-items">North Indian</span>
              </div>
              <div>
                <input type="checkbox" />
                <span className="checkbox-items">South Indian</span>
              </div>
              <div>
                <input type="checkbox" />
                <span className="checkbox-items">Chinese</span>
              </div>
              <div>
                <input type="checkbox" />
                <span className="checkbox-items">Fast Food</span>
              </div>
              <div>
                <input type="checkbox" />
                <span className="checkbox-items">Street Food</span>
              </div>

              <div className="Cuisine">Cost For Two</div>
              <div>
                <input type="radio" />
                <span className="checkbox-items">Less than &#8377; 500</span>
              </div>
              <div>
                <input type="radio" />
                <span className="checkbox-items">&#8377; 500 to &#8377; 1000</span>
              </div>
              <div>
                <input type="radio" />
                <span className="checkbox-items">&#8377; 1000 to &#8377; 1500</span>
              </div>
              <div>
                <input type="radio" />
                <span className="checkbox-items">&#8377; 1500 to &#8377; 2000</span>
              </div>
              <div>
                <input type="radio" />
                <span className="checkbox-items">&#8377; 2000 +</span>
              </div>

              <div className="Cuisine">Sort</div>
              <div>
                <input type="radio" />
                <span className="checkbox-items">Price low to high</span>
              </div>
              <div>
                <input type="radio" />
                <span className="checkbox-items">Price high to low</span>
              </div>
            </div>
          </div>
          <div className="col-sm-8 col-md-8 col-lg-8">
            <div className="Item">
              <div className="small-item vertical">
                <img className="img fimg img-fluid" src="../Assets/fimg1.jpeg" alt="food" />
              </div>
              <div className="big-item">
                <div className="rest-name">The Big Chil Cakery</div>
                <div className="rest-location">FORT</div>
                <div className="rest-address">Shop 1, Plot D, Complex, Chincholli</div>
              </div>
              <hr />
              <div>
                <div className="margin-left">
                  <div className="Bakery">CUISINES : Bakery</div>
                  <div className="Bakery">COST FOR TWO : &#8377; 700 </div>
                </div>
              </div>
            </div>
            
            <div className="Item">
              <div className="small-item vertical">
                <img className="img fimg img-fluid" src="../Assets/img3.jpeg" alt="food" />
              </div>
              <div className="big-item">
                <div className="rest-name">The Street Food</div>
                <div className="rest-location">FORT</div>
                <div className="rest-address">Shop 1, Plot D, Complex, Chincholli</div>
              </div>
              <hr />
              <div>
                <div className="margin-left">
                  <div className="Bakery">CUISINES : Samosas</div>
                  <div className="Bakery">COST FOR TWO : &#8377; 300 </div>
                </div>
              </div>
            </div>

            <div className="pagination">
              <a href="#">&laquo;</a>
              <a href="#" className='btn btn-outline-danger'>1</a>
              <a href="#" className='btn btn-outline-danger'>2</a>
              <a href="#" className='btn btn-outline-danger'>3</a>
              <a href="#" className='btn btn-outline-danger'>4</a>
              <a href="#" className='btn btn-outline-danger'>5</a>
              <a href="#" className='btn btn-outline-danger'>6</a>
              <a href="#">&raquo;</a>
            </div>
          </div>
        </div>
      </div>

      <LoginModal open={openLoginModal} onClose={() => setOpenLoginModal(false)} />
      <SignupModal open={openAccountModal} onClose={() => setOpenAccountModal(false)} />
    </div>
  );
}

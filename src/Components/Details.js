import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Modal } from 'react-responsive-modal';
import '../Styles/details.css';
import LoginModal from './LoginModal'; // Update the path if necessary
import SignupModal from './SignupModal'; // Update the path if necessary

export default function Details() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
      <div className="navbar">
        <nav>
          <ul>
            <li><Link to="/" className="left-sec col-sm-12 col-md-12 col-lg-12">e!</Link></li>
            <li><a href="#" className="right-sec col-sm-12 col-md-12 col-lg-12" onClick={() => setOpenLoginModal(true)}>Login</a></li>
            <li><a href="#" className="right-sec account col-sm-12 col-md-12" onClick={() => setOpenSignupModal(true)}>Create an account</a></li>
          </ul>
        </nav>
      </div>
      
      <Carousel showThumbs={false}>
        <div className='iContainer'>
          <img src="../Assets/img1.jpeg" className='img-fluid myImg' alt="sorry for the inconvenience"/>
          <button className="button">Click to see the Image Gallery</button>
        </div>
        <div className='iContainer'>
          <img src="../Assets/img2.jpeg" className='img-fluid myImg' alt="sorry for the inconvenience"/>
          <button className="button">Click to see the Image Gallery</button>
        </div>
        <div className='iContainer'>
          <img src="../Assets/img3.jpeg" className='img-fluid myImg' alt="sorry for the inconvenience"/>
          <button className="button">Click to see the Image Gallery</button>
        </div>
      </Carousel>

      <div className="heading myHeading">The Big Chill Cakery</div>
      
      <button onClick={onOpenModal} className='btn-order'>Place Online Order</button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className='mx-4 container'>
            <h4 style={{marginRight:"-4px"}}>Menu</h4>
            <h4 className="">Dominos</h4>   
                <p>Veg - Price: 380/-</p>
                <p>Non Veg - Price: 500/-</p>
                <p>Fish - Price: 680/-</p>
                <p>Meat - Price: 400/-</p>
                <p>Salad - Price: 180/-</p>          
        </div>
      </Modal>

      <Tabs>
        <TabList className="myT">
          <Tab className="subH">Overview</Tab>
          <Tab className="subH">Contact</Tab>
        </TabList>

        <TabPanel>
          <div className="about">About this place</div>
          <div className="head">Cuisine</div>
          <div className="value">Bakery, Fast-food</div>
          <div className="head">Average Cost</div>
          <div className="value">&#8377; 700 for two people (approx)</div>
        </TabPanel>

        <TabPanel>
          <div className="head">Phone Number</div>
          <div className="value myP">+9111104404959</div>
          <div className="head">The Big Chill Cakery</div>
          <div className="value">Shop 1, Plot D, Samruddhi Complex, Chincholi, Mumbai-400002, Maharashtra</div>
        </TabPanel>
      </Tabs>

      <LoginModal open={openLoginModal} onClose={() => setOpenLoginModal(false)} />
      <SignupModal open={openSignupModal} onClose={() => setOpenSignupModal(false)} />
    </div>
  );
}

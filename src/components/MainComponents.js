import React, { Component } from 'react'
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom';

// Basic pages
import Home from './HomeComponent/HomeComponent';
import Header from "./HeaderComponent/HeaderComponent"
import Doctor from "./DoctorComponent/DoctorComponent";
import Medicine from "./MedicineComponent/MedicineComponent";
import Message from "./MessageComponent/MessageComponent";
import ErrorPage from "./ErrorPageComponent/ErrorPageComponent";

// Import more pages below here 

class Main extends Component {
  render() {
    return (
        <React.Fragment>
            <Router>
                <Header/>
                <Routes>
                  {/* Routes for home page  */}
                  <Route exact path="/" element={<Home/>} />
                  <Route exact path="/doctor" element={<Doctor/>} />
                  <Route exact path="/medicine" element={<Medicine/>} />
                  <Route exact path="/message" element={<Message/>} />
                  <Route exact path="*" element={<ErrorPage/>} />
                  {/* Add more routes below here */}

                </Routes>
            </Router>
        </React.Fragment>
    )
  }
}

export default Main;
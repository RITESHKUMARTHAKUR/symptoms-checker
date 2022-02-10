import React from 'react';
import { useNavigate } from 'react-router-dom';

// Error page to show that
// the requested page isn't available
const ErrorPage = () => {
    
    // Navigate hook to send back the user to home page
    const navigate = useNavigate();

    return(
        <div className="ErrorContainer" style={{textAlign:"center" , cursor:"pointer" }} >
            <h2>Sorry the page isn't available !!</h2>
            <button style={{cursor:"pointer"}} onClick={ () => navigate("/") } > Back to Home </button>
        </div>
    )
};

export default ErrorPage;
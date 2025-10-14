import { PiMaskSadDuotone } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import '../App.css';
export const ErrorPage = () =>{
    return (
        <section className="error-section">
            <div className="error-container-grid-two">
                <div className="err-outer-one">
                    <PiMaskSadDuotone size={150}/>

                </div>
                <div className="err-outer-two">
                    <h1 className="err-title">
                        404
                    </h1>
                    <h3 className="err-title-description">
                        OOPS! PAGE NOT FOUND 
                    </h3>
                    <p className="err-about-details">
                        Sorry but the page you are looking for does not exist,<br /> 
                        have been removed. name changed or is temporarily<br/>
                        unavailable
                    </p>
                    <NavLink to="/" className="err-btn">Back to homepage</NavLink>
                </div>
            </div>

        </section>
    );
}
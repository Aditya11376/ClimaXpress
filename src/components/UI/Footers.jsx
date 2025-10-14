import { TiWeatherWindyCloudy } from "react-icons/ti";
import footerData from "../../API/footers.json";
import { LuInstagram } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import { NavLink } from "react-router-dom";
export const Footers =()=>{
    const {brand,community,navigation,contact,legal} = footerData;
    const footerIcon = {
        "fa-brands fa-facebook-f":<ImFacebook2/>,
        "fa-brands fa-twitter":<RiTwitterXLine/>,
        "fa-brands fa-instagram":<LuInstagram />
    }

    return(
       <footer className="footer-section-container">
        <div className="fs-container">
            <div className="fs-one-upper">
                <div className="fs-up-grid-three">
                    {/* footer-title  */}
                    <div className="fs-up-grid-partOne">
                        <span className="fs-up-box"><TiWeatherWindyCloudy size={50}/>
                        <h1 className="section-title">{brand.title}</h1>
                        <p className="section-tagline">{brand.tagline}</p></span>
                    </div>
                    {/* footer-link-web  */}
                    <div className="fs-up-grid-partTwo">
                        <ul className="footer-nav-list">
                            {navigation.map((item,index)=>{
                            const {name,url}=item;
                            return(
                                <li key={index}>
                                    <NavLink to={url} target="_blank">{name}</NavLink>
                                </li>
                            );
                        }
                        )}
                        </ul>
                    </div>
                    {/* footer-link-social  */}
                    < div className="fs-up-grid-partThree">
                        <div className="section-discuss">
                            <h2 className="discuss-title"><i>{contact.text}</i></h2>
                            <h3 className="discuss-email"><a href={`https://mail.google.com/mail/?view=cm&to=${contact.email}` } target="_blank" rel ="noopener noreferrer">{contact.email}</a></h3><br />
                        </div>
                        <hr />
                        <div className="section-social-media">
                            {/*doing */}
                            <b><h2 className="section-media-title">{community.text}</h2></b>
                            <div className="fs-media-icon">
                                {community.links.map((item,index)=>{
                                    const{name,url,icon} = item;
                                    return(
                                        <a key={index} href={url} target="_blank">
                                            <div className="icons-fssm">{footerIcon[icon]}</div>
                                        </a>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer-copy-right  */}
            <div className="fs-second-lower">
             
                <p className="para-copyright">
                    {legal.disclaimer}
                    <br />
                    {legal.copyright}
                </p>
            </div>
        </div>
       </footer>
    );
}
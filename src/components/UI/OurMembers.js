import React from "react";
import "../../styles/our-member.css";
import {col} from "reactstrap";
import {Link} from "react-router-dom"
import ava1 from "../../assets/images/ava1";
import ava2 from "../../assets/images/ava2";
import ava3 from "../../assets/images/ava3";
import ava4 from "../../assets/images/ava4";
// import ava5 from "../../assets/images/ava5"

const OUR_MEMBERS = [
    {
        name: "JOHN OKETCH",
        experience: "5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava1,
      },
    
      {
        name: "OLIVIA ADONGO",
        experience: "5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava2,
      },
    
      {
        name: "ELIUD WANJA",
        experience: "5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava3,
      },
    
      {
        name: "ANJELA KANYI",
        experience: "5 years of experience",
        fbUrl: "#",
        instUrl: "#",
        twitUrl: "#",
        linkedinUrl: "#",
        imgUrl: ava4,
    },
];

const OurMembers = () => {
    return (
      <>
        {OUR_MEMBERS.map((item, index) => (
          <col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
            <div className="single__member">
              <div className="single__member-img">
                <img src={item.imgUrl} alt="" className="w-100" />
  
                <div className="single__member-social">
                  <Link to={item.fbUrl}>
                    <i class="ri-facebook-line"></i>
                  </Link>
                  <Link to={item.twitUrl}>
                    <i class="ri-twitter-line"></i>
                  </Link>
  
                  <Link to={item.linkedinUrl}>
                    <i class="ri-linkedin-line"></i>
                  </Link>
  
                  <Link to={item.instUrl}>
                    <i class="ri-instagram-line"></i>
                  </Link>
                </div>
              </div>
  
              <h6 className="text-center mb-0 mt-3">{item.name}</h6>
              <p className="section__description text-center">
                {item.experience}
              </p>
            </div>
          </col>
        ))}
      </>
    );
  };
  
  export default OurMembers;


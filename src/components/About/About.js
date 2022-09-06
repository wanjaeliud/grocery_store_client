
import ava1 from "../../image/ava1";
import ava2 from "../../image/ava2";
import ava3 from "../../image/ava3";
import ava4 from "../../image/ava4";
import ava5 from "../../image/ava5";
import group from "../../image/group";
import React from "react";
import '../../App.css';


const About = () => {
  return (
    <div className='about-section'>
       <h1 className='about_header'>ABOUT US  </h1>

       <div className="about-container">
        <div className="about">
          <img src={group} alt="group photo">
            <h1>Group photo of the management. </h1>
            <h1>VISION <span>AND</span> <span>MISSION</span></h1>
            <h2>VISION</h2>
            <h4>Excellent administration and management of land for improved livelihoods and sustainable development</h4>
            <h2>MISSION</h2>
            <h4>To secure and manage public land and exercise oversight on use of land for the benefit of all Kenyans</h4>
            <h2>Core <span>Values</span></h2>
            <ul>
              <li>Professionalism</li>
              <li>integrity</li>
              <li>innovation</li>
              <li>sustainability</li>
              <li>inclusivity</li>
              <li>equity</li>
            </ul>
            <h2>Motto</h2>
            <h4>Our Land, Our Wealth, Our Heritage</h4>
          </img>
        </div>


        <section>
          <Container>
            <Row>
              <Col lg="12" className="mb-5 text-center">
                <h6 className="section__subtitle">Experts</h6>
                <h2 className="section__title">Our Members</h2>
              </Col>
              <OurMembers />
            </Row>
          </Container>
        </section>


        <div className="about">
          <img src={ava1} alt="JOHN OKETCH"></img>
          <h2>JOHN OKETCH - Chairman</h2>
          <h4>
          He is a  graduate of the University of Nairobi ( LLB, 1989)  and   was admitted to the Bar in 1990. He has <br>
          of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          </h4>
        </div>


        <div className="about">
          <img src={ava2} alt="OLIVIA ADONGO"></img>
          <h2>JOHN OKETCH - vicechair</h2>
          <h4>
          He is a  graduate of the University of Nairobi ( LLB, 1989)  and   was admitted to the Bar in 1990. He has <br>
          of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          </h4>
        </div>


        <div className="about">
          <img src={ava3} alt="ELIRD WANJA"></img>
          <h2>JOHN OKETCH - Chairman</h2>
          <h4>
          He is a  graduate of the University of Nairobi ( LLB, 1989)  and   was admitted to the Bar in 1990. He has <br>
          of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          </h4>
        </div>


        <div className="about">
          <img src={ava4} alt="RAILA ODINGA"></img>
          <h2>JOHN OKETCH - Chairman</h2>
          <h4>
          He is a  graduate of the University of Nairobi ( LLB, 1989)  and   was admitted to the Bar in 1990. He has <br>
          of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          </h4>
        </div>


        <div className="about">
          <img src={ava5} alt="MARTHA KOOME"></img>
          <h2>JOHN OKETCH - Chairman</h2>
          <h4>
          He is a  graduate of the University of Nairobi ( LLB, 1989)  and   was admitted to the Bar in 1990. He has <br>
          of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          <br>of Defence Lawyers ( IADAD),  Association of Defence Lawyers at the UNICTR (ADAD) of which he was</br>
          </h4>
        </div>


        <section className="about__page-section">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12">
                <div className="about__page-img">
                  <img src={group} alt="" className="w-100 rounded-3" />
                </div>
              </Col>
  
              <Col lg="6" md="6" sm="12">
                <div className="about__page-content">
                  <h2 className="section__title">
                    We Are Committed To connect farmers to the market
                  </h2>
  
                  <p className="section__description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet veniam assumenda aperiam accusantium ex autem
                    perferendis repellendus nostrum delectus. Nemo et dolore est
                    tempore rem minima adipisci magni dolorum ipsam.
                  </p>
  
                  <p className="section__description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eveniet veniam assumenda aperiam accusantium ex autem
                    perferendis repellendus nostrum delectus. Nemo et dolore est
                    tempore rem minima adipisci magni dolorum ipsam.
                  </p>
  
                  <div className=" d-flex align-items-center gap-3 mt-4">
                    <span className="fs-4">
                      <i class="ri-phone-line"></i>
                    </span>
  
                    <div>
                      <h6 className="section__subtitle">Need Any Help?</h6>
                      <h4>+254704843797</h4>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>



       </div>
    </div>
  )
}


  
  export default About;
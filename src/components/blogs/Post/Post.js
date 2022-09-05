import React from "react";
import "./post.css";

export default function Post() {
  return (
      <div className="post">
          <div className="myposts">
              <div className="image">
              <img 
              className="postImg"
              src="https://cdn.gobankingrates.com/wp-content/uploads/2020/12/grocery-milk-bread-vegetable-delivery-mask-covid_shutterstock_1765713047.jpg"
              alt=""
              />
              </div>
              <div className="content">
                  <div className="postCat">
                    <span className="postCat">Organic</span>
                    <span className="postCat">LifeStyle</span>
                  </div>
                  <div>
                      <h3>Title</h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                       when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                       It has survived not only five centuries, but also the leap into electronic typesetting,
                       remaining essentially unchanged.</p>
                  </div>
              </div>

          </div>

      </div>
  )
}
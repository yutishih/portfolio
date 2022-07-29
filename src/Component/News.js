import React, { Component } from 'react'
import Blog_1 from '../Images/blog_1.jpg'
import Brush_10 from '../Images/brush_10.png'
import Brush_11 from '../Images/brush_11.png'

export class News extends Component {
  render() {
    return (
      <div className='section-component'>
        <div className='news' id='news'>
          <div className='container'>
            <div className='main_title'>
              <span>From My Blog</span>
              <h3>Some Updates, Thoughts, and Things I Did</h3>
            </div>
            <div className='news_list'>
              <ul>
                <li className='fadeInUp'>
                  <div className='list_inner'>
                    <div className='image'>
                      <a href='#'><img src={Blog_1} /></a>
                      <div className='date'>
                        <h3>23</h3>
                        <span>Dec</span>
                      </div>
                    </div>
                    <div className='details'>
                      <span class="category">
                        <a href="#">Web Development</a>
                      </span>
                      <h3 class="title">
                        <a href="#">Jim Morisson Says when the musics over turn off the light</a>
                      </h3>
                    </div>
                    <div className='news_hidden_details'>
                      <div className='news_popup_informations'>
                        <div className='text'>
                          <p>Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                          <p>In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.</p>
                          <p>That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='fadeInUp'>
                  <div className='list_inner'>
                    <div className='image'>
                      <a href='#'><img src={Blog_1} /></a>
                      <div className='date'>
                        <h3>23</h3>
                        <span>Dec</span>
                      </div>
                    </div>
                    <div className='details'>
                      <span class="category">
                        <a href="#">Web Development</a>
                      </span>
                      <h3 class="title">
                        <a href="#">Jim Morisson Says when the musics over turn off the light</a>
                      </h3>
                    </div>
                    <div className='news_hidden_details'>
                      <div className='news_popup_informations'>
                        <div className='text'>
                          <p>Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                          <p>In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.</p>
                          <p>That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='fadeInUp'>
                  <div className='list_inner'>
                    <div className='image'>
                      <a href='#'><img src={Blog_1} /></a>
                      <div className='date'>
                        <h3>23</h3>
                        <span>Dec</span>
                      </div>
                    </div>
                    <div className='details'>
                      <span class="category">
                        <a href="#">Web Development</a>
                      </span>
                      <h3 class="title">
                        <a href="#">Jim Morisson Says when the musics over turn off the light</a>
                      </h3>
                    </div>
                    <div className='news_hidden_details'>
                      <div className='news_popup_informations'>
                        <div className='text'>
                          <p>Dizme is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
                          <p>In today's digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user's first impression relates to web design. It's also why web design services can have an immense impact on your company's bottom line.</p>
                          <p>That's why more companies are not only reevaluating their website's design but also partnering with Kura, the web design agency that's driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className='brush_10 zoomIn'>
            <img src={Brush_10} />
          </div>
          <div className='brush_11 zoomIn'>
            <img src={Brush_11} />
          </div>
        </div>
      </div>
    )
  }
}

export default News
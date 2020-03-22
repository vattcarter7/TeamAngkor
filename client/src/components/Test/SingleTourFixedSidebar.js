import React, { Fragment } from 'react'
import LogoSticky from './LogoSticky'
import ThumbCart1 from './ThumbCart1'
import ThumbCart2 from './ThumbCart2'

const SingleTourFixedSidebar = () => {
  return (
    <Fragment>
      <div className="layer"></div>

      <header>
        <div id="top_line">
                <div className="container">
                    <div className="row">
                        <div className="col-6"><i className="icon-phone"></i><strong>0045 043204434</strong></div>
                        <div className="col-6">
                            <ul id="top_links">
                                <li><a href="#sign-in-dialog" id="access_link">Sign in</a></li>
                                <li><a href="wishlist.html" id="wishlist_link">Wishlist</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        <div className="container">
          <div className="row">
            <div className="col-3">
              <div id="logo">
                <a href="index.html"></a>
                <a href="index.html"><LogoSticky /></a>
              </div>
            </div>
            <nav className="col-9">
                        <a className="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="#!"><span>Menu mobile</span></a>
                        <div className="main-menu">
                            <div id="header_menu">
                                <LogoSticky />
                            </div>
                            <a href="#" className="open_close" id="close_in"><i className="icon_set_1_icon-77"></i></a>
                            <ul>
                                <li className="submenu">
                                    <a href="#!" className="show-submenu">Home <i className="icon-down-open-mini"></i></a>
                                    <ul>
                                        <li><a href="index.html">Owl Carousel Slider</a></li>
                                        <li><a href="index_22.html">Home items with Carousel</a></li>
                                        <li><a href="index_23.html">Home with Search V2</a></li>
                                        <li className="third-level"><a href="#!">Revolution slider</a>
                                            <ul>
                                                <li><a href="index_24.html">Default slider</a></li>
                                                <li><a href="index_20.html">Basic slider</a></li>
                                                <li><a href="index_14.html">Youtube Hero</a></li>
                                                <li><a href="index_15.html">Vimeo Hero</a></li>
                                                <li><a href="index_17.html">Youtube 4K</a></li>
                                                <li><a href="index_16.html">Carousel</a></li>
                                                <li><a href="index_19.html">Mailchimp Newsletter</a></li>
                                                <li><a href="index_18.html">Fixed Caption</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="index_12.html">Layer slider</a></li>
                                        <li><a href="index_2.html">With Only tours</a></li>
                                        <li><a href="index_3.html">Single image</a></li>
                                        <li><a href="index_4.html">Header video</a></li>
                                        <li><a href="index_7.html">With search panel</a></li>
                                        <li><a href="index_13.html">With tabs</a></li>
                                        <li><a href="index_5.html">With map</a></li>
                                        <li><a href="index_6.html">With search bar</a></li>
                                        <li><a href="index_8.html">Search bar + Video</a></li>
                                        <li><a href="index_9.html">With Text Rotator</a></li>
                                        <li><a href="index_10.html">With Cookie Bar (EU law)</a></li>
                                        <li><a href="index_11.html">Popup Advertising</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#!" className="show-submenu">Tours <i className="icon-down-open-mini"></i></a>
                                    <ul>
                                        <li><a href="all_tours_list.html">All tours list</a></li>
                                        <li><a href="all_tours_grid.html">All tours grid</a></li>
                                        <li><a href="all_tours_grid_masonry.html">All tours Sort Masonry</a></li>
                                        <li><a href="all_tours_map_listing.html">All tours map listing</a></li>
                                        <li><a href="single_tour.html">Single tour page</a></li>
                                        <li><a href="single_tour_with_gallery.html">Single tour with gallery</a></li>
                                        <li className="third-level"><a href="#!">Single tour fixed sidebar</a>
                                            <ul>
                                                <li><a href="single_tour_fixed_sidebar.html">Single tour fixed sidebar</a></li>
                                                <li><a href="single_tour_with_gallery_fixed_sidebar.html">Single tour 2 Fixed Sidebar</a></li>
                                                <li><a href="cart_fixed_sidebar.html">Cart Fixed Sidebar</a></li>
                                                <li><a href="payment_fixed_sidebar.html">Payment Fixed Sidebar</a></li>
                                                <li><a href="confirmation_fixed_sidebar.html">Confirmation Fixed Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="single_tour_working_booking.php">Single tour working booking</a></li>
                                        <li><a href="single_tour_datepicker_v2.html">Date and time picker V2</a></li>
                                        <li><a href="cart.html">Single tour cart</a></li>
                                        <li><a href="payment.html">Single tour booking</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#!" className="show-submenu">Hotels <i className="icon-down-open-mini"></i></a><ul>
                                        <li><a href="all_hotels_list.html">All hotels list</a></li>
                                        <li><a href="all_hotels_grid.html">All hotels grid</a></li>
                                        <li><a href="all_hotels_grid_masonry.html">All hotels Sort Masonry</a></li>
                                        <li><a href="all_hotels_map_listing.html">All hotels map listing</a></li>
                                        <li><a href="single_hotel.html">Single hotel page</a></li>
                                        <li><a href="single_hotel_datepicker_adv.html">Single hotel datepicker adv</a></li>
                                        <li><a href="single_hotel_datepicker_v2.html">Date and time picker V2</a></li>
                                        <li><a href="single_hotel_working_booking.php">Single hotel working booking</a></li>
                                        <li><a href="single_hotel_contact.php">Single hotel contact working</a></li>
                                        <li><a href="cart_hotel.html">Cart hotel</a></li>
                                        <li><a href="payment_hotel.html">Booking hotel</a></li>
                                        <li><a href="confirmation_hotel.html">Confirmation hotel</a></li>
                                    </ul>
                                </li>
                                <li className="submenu">
                                    <a href="#!" className="show-submenu">Transfers <i className="icon-down-open-mini"></i></a>
                                    <ul>
                                        <li><a href="all_transfer_list.html">All transfers list</a></li>
                                        <li><a href="all_transfer_grid.html">All transfers grid</a></li>
                                        <li><a href="all_transfer_grid_masonry.html">All transfers Sort Masonry</a></li>
                                        <li><a href="single_transfer.html">Single transfer page</a></li>
                                        <li><a href="single_transfer_datepicker_v2.html">Date and time picker V2</a></li>
                                        <li><a href="cart_transfer.html">Cart transfers</a></li>
                                        <li><a href="payment_transfer.html">Booking transfers</a></li>
                                        <li><a href="confirmation_transfer.html">Confirmation transfers</a></li>
                                    </ul>
                                </li>
                                  <li className="submenu">
                                    <a href="#!" className="show-submenu">Restaurants <i className="icon-down-open-mini"></i></a>
                                    <ul>
                                        <li><a href="all_restaurants_list.html">All restaurants list</a></li>
                                        <li><a href="all_restaurants_grid.html">All restaurants grid</a></li>
                                        <li><a href="all_restaurants_grid_masonry.html">All restaurants Sort Masonry</a></li>
                                        <li><a href="all_restaurants_map_listing.html">All restaurants map listing</a></li>
                                        <li><a href="single_restaurant.html">Single restaurant page</a></li>
                                        <li><a href="single_restaurant_datepicker_v2.html">Date and time picker V2</a></li>
                                        <li><a href="payment_restaurant.html">Booking restaurant</a></li>
                                        <li><a href="confirmation_restaurant.html">Confirmation transfers</a></li>
                                    </ul>
                                </li>
                                <li className="megamenu submenu">
                                    <a href="#!" className="show-submenu-mega">Bonus<i className="icon-down-open-mini"></i></a>
                                    <div className="menu-wrapper">
                                      <div className="row">
                                            <div className="col-lg-4">
                                                <h3>Header styles</h3>
                                                <ul>
                                                    <li><a href="index.html">Default transparent</a></li>
                                                    <li><a href="header_2.html">Plain color</a></li>
                                                    <li><a href="header_3.html">Plain color on scroll</a></li>
                                                    <li><a href="header_4.html">With socials on top</a></li>
                                                    <li><a href="header_5.html">With language selection</a></li>
                                                    <li><a href="header_6.html">With lang and conversion</a></li>
                                                    <li><a href="header_7.html">With full horizontal menu</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4">
                                                <h3>Footer styles</h3>
                                                <ul>
                                                    <li><a href="index.html">Footer default</a></li>
                                                    <li><a href="footer_2.html">Footer style 2</a></li>
                                                    <li><a href="footer_3.html">Footer style 3</a></li>
                                                    <li><a href="footer_4.html">Footer style 4</a></li>
                                                    <li><a href="footer_5.html">Footer style 5</a></li>
                                                    <li><a href="footer_6.html">Footer style 6</a></li>
                                                    <li><a href="footer_7.html">Footer style 7</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-4">
                                                <h3>Shop section</h3>
                                                <ul>
                                                    <li><a href="shop.html">Shop</a></li>
                                                    <li><a href="shop-single.html">Shop single</a></li>
                                                    <li><a href="shopping-cart.html">Shop cart</a></li>
                                                    <li><a href="checkout.html">Shop Checkout</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="megamenu submenu">
                                    <a href="#!" className="show-submenu-mega">Pages<i className="icon-down-open-mini"></i></a>
                                    <div className="menu-wrapper">
                                      <div className="row">
                        <div className="col-lg-4">
                          <h3>Pages</h3>
                          <ul>
                            <li><a href="about.html">About us</a></li>
                            <li><a href="general_page.html">General page</a></li>
                            <li><a href="tourist_guide.html">Tourist guide</a></li>
                            <li><a href="wishlist.html">Wishlist page</a></li>
                            <li><a href="faq.html">Faq</a></li>
                            <li><a href="faq_2.html">Faq smooth scroll</a></li>
                            <li><a href="pricing_tables.html">Pricing tables</a></li>
                            <li><a href="gallery_3_columns.html">Gallery 3 columns</a></li>
                            <li><a href="gallery_4_columns.html">Gallery 4 columns</a></li>
                            <li><a href="grid_gallery_1.html">Grid gallery</a></li>
                            <li><a href="grid_gallery_2.html">Grid gallery with filters</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <h3>Pages</h3>
                          <ul>
                            <li><a href="contact_us_1.html">Contact us 1</a></li>
                            <li><a href="contact_us_2.html">Contact us 2</a></li>
                            <li><a href="blog_right_sidebar.html">Blog</a></li>
                            <li><a href="blog.html">Blog left sidebar</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="invoice.html" target="_blank">Invoice</a></li>
                            <li><a href="404.html">404 Error page</a></li>
                            <li><a href="site_launch/index.html">Site launch / Coming soon</a></li>
                            <li><a href="timeline.html">Tour timeline</a></li>
                            <li><a href="page_with_map.html"><i className="icon-map"></i>  Full screen map</a></li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <h3>Elements</h3>
                          <ul>
                            <li><a href="footer_2.html"><i className="icon-columns"></i> Footer with working newsletter</a></li>
                            <li><a href="footer_5.html"><i className="icon-columns"></i> Footer with Twitter feed</a></li>
                            <li><a href="icon_pack_1.html"><i className="icon-inbox-alt"></i> Icon pack 1 (1900)</a></li>
                            <li><a href="icon_pack_2.html"><i className="icon-inbox-alt"></i> Icon pack 2 (100)</a></li>
                            <li><a href="icon_pack_3.html"><i className="icon-inbox-alt"></i> Icon pack 3 (30)</a></li>
                            <li><a href="icon_pack_4.html"><i className="icon-inbox-alt"></i> Icon pack 4 (200)</a></li>
                            <li><a href="icon_pack_5.html"><i className="icon-inbox-alt"></i> Icon pack 5 (360)</a></li>
                            <li><a href="shortcodes.html"><i className="icon-tools"></i> Shortcodes</a></li>
                            <li><a href="newsletter_template/newsletter.html" target="blank"><i className=" icon-mail"></i> Responsive email template</a></li>
                            <li><a href="admin.html"><i className="icon-cog-1"></i>  Admin area</a></li>
                          </ul>
                        </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul id="top_tools">
                            <li>
                                <a href="#!" className="search-overlay-menu-btn"><i className="icon_search"></i></a>
                            </li>
                            <li>
                                <div className="dropdown dropdown-cart">
                                    <a href="#" data-toggle="dropdown" className="cart_bt"><i className="icon_bag_alt"></i><strong>3</strong></a>
                                    <ul className="dropdown-menu" id="cart_items">
                                        <li>
                                            <div className="image"><ThumbCart1 /></div>
                                            <strong><a href="#">Louvre museum</a>1x $36.00 </strong>
                                            <a href="#" className="action"><i className="icon-trash"></i></a>
                                        </li>
                                        <li>
                                            <div className="image"><ThumbCart2 /></div>
                                            <strong><a href="#">Versailles tour</a>2x $36.00 </strong>
                                            <a href="#" className="action"><i className="icon-trash"></i></a>
                                        </li>
                                        <li>
                                            <div className="image"><ThumbCart2 /></div>
                                            <strong><a href="#">Versailles tour</a>1x $36.00 </strong>
                                            <a href="#" className="action"><i className="icon-trash"></i></a>
                                        </li>
                                        <li>
                                            <div>Total: <span>$120.00</span></div>
                                            <a href="cart.html" className="button_drop">Go to cart</a>
                                            <a href="payment.html" className="button_drop outline">Check out</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
          </div>
        </div>
      </header>

      <section className="parallax-window" data-parallax="scroll" data-image-src="img/single_tour_bg_1.jpg" data-natural-width="1400" data-natural-height="470">
        <div className="parallax-content-2">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h1>Arc de Triomphe</h1>
                <span>Champ de Mars, 5 Avenue Anatole, 75007 Paris.</span>
                <span className="rating"><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><small>(75)</small></span>
              </div>
              <div className="col-md-4">
                <div id="price_single_main">
                  from/per person <span><sup>$</sup>52</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main>
        <div id="position">
          <div className="container">
            <ul>
              <li><a href="#">Home</a>
              </li>
              <li><a href="#">Category</a>
              </li>
              <li>Page active</li>
            </ul>
          </div>
        </div>

        <div className="collapse" id="collapseMap">
          <div id="map" className="map"></div>
        </div>

        <div className="container margin_60">
          <div className="row">
            <div className="col-lg-8" id="single_tour_desc">

              <div id="single_tour_feat">
                <ul>
                  <li><i className="icon_set_1_icon-4"></i>Museum</li>
                  <li><i className="icon_set_1_icon-83"></i>3 Hours</li>
                  <li><i className="icon_set_1_icon-13"></i>Accessibiliy</li>
                  <li><i className="icon_set_1_icon-82"></i>144 Likes</li>
                  <li><i className="icon_set_1_icon-22"></i>Pet allowed</li>
                  <li><i className="icon_set_1_icon-97"></i>Audio guide</li>
                  <li><i className="icon_set_1_icon-29"></i>Tour guide</li>
                </ul>
              </div>

              <p className="d-none d-md-block d-block d-lg-none"><a className="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a></p>

              <div className="row">
                <div className="col-lg-3">
                  <h3>Description</h3>
                </div>
                <div className="col-lg-9">
                  <h4>Paris in love</h4>
                  <p>
                    Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi. Eu ponderum mediocrem has, vitae adolescens in pro. Mea liber ridens inermis ei, mei legendos vulputate an, labitur tibique te qui.
                  </p>
                  <h4>What's include</h4>
                  <p>
                    Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list_ok">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>No scripta electram necessitatibus sit</li>
                        <li>Quidam percipitur instructior an eum</li>
                        <li>Ut est saepe munere ceteros</li>
                        <li>No scripta electram necessitatibus sit</li>
                        <li>Quidam percipitur instructior an eum</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list_ok">
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>No scripta electram necessitatibus sit</li>
                        <li>Quidam percipitur instructior an eum</li>
                        <li>No scripta electram necessitatibus sit</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-lg-3">
                  <h3>Schedule</h3>
                </div>
                <div className="col-lg-9">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th colSpan="2">
                            1st March to 31st October
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Monday
                          </td>
                          <td>
                            10.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Tuesday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Wednesday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Thursday
                          </td>
                          <td>
                            <span className="label label-danger">Closed</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Friday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Saturday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Sunday
                          </td>
                          <td>
                            10.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong><em>Last Admission</em></strong>
                          </td>
                          <td>
                            <strong>17.00</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th colSpan="2">
                            1st November to 28th February
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            Monday
                          </td>
                          <td>
                            10.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Tuesday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Wednesday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Thursday
                          </td>
                          <td>
                            <span className="label label-danger">Closed</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Friday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Saturday
                          </td>
                          <td>
                            09.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            Sunday
                          </td>
                          <td>
                            10.00 - 17.30
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong><em>Last Admission</em></strong>
                          </td>
                          <td>
                            <strong>17.00</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <hr />

              <div className="row">
                <div className="col-lg-3">
                  <h3>Reviews </h3>
                  <a href="#" className="btn_1 add_bottom_30" data-toggle="modal" data-target="#myReview">Leave a review</a>
                </div>
                <div className="col-lg-9">
                  <div id="general_rating">11 Reviews
                    <div className="rating">
                      <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><i className="icon-smile"></i>
                    </div>
                  </div>

                  <div className="row" id="rating_summary">
                    <div className="col-md-6">
                      <ul>
                        <li>Position
                          <div className="rating">
                            <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><i className="icon-smile"></i>
                          </div>
                        </li>
                        <li>Tourist guide
                          <div className="rating">
                            <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>Price
                          <div className="rating">
                            <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><i className="icon-smile"></i>
                          </div>
                        </li>
                        <li>Quality
                          <div className="rating">
                            <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="review_strip_single">
                    <img src='/testsingle/img/avatar1.jpg' alt="Image" className="rounded-circle" />
                    <small> - 10 March 2015 -</small>
                    <h4>Jhon Doe</h4>
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    </p>
                    <div className="rating">
                      <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><i className="icon-smile"></i>
                    </div>
                  </div>

                  <div className="review_strip_single">
                    <img src={'../../img/avatar3.jpg'} alt="Image" className="rounded-circle" />
                    <small> - 10 March 2015 -</small>
                    <h4>Jhon Doe</h4>
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    </p>
                    <div className="rating">
                      <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><i className="icon-smile"></i>
                    </div>
                  </div>


                  <div className="review_strip_single last">
                    <img src={'../../img/avatar2.jpg'} alt="Image" className="rounded-circle" />
                    <small> - 10 March 2015 -</small>
                    <h4>Jhon Doe</h4>
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                    </p>
                    <div className="rating">
                      <i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile voted"></i><i className="icon-smile"></i><i className="icon-smile"></i>
                    </div>
                  </div>
      
                </div>
              </div>
            </div>

            <aside className="col-lg-4" id="sidebar" style={{zIndex:999}}>
              <div className="theiaStickySidebar sticky-top">
                <div className="box_style_1 expose" id="booking_box">
                  <h3 className="inner">- Booking -</h3>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label><i className="icon-calendar-7"></i> Select a date</label>
                        <input className="date-pick form-control" data-date-format="M d, D" type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label><i className=" icon-clock"></i> Time</label>
                        <input readOnly className="time-pick form-control" value="12:00 AM" type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label>Adults</label>
                        <div className="numbers-row">
                          <input readOnly type="text" value="1" id="adults" className="qty2 form-control" name="quantity" />
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label>Children</label>
                        <div className="numbers-row">
                          <input readOnly type="text" value="0" id="children" className="qty2 form-control" name="quantity" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <table className="table table_summary">
                    <tbody>
                      <tr>
                        <td>
                          Adults
                        </td>
                        <td className="text-right">
                          2
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Children
                        </td>
                        <td className="text-right">
                          0
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Total amount
                        </td>
                        <td className="text-right">
                          3x $52
                        </td>
                      </tr>
                      <tr className="total">
                        <td>
                          Total cost
                        </td>
                        <td className="text-right">
                          $154
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a className="btn_full" href="cart_fixed_sidebar.html">Book now</a>
                  <a className="btn_full_outline" href="#"><i className=" icon-heart"></i> Add to whislist</a>
                </div>

              </div>

            </aside>
          </div>

        </div>

            
            <div id="overlay"></div>

        
      </main>

      <footer className="revealed">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Need help?</h3>
                        <a href="tel://004542344599" id="phone">+45 423 445 99</a>
                        <a href="mailto:help@citytours.com" id="email_footer">help@citytours.com</a>
                    </div>
                    <div className="col-md-3">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Login</a></li>
                            <li><a href="#">Register</a></li>
                            <li><a href="#">Terms and condition</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Discover</h3>
                        <ul>
                            <li><a href="#">Community blog</a></li>
                            <li><a href="#">Tour guide</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Gallery</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h3>Settings</h3>
                        <div className="styled-select">
                            <select name="lang" id="lang">
                                <option value="English" defaultValue>English</option>
                                <option value="French">French</option>
                                <option value="Spanish">Spanish</option>
                                <option value="Russian">Russian</option>
                            </select>
                        </div>
                        <div className="styled-select">
                            <select name="currency" id="currency">
                                <option value="USD" defaultValue>USD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                                <option value="RUB">RUB</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="social_footer">
                            <ul>
                                <li><a href="#"><i className="icon-facebook"></i></a></li>
                                <li><a href="#"><i className="icon-twitter"></i></a></li>
                                <li><a href="#"><i className="icon-google"></i></a></li>
                                <li><a href="#"><i className="icon-instagram"></i></a></li>
                                <li><a href="#"><i className="icon-pinterest"></i></a></li>
                                <li><a href="#"><i className="icon-vimeo"></i></a></li>
                                <li><a href="#"><i className="icon-youtube-play"></i></a></li>
                            </ul>
                            <p>© Citytours 2018</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

      <div id="toTop"></div>
      

      <div className="search-overlay-menu">
        <span className="search-overlay-close"><i className="icon_set_1_icon-77"></i></span>
        <form role="search" id="searchform" method="get">
          <input readOnly value="" name="q" type="search" placeholder="Search..." />
          <button type="submit"><i className="icon_set_1_icon-78"></i>
          </button>
        </form>
      </div>
      
      <div id="sign-in-dialog" className="zoom-anim-dialog mfp-hide">
        <div className="small-dialog-header">
          <h3>Sign In</h3>
        </div>
        <form>
          <div className="sign-in-wrapper">
            <a href="#0" className="social_bt facebook">Login with Facebook</a>
            <a href="#0" className="social_bt google">Login with Google</a>
            <div className="divider"><span>Or</span></div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" name="email" id="email" />
              <i className="icon_mail_alt"></i>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" id="password" value="" />
              <i className="icon_lock_alt"></i>
            </div>
            <div className="clearfix add_bottom_15">
              <div className="checkboxes float-left">
                <input id="remember-me" type="checkbox" name="check" />
                <label htmlFor="remember-me">Remember Me</label>
              </div>
              <div className="float-right"><a id="forgot" href="#!">Forgot Password?</a></div>
            </div>
            <div className="text-center"><input type="submit" value="Log In" className="btn_login" /></div>
            <div className="text-center">
              Don’t have an account? <a href="#!">Sign up</a>
            </div>
            <div id="forgot_pw">
              <div className="form-group">
                <label>Please confirm login email below</label>
                <input type="email" className="form-control" name="email_forgot" id="email_forgot" />
                <i className="icon_mail_alt"></i>
              </div>
              <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
              <div className="text-center"><input type="submit" value="Reset Password" className="btn_1" /></div>
            </div>
          </div>
        </form>
      </div>

      <div className="modal fade" id="myReview" tabIndex="-1" role="dialog" aria-labelledby="myReviewLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myReviewLabel">Write your review</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div className="modal-body">
              <div id="message-review">
              </div>
              <form method="post" action="assets/review_tour.php" name="review_tour" id="review_tour">
                <input name="tour_name" id="tour_name" type="hidden" value="Paris Arch de Triomphe Tour" />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input name="name_review" id="name_review" type="text" placeholder="Your name" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input name="lastname_review" id="lastname_review" type="text" placeholder="Your last name" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input name="email_review" id="email_review" type="email" placeholder="Your email" className="form-control" />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Position</label>
                      <select className="form-control" name="position_review" id="position_review">
                        <option value="">Please review</option>
                        <option value="Low">Low</option>
                        <option value="Sufficient">Sufficient</option>
                        <option value="Good">Good</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Superb">Super</option>
                        <option value="Not rated">I don't know</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Tourist guide</label>
                      <select className="form-control" name="guide_review" id="guide_review">
                        <option value="">Please review</option>
                        <option value="Low">Low</option>
                        <option value="Sufficient">Sufficient</option>
                        <option value="Good">Good</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Superb">Super</option>
                        <option value="Not rated">I don't know</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Price</label>
                      <select className="form-control" name="price_review" id="price_review">
                        <option value="">Please review</option>
                        <option value="Low">Low</option>
                        <option value="Sufficient">Sufficient</option>
                        <option value="Good">Good</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Superb">Super</option>
                        <option value="Not rated">I don't know</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Quality</label>
                      <select className="form-control" name="quality_review" id="quality_review">
                        <option value="">Please review</option>
                        <option value="Low">Low</option>
                        <option value="Sufficient">Sufficient</option>
                        <option value="Good">Good</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Superb">Super</option>
                        <option value="Not rated">I don't know</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="review_text" id="review_text" className="form-control" style={{height : 100}} placeholder="Write your review"></textarea>
                </div>
                <div className="form-group">
                  <input type="text" id="verify_review" className=" form-control" placeholder="Are you human? 3 + 1 =" />
                </div>
                <input type="submit" value="Submit" className="btn_1" id="submit-review" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SingleTourFixedSidebar;

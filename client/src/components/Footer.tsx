import { Link } from '@mui/material'
import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        // <div className='foot'>
        //     <div className='footer'>
        //         <div>
        //             <ul>
        //                 <Link href="">Home</Link>
        //                 <br />
        //                 <Link href="">About</Link>
        //                 <br />

        //                 <Link href="">Contact</Link>
        //             </ul>
        //         </div>
        //         <div>
        //             <Link href="">Privicy and condition </Link>

        //         </div>
        //         <div>
        //             <img src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png" alt="face" width="30" height="30" />
        //             <img src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Twitter-icon.png" alt="tw" width="30" height="30" />
        //             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="inst" width="30" height="30" />
        //         </div>
        //     </div>
        //     <div className="copy">
        //         <img src="https://banner2.cleanpng.com/20180711/qhw/kisspng-copyright-symbol-copyright-law-of-the-united-state-restricted-area-5b464bffa864e9.1239722115313336316898.jpg" alt="" width="20" height="20" />
        //         <p>Powred by roomy</p>

        //     </div>
        // </div>

        <div>
            <section className="footer-section">
                <div className="container">
                    {/* <div className="row footer-section-row">
                        <div className="col-md-4">
                            <div className="address">
                                <div className="left-icon">
                                    <img src="location.png" />
                                </div>
                                <div className="right-text">
                                    <h3>Address</h3>
                                    <p>Shree Ramakrishna Ashrama</p>
                                    <p>Madanpur-Rampur, Kalahandi, Odisha -766102</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="address">
                                <div className="left-icon">
                                    <img src="mail.png" />
                                </div>
                                <div className="right-text">
                                    <h3>Mail Id</h3>
                                    <p>srka_mrampur@yahoo.co.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="address">
                                <div className="left-icon">
                                    <img src="call.png" />
                                </div>
                                <div className="right-text">
                                    <h3>Phone</h3>
                                    <p>+91 9437040140, </p>
                                    <p>+91 7873708010</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-md-3">
                            <h3 className="footer-title"><span className="footer-title-text">Quick Link</span><span className="footer-title-underline"></span></h3>
                            <ul className="quick-link-list">
                                <li><a href="#"> Home</a></li>
                                <li><a href="#">  About</a></li>
                                <li><a href="#">  Contact</a></li>

                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3 className="footer-title title-transparent">Quick Link</h3>
                            <ul className="quick-link-list">
                                <li><a href="#"> Privicy and condition</a></li>

                            </ul>
                        </div>

                        <div className="col-md-3">
                            <h3 className="footer-title"><span className="footer-title-text">Get Updates</span><span className="footer-title-underline"></span></h3>
                            <p className="newsletter">Signup to Our Newsletter.</p>
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-new" id="usr" name="username" placeholder="Enter Your Mail Id" />
                                </div>
                                <button type="submit" className="btn btn-primary subscribe">Subscribe</button>
                            </form>

                        </div>
                        <div className='icon'>
                            <img src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png" alt="face" width="40" height="40" />
                            <img src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Twitter-icon.png" alt="tw" width="40" height="40" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="inst" width="40" height="40" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-section-bottom">
                <div className="container">

                    <div className="footer-bottom-left">
                        <p >© Powred By Roomy </p>
                    </div>


                </div>
            </section>
        </div>

    )
}

export default Footer
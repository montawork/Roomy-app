import { Link } from '@mui/material'
import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className='foot'>
            <div className='footer'>
                <div>
                    <ul>
                        <Link href="">Home</Link>
                        <br />
                        <Link href="">About</Link>
                        <br />

                        <Link href="">Contact</Link>
                    </ul>
                </div>
                <div>
                    <Link href="">Privicy and condition </Link>

                </div>
                <div>
                    <img src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19757.png" alt="face" width="30" height="30" />
                    <img src="https://icons.iconarchive.com/icons/limav/flat-gradient-social/512/Twitter-icon.png" alt="tw" width="30" height="30" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" alt="inst" width="30" height="30" />
                </div>
            </div>
            <div className="copy">
                <img src="https://banner2.cleanpng.com/20180711/qhw/kisspng-copyright-symbol-copyright-law-of-the-united-state-restricted-area-5b464bffa864e9.1239722115313336316898.jpg" alt="" width="20" height="20" />
                <p>Powred by roomy</p>

            </div>
        </div>

    )
}

export default Footer
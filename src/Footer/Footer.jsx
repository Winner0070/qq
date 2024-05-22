import {React} from 'react';
import './Footer.css';
import logo from '../imgg/logo-white.svg';

const Footer = () => {
    const toTop = () => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      }
      // If back to element (use Ref)
      const toElemnt = (id) => {
        const element =
          document.getElementById(id) + window.scrollY
    
        window.scroll({
          top: element,
          behavior: "smooth"
        })
      }
    return (
    <div className='Footer'>
        <div className="footer_coner">
            <div className="footer_coner_info">
                <img src={logo} alt="logoer" />
            </div>
            <div className="links_footer">
            <div className="footer_menu">
                <h1><a onClick={() => {
                    const element = document.getElementById('about');
                    element?.scrollIntoView({
                      behavior: 'smooth'
                    })
                }}
                >Компания</a></h1>
            </div>
            <div className="footer_1">
                <h1><a onClick={() => {
                    const element = document.getElementById('uslugi');
                    element?.scrollIntoView({
                      behavior: 'smooth'
                    })
                }}
                >Услуги</a></h1>
            </div>
            <div className="footer_2">
            <h1><a onClick={() => {
                const element = document.getElementById('company');
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
            }}
            >Продукты</a></h1>
            </div>
            <div className="footer_info_end">
                <li id='li1'>355035, г. Ставрополь, ул. Суворова, д. 7</li>
                <li id='li2'>+7 (499) 700-0045</li>
                <li id='li3'>info@infocom-s.ru</li>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Footer
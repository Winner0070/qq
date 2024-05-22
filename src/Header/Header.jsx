import {React} from 'react';
import './Header.css';
import logo from '../imgg/logo-white.svg';

const Header = () => {
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
    <div className='navbar'>
        <div className="navbar_conter">
            <div className="novbar_logo">
                <img src={logo} alt="logo-white" />
                <h1 className='font_M'>info</h1>
            </div>
            <div className="novbar_menu">
                <h1><a onClick={() => {
                    const element = document.getElementById('about');
                    element?.scrollIntoView({
                      behavior: 'smooth'
                    })
                }}
                >Компания</a></h1>
            </div>
            <div className="novbar_1">
                <h1><a onClick={() => {
                    const element = document.getElementById('uslugi');
                    element?.scrollIntoView({
                      behavior: 'smooth'
                    })
                }}
                >Услуги</a></h1>
            </div>
            <div className="novbar_2">
            <h1><a onClick={() => {
                const element = document.getElementById('company');
                element?.scrollIntoView({
                  behavior: 'smooth'
                })
            }}
            >Продукты</a></h1>
            </div>
        </div>
    </div>
    )
}

export default Header
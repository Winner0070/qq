import './Link.css';
import logo2 from '../imgg/kdcsup.jpg';
import tokio from '../imgg/Tokyo-City-Skyscrapers.png';
import gorila from '../imgg/gorila.jpg';

const Link = () => {
    return (
    <div id='about' className='about'>
        <img id='gorila' src={gorila} alt="gorila" />
        <div className='tokio'>
            <img src={tokio} alt="tokioerror" />
        </div>
        <div className="glava1">
            <h1 className='glava1_form'>Компания</h1>
            <img src={logo2} alt="logo2" />
        </div>
        <div className="about_conter">
            <div className="about_conter_text">
                <p>Компания "Инфоком-С" специализируется в предоставлении полного спектра услуг по созданию, модернизации и поддержке ИТ-решений для бизнеса, государственных органов и образовательных учреждений. Наша компания разрабатывает инновационные ИТ-продукты и тесно сотрудничает с ведущими компаниями ИТ как внутри страны, так и за рубежом.
В коллективе "Инфоком-С" трудятся более 70 высококвалифицированных сотрудников с обширным опытом, которые постоянно совершенствуют свои знания. Каждый из нас является образцом профессионализма, предоставляя высококачественные услуги во всех областях деятельности компании.</p>
            </div>
        </div>
    </div>
    )
}

export default Link
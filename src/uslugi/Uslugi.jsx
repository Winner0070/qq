import './Uslugi.css';
import wer from '../imgg/wer.png';
import system from '../imgg/System.png';
import nauka from '../imgg/nauka.png';
import crm from '../imgg/crm.png';

const Uslugi = () => {
    return (
    <div id='uslugi' className='uslugi'>
        <div className="uslugi_conter">
            <div className="zagol">
                <h1>Услуги</h1>
            </div>
            <div className="uslugi_conter_1">
                <h1>Разработка и внедрение информационных систем</h1>
            </div>
            <div className="uslugi_text_1">
            <h3>Предпроектное обследование предприятий, анализ и моделирование бизнес-процессов, исследование стратегических и функциональных требований заказчика</h3>
            <img src={wer} alt="wer" />
            </div>
            <div className="uslugi_conter_2">
                <h1>Интеграционные сервисы</h1>
            </div>
            <div className="uslugi_text_2">
                <h3>Обеспечивают полную совместимость информационных систем с целью повышения эффективности от работы с ними</h3>
                <img src={system} alt="sys" />
            </div>
            <div className="uslugi_conter_3">
                <h1>Научные исследования и разработки</h1>
            </div>
            <div className="uslugi_text_3">
                <h3>Успешное конкурирование на рынках, достижение высоких финансово-экономических показателей являются результатами внедрения в продукцию и услуги высокотехнологичных и инновационных научно-технических решений</h3>
                <img src={nauka} alt="nauka" />
            </div>
            <div className="uslugi_conter_4">
                <h1>CRM-системы</h1>
            </div>
            <div className="uslugi_text_4">
                <h3>CRM-система – это специализированное программное обеспечение, предназначенное для управления отношениями с клиентом. Использование такого продукта позволит оптимизировать маркетинговую систему, значительно улучшить качество обслуживания и бизнес-процессы.</h3>
                <img src={crm} alt="crm" />
            </div>
        </div>
    </div>
    )
}

export default Uslugi
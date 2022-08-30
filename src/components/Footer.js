import { useState, useEffect } from 'react';
import Logo from "../img/stats/logo.png"

function Footer(props) {

    // const [branchs, setBranchs] = useState([]);

    // useEffect(() => {
    //     fetch("https://mproweb.uz/YTless/evacore/api/?page=home")
    //         .then(result => result.json())
    //         .then(result => setBranchs(result.res.data))
    // }, [])

    let lat = "69.3520221"
    let lon = "41.3479613"

    

    const getLink = (lat, lon) => `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11980.80829944661!2d${lat}!3d${lon}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1661857570343!5m2!1sru!2s`

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6">
                        <div className="row">
                            <div className="col-xxl-6">
                                <a href="/">
                                    <img src={Logo} alt="png" />
                                </a>
                                <p className="footer_text">Производим коврики <br /> для всех автомобилей</p>
                                <span className="footer_bottom">© 2022 «Evakor»</span>
                            </div>
                            <div className="col-xxl-6">
                                <ul>
                                    <li className="first">Меню</li>
                                    <li><a href="/">О продукции</a></li>
                                    <li><a href="/">Автоковрики</a></li>
                                    <li><a href="/">Галерея</a></li>
                                    <li><a href="/">Доставка и оплата</a></li>
                                    <li><a href="/">Статус заказа</a></li>
                                    <li><a href="/">Возврат</a></li>
                                    <li><a href="/">Акции</a></li>
                                    <li><a href="/">Контакты</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <div className="yel">
                            <div className="row">
                                <div className="col-xxl-6">
                                    <div className="dropdown">
                                        <button className="btn  dropdown-toggle dropdown__button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span>+99871 123 45 67</span>
                                            <span>Юнус-абад</span>
                                            <div className="dropdown__icon">
                                                <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.7099 1.2101C13.6169 1.11638 13.5063 1.04198 13.3845 0.991213C13.2626 0.940445 13.1319 0.914307 12.9999 0.914307C12.8679 0.914307 12.7372 0.940445 12.6153 0.991213C12.4934 1.04198 12.3828 1.11638 12.2899 1.2101L7.70988 5.7901C7.61691 5.88382 7.50631 5.95822 7.38445 6.00899C7.2626 6.05975 7.13189 6.08589 6.99988 6.08589C6.86787 6.08589 6.73716 6.05975 6.6153 6.00899C6.49344 5.95822 6.38284 5.88382 6.28988 5.7901L1.70988 1.2101C1.61691 1.11638 1.50631 1.04198 1.38445 0.991213C1.26259 0.940445 1.13189 0.914307 0.999877 0.914307C0.867865 0.914307 0.73716 0.940445 0.6153 0.991213C0.493441 1.04198 0.38284 1.11638 0.289877 1.2101C0.103626 1.39747 -0.000915527 1.65092 -0.000915527 1.9151C-0.000915527 2.17929 0.103626 2.43274 0.289877 2.6201L4.87988 7.21009C5.44238 7.77189 6.20488 8.08745 6.99988 8.08745C7.79488 8.08745 8.55738 7.77189 9.11988 7.21009L13.7099 2.6201C13.8961 2.43274 14.0007 2.17929 14.0007 1.9151C14.0007 1.65092 13.8961 1.39747 13.7099 1.2101V1.2101Z" fill="white" />
                                                </svg>
                                            </div>
                                        </button>

                                        
                                        
                                        <iframe src={getLink()} width="600" height="450" style={{border: "0"}}> </iframe>
                                        
                                    </div>
                                </div>
                                <div className="col-xxl-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
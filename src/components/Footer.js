import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/stats/logo.png"

function Footer(props) {

    const [branches, setBranches] = useState([]);

    useEffect(() => {
        fetch("https://mproweb.uz/YTless/evacore/api/?page=home")
            .then(result => result.json())
            .then(result => setBranches(result.res.data.branches))
    }, [])

    // let lat = "69.3520221"
    // let lon = "41.3479613"

    // function sammi() {
    //     let select = document.querySelector("select")
    //     branches.forEach((branch, ind) => select.insertAdjacentHTML('beforeend', `<option value="${ind}">${branch.name}</option>`))
    //     setInfo(branches[0]);
    //     select.onchange = (e) => setInfo(branches[select.value])
    // }

    // function setInfo(branch) {
    //     document.querySelector('map iframe').src = `https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d11980.80829944661!2d${branch.coords.lon}!3d${branch.coords.lat}!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1661857570343!5m2!1sru!2s`
    //     document.querySelectorAll('ul.infoBox [data-prop]').forEach(el => {
    //         el.dataset.prop == 'work_period' ? el.innerHTML = `${branch[el.dataset.prop].start} - ${branch[el.dataset.prop].finish}` : el.innerText = branch[el.dataset.prop]
    //     })
    // }

    // sammi()

    // const brn = () => {
        
    // }

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6">
                        <div className="row">
                            <div className="col-xxl-6">
                                <Link to="/">
                                    <img src={Logo} alt="png" />
                                </Link>
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
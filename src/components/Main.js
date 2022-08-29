import React from 'react';
import main_img from "../image/main_img.png"

function Main(props) {
    return (
        <main>
            <h2>Получить консультацию</h2>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6">
                        <div className="main_left">
                            <img src={main_img} alt="png" />
                        </div>
                    </div>
                    <div className="col-xxl-6">
                        <form>
                            <p className="form_title1">Оставьте заявку и мы <br/> свяжемся с вами</p>
                            <input type="text" placeholder="Ваше имя" /> <br />
                            <input type="number" placeholder="Ваш номер телефона" />
                            <p className="form_title2">Нажимая на кнопку «Отправить», вы даете <br /> <span> согласие на обработку своих <br /> персональных данных.</span></p>
                            <button>Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
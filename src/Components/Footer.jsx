import './Footer.css'
import store1 from '../assets/store1.svg'
import store2 from '../assets/store2.svg'
import store3 from '../assets/store3.svg'
import store4 from '../assets/store4.webp'
import bank1 from '../assets/bank1.svg'
import bank2 from '../assets/bank2.svg'
import bank3 from '../assets/bank3.svg'
import bank4 from '../assets/bank4.svg'
import bank5 from '../assets/bank5.svg'
import bank6 from '../assets/bank6.svg'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
function Footer() {
    return (
        <>
            <div className='ota'>
                <div className='headd'>
                    <div className='po'>
                        <div className='foot'>
                            <p>Bizning mobil ilovamiz AppGallery, App store va Google play-da</p>
                            <div className='refri'>
                                <img src={store1} />
                                <img src={store2} />
                                <img src={store3} />
                            </div>
                        </div>

                        <div className='four'>
                            <img src={store4} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className='baba'>
                    <div className='tutu'>
                                <div className='madia-err'>
                                                            <div className='column'>
                            <p>Olcha</p>
                            <p>Qo'llab-quvvatlash raqami</p>
                            <p>+998 (71) 202 202 1</p>
                            <p>Qozitarnov, Toshkent</p>
                            <p>info@olcha.uz</p>
                        </div>

                        <div className='columnn'>
                            <p>Ma`lumot</p>
                            <p>Biz haqimizda</p>
                            <p>Bosh ish orinlari</p>
                            <p>Ommaviy oferta</p>
                            <p>Tolovni qaytarish va almashtirish</p>
                            <p>Muddatli tolov</p>
                        </div>

                        <div className='columnnn'>
                            <p>Eco-friendly</p>
                            <p>Shaxsiy malumotlar bilan ishlash</p>
                            <p>Tolov va yetkazib berish</p>
                            <p>Bonus va aksiyalar</p>
                            <p>mahsullotlar olcha.uz da</p>
                            <p>sotuvchilar uchun oferta</p>
                        </div>
                                </div>

                        <div className='rrr'>
                            <div className='mmm'>
                                <img src={bank1} />
                                <img src={bank2} />
                                <img src={bank3} />
                                <img src={bank4} />
                                <img src={bank5} />
                                <img src={bank6} />
                            </div>
                        </div>
                    </div>
                    <hr className='chiziqcha' />
                    <div className='last'>
                        <div className='ttt'>
                            <p>© 2017-2025. ООО "Olcha store"</p>
                            <p>Ommaviy oferta</p>
                            <p>Maxfiylik siyosati</p>
                            <div className='iconnn'>
                                <FaFacebook size={25} color='gray'/>
                                <IoLogoInstagram size={25} color='gray'/>
                                <FaTelegramPlane size={25} color='gray'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
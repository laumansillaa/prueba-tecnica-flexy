import style from './styles/home.module.css'
import Nav from '../nav/Nav'
import Register from '../form/Register'

const Home = () => {

    return (
        <div className={style.contHome}>
            <div className={style.contLog}>
                <Nav/>
                <div className={style.contForm}>
                    <div className={style.contTxtHome}>
                        <h1 className={style.txtTitle}>¡Bienvenido!</h1>
                        <h4 className={style.txtSubtitle}>Convertite ahora en un agente Flexy.</h4>
                    </div>
                    <Register/>
                </div>
            </div>
            <div className={style.contImg}></div>
        </div>
    )
}

export default Home;
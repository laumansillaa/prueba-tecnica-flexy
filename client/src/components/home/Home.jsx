import style from './styles/home.module.css'
import Nav from '../nav/Nav'
import Register from '../form/Register'

const Home = () => {

    return (
        <div className={style.contHome}>
            <div className={style.contLog}>
                <Nav/>
                <div className={style.contForm}>
                    <h1 className={style.txtTitle}>¡Bienvenido!</h1>
                    <h4 className={style.txtSubtitle}>Convertite ahora en un agente Flexy.</h4>
                    <div className={style.contInput}>
                            <Register/>
                            <a href='/' className={style.txtForgotPassword}>¿Olvidaste tu contraseña?</a>
                        <button className={style.btn}>Registrarte</button>
                    </div>
                    <div className={style.contLogin}>
                        <h6 className={style.txtLogin}>
                            ¿Ya tenés una cuenta? <a href='/' className={style.txtSession}>Iniciá sesión</a>
                        </h6>
                    </div>
                </div>
            </div>
            <div className={style.contImg}></div>
        </div>
    )
}

export default Home;
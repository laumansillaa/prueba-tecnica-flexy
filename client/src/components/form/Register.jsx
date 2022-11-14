import {useState, useEffect} from 'react';
import {validateEmail, validatePassword, validateNumber, validateString }from '../../utils/validate.js';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import imgUploaded from '../../assets/svg/img.svg'

import style from './styles/form.module.css'

const Register = () => {

    const [errorEmail, setErrorEmail] = useState(null)
    const [errorPassword, setErrorPassword] = useState(null)
    const [errorName, setErrorName] = useState(null)
    const [errorPhone, setErrorPhone] = useState(null)
    const [showPassword, setShowPassword] = useState(null)
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    })

    useEffect(() => {validateEmail(form.email) ? setErrorEmail(false) : setErrorEmail(true)}, [form.email])
    
    useEffect(() => {validatePassword(form.password) ? setErrorPassword(false) : setErrorPassword(true)
    }, [form.password])

    useEffect(() => {validateString(form.name) ? setErrorName(false) : setErrorName(true)}, [form.name])

    useEffect(() => {validateNumber(form.phone) ? setErrorPhone(false) : setErrorPhone(true)}, [form.phone])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const toggle = () => {
        setShowPassword(!showPassword)
    }

    return (
        <form className={style.form}>
            <div className={style.contImgUploaded}>
                <img src={imgUploaded} alt='img-uploaded'/> 
                <h6 className={style.txtImgUploaded}>Subí tu foto de perfil</h6>
            </div>
            <input 
                type='text' 
                name='name' 
                placeholder='Nombre y Apellido' 
                className={style.input} 
                onChange={(e) => handleChange(e)}/>
                {errorName ? 
                    <p className={style.labelForm}>Ingrese un nombre válido</p> : <></>    
                }
            <input 
                type='text' 
                name='phone' 
                placeholder='+54 010200 0000' 
                className={style.input} 
                onChange={(e) => handleChange(e)}/>
            {
                errorPhone ? <p className={style.labelForm}>Ingrese un número válido</p> : <></>
            }
            <input type='text' 
                name='email' 
                placeholder='hola@tuemail.com' 
                className={style.input} 
                onChange={(e) => handleChange(e)}/>
            { errorEmail?
                <p className={style.labelForm}>Ingrese un email válido.</p> : <></>
            }
            <div className={style.contInputPassword}>
                <input 
                    type={(showPassword === false) ? 'password' : 'text'}
                    name='password' 
                    placeholder='Ingresá tu contraseña' 
                    className={style.input}
                    style={{width: '100%'}}
                    onChange={(e) => handleChange(e)}/>
                <div className={style.passwordCheck}>
                    {
                        (showPassword === false) ? <AiOutlineEye onClick={toggle} className={style.iconPassword}/> :
                        <AiOutlineEyeInvisible onClick={toggle} className={style.iconPassword}/>
                    }
                </div>
            </div>
                {
                    errorPassword?
                    <p className={style.labelForm}>Debe tener al menos 8 caracteres.</p> :
                    <></>                                
                }
        </form>
    )
}


export default Register;
import {useState} from 'react';
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {Avatar} from '@mui/material'
import imgUploaded from '../../assets/svg/img.svg'

import style from './styles/form.module.css'

function validando (values) {
    const errors = {}
    const reString = /^[A-Za-z ]+$/
    const reNumber = /^[+54][0-9]{11,}$/ 
    const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const rePassword = /^(?=.{8,})/

    if (!values.name) {
        errors.name = 'Ingrese un nombre'
    } else if (!reString.test(values.name)){
        errors.name = 'Ingrese un nombre valido'
    }

    if (!values.phone){
        errors.phone = 'Ingrese un teléfono'
    } else if (!reNumber.test(values.phone)){
        errors.phone = 'Ingrese un número válido'
    }

    if(!values.email){
        errors.email = 'Ingrese un email'
    } else if (!reEmail.test(values.email)){
        errors.email = 'Ingrese un email válido'
    }

    if (!values.password){
        errors.password = 'Ingrese una contraseña'
    } else if (!rePassword.test(values.password)){
        errors.password = 'Debe tener al menos 8 caracteres.'
    } 

    if (!values.image) {
        errors.image = 'Seleccione una imágen'
    }
    return errors;
}


const Register = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [formError, setFormErrors] = useState({})
    const [file, setFile] = useState(null)
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        image: ''
    })


    const handleChangeImg = (e) => {
        const urlImg = URL.createObjectURL(e.target.files[0])
        setFile(e.target.files[0])
        form.image = urlImg
    }

    const handleChange = (e) => {
        e.preventDefault()
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validando(form))
    }

    const toggle = () => {
        setShowPassword(!showPassword)
    }

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.contInputs}>
                <div className={style.contImgUploaded}>
                    <input type='file' name='image' id='upload-photo' onChange={e => handleChangeImg(e)} className={style.uploadFile}/>
                    <label  htmlFor='upload-photo' className={style.txtImgUploaded}>
                        <Avatar src={file ? form.image : imgUploaded} alt={file ? `${file.name}` : `${imgUploaded}`} sx={{ width: 47, height: 47 }} className={style.upImg}/>
                        Subí tu foto de perfil
                    </label>
                    {formError.image && <p className={style.labelForm}>{formError.image}</p>}

                </div>
                <div className={style.contInput}>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='Nombre y Apellido' 
                        className={style.input} 
                        onChange={(e) => handleChange(e)}/>
                    {formError.name && <p className={style.labelForm}>{formError.name}</p>}
                </div>
                <div className={style.contInput}>
                    <input 
                        type='text' 
                        name='phone' 
                        placeholder='+54 010200 0000' 
                        className={style.input} 
                        onChange={(e) => handleChange(e)}/>
                    {formError.phone && <p className={style.labelForm}>{formError.phone}</p>}
                </div>
                <div className={style.contInput}>
                    <input type='text' 
                        name='email' 
                        placeholder='hola@tuemail.com' 
                        className={style.input} 
                        onChange={(e) => handleChange(e)}/>
                    {formError.email && <p className={style.labelForm}>{formError.email}</p>}

                </div>
                <div className={style.pass}>
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
                    <div className={style.errorPassword}>
                            {formError.password && <p className={style.labelForm}>{formError.password}</p>}
                    </div>
                </div>
                <div className={style.contForgotPassword}>
                    <a href='/' className={style.txtForgotPassword}>¿Olvidaste tu contraseña?</a>
                </div>
            </div>
                <div className={style.contLogin}>
                    <button className={style.btn}>Registrate</button>
                    <h6 className={style.txtLogin}>
                        ¿Ya tenés una cuenta? <a href='/' className={style.txtSession}>Inicia sesión</a>
                    </h6>
                </div>
        </form>
    )
}


export default Register;
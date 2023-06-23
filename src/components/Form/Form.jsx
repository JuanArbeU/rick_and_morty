import { useState } from "react";
import style from './Form.module.css'

const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password:''
    })
    
    const [errors, setErrors] = useState({  
        email:'',
        password:''
    })
    
    const handleChange = (event) => {
        console.log(event.target.value);
        setUserData({
            ...userData, [event.target.name]: event.target.value
        })
        console.log(event.target.name);
        event.target.name === 'email'? 
        validate(event.target.value)
        :
        validate2(event.target.value)
    }

    const validate = (email) => {
        const mail = /^(?!^$)[a-zA-Z0-9._%+-]{1,35}@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,3}$/;
        if(!mail.test(email)){
            setErrors({
                ...errors,
                email:'por favor, revisa tu email'
            })
        }
        else setErrors({...errors, email: ''});
    }

    const validate2 = (password) => {
        const pass = /^(?=.*\d)[a-zA-Z0-9]{6,10}$/;
        if(!pass.test(password)){
            setErrors({
                ...errors,
                password:'por favor, revisa tu password'
            })
        }
        else setErrors({...errors, password: ''});
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return(
        <div className={style.container}> 
            <form onSubmit={handleSubmit}>
                    <div className={style.container}>
                        <label htmlFor="email">Email: </label>
                        <input name='email' type="email" placeholder="Ingrese su email" value={userData.email} onChange={handleChange}/>
                        {errors.email && <p className={style.error}>{errors.email}</p>}
                    </div>
                <br />
                    <div className={style.container}>
                        <label htmlFor="password" >Password: </label>
                        <input name='password' type="text" placeholder="Ingrese su contraseña" value={userData.password} onChange={handleChange}/>
                        {errors.password && <p className={style.error}>{errors.password}</p>}
                    </div>
                <br />
                    <div>
                        <button disabled={!userData.email || !userData.password || errors.email || errors.password} onClick={handleSubmit}>Submit</button>
                    </div>
            </form>
        </div>
    )
}

export default Form;
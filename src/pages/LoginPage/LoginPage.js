import React, {useState} from 'react';
import logo from './../../Logo_mykifa.svg'
import s from './LoginPage.module.css'
import PreviewBlock from "../../components/PreviewBlock/PreviewBlock";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";


const LoginPage = () => {
    //only for demonstration
    const error = useState(true)


    return (
        <div className={s.mainContainer}>
            <img src={logo} alt={'logo'}/>
            <PreviewBlock/>
            <div className={s.acountContainer}>
                <div className={s.loginBlock}>
                    <h6>Log In</h6>
                    <form>
                        <CustomInput type={'email'} placeholder={'Email'}/>
                        <CustomInput type={'password'} placeholder={'Password'}/>
                        <CustomButton title={'Sign In'} background={'#007AFF'} color={'#ffffff'}/>
                        <a href={'./'}>Forgot password?</a>
                        <p className={s.error}>Need a valid email and a valid password and agree to our terms and
                            conditions</p>
                    </form>

                </div>
                <div className={s.createBlock}>
                    <h6>Create an Account</h6>
                    <form>
                        <CustomInput type={'email'} placeholder={'Email'}/>
                        <CustomInput type={'password'} placeholder={'Password'}/>
                        <label>
                            <input type={'checkbox'}/> Click to agreed to our <a href={'./'}>terms and conditions</a> to
                            sign up
                        </label>
                        <CustomButton title={'Sign Up'}  background={'#ffffff'} color={'#007AFF'}/>
                        <p className={s.error}>Need a valid email and a valid password and agree to our terms and
                            conditions</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
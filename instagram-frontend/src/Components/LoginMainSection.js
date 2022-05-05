import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import instagramCell from '../Assets/imgs/login-cell.png'
import logoInstagram from '../Assets/imgs/instagram-logo.jpg'
import InputSantard from './InputSantard'
import axiosAPI from '../Services/axios-api';
import SalveUserLogin from '../Utils/Login';


export default function LoginMainSection() {
    const [loading, Setloading] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()

    async function loginHandler(e) {
        e.preventDefault()
        Setloading(true)
        try {
            const response = await axiosAPI.post('login', {
                username,
                password
            })
            console.log(response)
            
            SalveUserLogin(response.data)

            history('/feed')
        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <main>
            <div className='form-login-register'>
                <img src={instagramCell} alt='Logo do instagram' />
                <form>
                    <img src={logoInstagram}></img>
                    {loading ?
                        <h1>Conectando com o servidor</h1>
                        :
                        <>
                            <div className='content'>
                                <InputSantard
                                    title='Usuario'
                                    type='text'
                                    placeholder='Usuario'
                                    state={username}
                                    setState={e => setUsername(e.target.value)}

                                />
                                <InputSantard
                                    title='Senha'
                                    type='password'
                                    placeholder='Senha'
                                    state={password}
                                    setState={e => setPassword(e.target.value)}
                                />
                            </div>
                            <button type='submit' onClick={loginHandler} >Conectar</button>
                        </>
                    }
                </form>
            </div>
        </main>
    )
}

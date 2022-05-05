import React, { useState } from 'react'
import axiosAPI from '../Services/axios-api';
import { useNavigate } from 'react-router-dom';

import instagramCell from '../Assets/imgs/login-cell.png'
import logoInstagram from '../Assets/imgs/instagram-logo.jpg'
import InputSantard from './InputSantard'
import SalveUserLogin from '../Utils/Login';



export default function RegisterMainSection() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [site, setSite] = useState('')
    const [avatar, setAvatar] = useState('')
    const history = useNavigate()

    const [show, setShow] = useState(1)

    const [loading, Setloading] = useState(false)
    function loadFirtsPage(a) {
        a.preventDefault()
        /* preventDefault() impede que o evento padrão ocorra (ex.: seguir um link); 
        event. stopPropagation() impede que o evento seja propagado para os handlers 
        dos elementos DOM pais; return false faz as duas coisas (e ainda interrompe a execução do handler imediatamente, 
        sem executar as instruções que vêm depois).*/
        setShow(1)
    }
    function loadSecoundPage(a) {
        a.preventDefault()
        setShow(2)
    }

    //Quando for trabalhar com APIs ou Banco de dados usar async
    async function registrationHandler(e) {
        e.preventDefault();
        Setloading(true)
        try {
            const response = await axiosAPI.post('/users', {
                username: username,
                password: password,
                name: name,
                description: description,
                site: site,
                avata: avatar
            })
            console.log(response.data)

            alert('Usuario cadastrado com sucesso')
            SalveUserLogin(response.data)
            
            history('/feed')
        } catch (error) {
            if (error.response) {
                console.log(error.response)
            } else if (error.request) {
                console.log(error.request)
            } else if (error.message) {
                console.log(error.message)
            }
        }
        Setloading(false)
    }



    return (
        <main>
            <div className='form-login-register'>
                <img src={instagramCell} alt='Logo do instagram' />
                <form>
                    {loading ?
                        <h1>Criando usuario...</h1>
                        :
                        <>
                            <img src={logoInstagram} />
                            {show === 1 ?
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
                                    <InputSantard
                                        title='Nome'
                                        type='text'
                                        placeholder='Nome'
                                        state={name}
                                        setState={e => setName(e.target.value)}
                                    />
                                </div> :
                                <div className='content'>
                                    <InputSantard
                                        title='Descrição'
                                        type='text'
                                        placeholder='Descrição'
                                        state={description}
                                        setState={e => setDescription(e.target.value)}
                                    />
                                    <InputSantard
                                        title='Site'
                                        type='text'
                                        placeholder='Site'
                                        state={site}
                                        setState={e => setSite(e.target.value)}
                                    />
                                    <InputSantard
                                        title='Foto'
                                        type='text'
                                        placeholder='Foto'
                                        state={avatar}
                                        setState={e => setAvatar(e.target.value)}
                                    />
                                </div>
                            }

                            <div className='btn-navegation'>
                                {
                                    show === 1 ?
                                        <>
                                            <button style={{ background: '#CCC' }} onClick={loadFirtsPage}>Voltar</button>
                                            <button onClick={loadSecoundPage}>Proximo</button>

                                        </>
                                        :
                                        <>
                                            <button onClick={loadFirtsPage}>Voltar</button>
                                            <button style={{ background: '#CCC' }} onClick={loadSecoundPage}>Proximo</button>
                                        </>
                                }
                                {
                                    avatar && site && description && name && password && username &&
                                    <button onClick={registrationHandler}>Finalizar</button>
                                }

                            </div>
                        </>

                    }

                </form>
            </div>
        </main>
    )
}

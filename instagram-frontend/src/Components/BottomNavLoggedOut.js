import React from 'react'
import { MdPhotoCamera, MdPerson, MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'
export default function BottoBottomNavLoggedOutmNav() {
    return (
        <footer>
            <nav>
                <div>
                    <p>Não possui uma conta ainda?</p>
                    <Link to='/register'>Inscreva-se</Link>
                </div>
            </nav>
        </footer>
    )
}
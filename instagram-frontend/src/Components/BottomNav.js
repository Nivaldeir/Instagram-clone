import React from 'react'
import { MdPhotoCamera, MdPerson, MdHome } from 'react-icons/md'
import { Link } from 'react-router-dom'
export default function BottomNav() {
    return (
        <footer>
            <nav>
                <Link to='/feed'>
                    <MdHome />
                </Link>
                <Link to='/post'>
                    <MdPhotoCamera />
                </Link>
                <Link to='/profile'>
                    <MdPerson />
                </Link>
            </nav>
        </footer>
    )
}
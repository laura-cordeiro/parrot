import { Link } from 'react-router-dom'
import Picture  from '../../../assets/images/imagem-perfil.png' 

import './styles.css'

const UserInfoSection = () => {
    return(
        <div className='wrapper'>
            <div className="user-info">
                <div className="user-image">
                    <img src={Picture} alt='Imagem de perfil'></img>
                </div>
                <div className='user-personal-data'>
                    <h4>Nome Sobrenome</h4>
                    <ul>
                        <li>Apê 82</li>
                        <li>user@email.com</li>
                        <li>00 publicações</li>
                    </ul>
                </div>
            </div>
            <div className='edit-profile'>
                <Link to='/' id='edit-profile-link'> editar perfil</Link>
            </div>
        </div>
    )
}

export default UserInfoSection
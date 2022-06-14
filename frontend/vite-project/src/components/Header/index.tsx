import './styles.css'

import Logo from '../../assets/images/parrot-logo-2.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div className='container-header'>
                <div className='logo-header'>
                    <img src={Logo} alt='Logo Parrot'></img>
                </div>
                <div>
                    <p id='usuario'>Olá, usuário | <Link to='/login' id='exit'>sair</Link></p>
                </div>
            </div>

        </header>
)}

export default Header
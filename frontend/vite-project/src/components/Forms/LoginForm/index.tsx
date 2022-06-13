import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'

import Logo from '../../../assets/images/logo.png'

import './styles.css'

const LoginForm =  () => {
    return(
        <div className='container'>
            <div className='logo-image'>
                <img src={Logo} alt="Logo Parrot" />
            </div>
            <div className='form'>
                <h4>Login</h4>
                <Form action="">
                    <Form.Group className='mb-3'>
                        <Form.Control className='input-forms' type='email' placeholder='email' />
                    </Form.Group>

                    <Form.Group className='mb-3 '>
                        <Form.Control type='password' className='input-forms' placeholder='senha' />
                    </Form.Group>

                    <Button variant='success'>Entrar</Button>
                </Form>
            </div>
        </div>
    )
}

export default LoginForm
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'

import Logo from '../../../assets/images/logo.png'

import './styles.css'

const LoginForm =  () => {
    return(
        <div className='container'>
            <div className='logo-image mt-5'>
                <img src={Logo} alt="Logo Parrot" />
            </div>
            <div className='form mb-4' >
                <h4 className='mb-4'>Login</h4>
                <Form action="">
                    <Form.Group className='mb-4'>
                        <Form.Control className='input-forms' type='email' placeholder='email' />
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Control type='password' className='input-forms' placeholder='senha' />
                    </Form.Group>
                    <div className='row'>
                    <Button>Entrar</Button>
                    </div>
                </Form>
            </div>
            <div className='pb-5'>
                <span>
                    cadastre-se
                </span>
            </div>
        </div>
    )
}

export default LoginForm
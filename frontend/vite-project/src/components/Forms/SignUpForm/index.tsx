import React from 'react';
import BACKGROUND from '../../../assets/images/BACKGROUND.png'
import Logo from '../../../assets/images/logo.png'
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'

import './styles.css'

const SignUpForm: React.FC = () => {
    return (
        <div id='containerCadastro-img' >

        <div className='container container-cadastro' >
           
            <div>

            <div className='logo-image'>
                <img className='img-logo' src={Logo} alt="parrot logo" />
            </div>
            <div className='form'>
                <h4>CADASTRO</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control className='input-forms' type="text" placeholder="nome" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='input-forms' type="email" placeholder="email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='input-forms' type="password" placeholder="senha" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
                        <Form.Control  className='input-forms' type="password" placeholder="confirmar senha" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control className='input-forms' type="number" placeholder="unidade/apartamento" />
                    </Form.Group>
                    <Button id='buttom-width' variant="primary" type="submit">
                        entrar
                    </Button>
                </Form>

            </div>
            </div>
        </div>
</div>
    );
}

export default SignUpForm;
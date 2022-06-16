import React, { FormEvent, useState } from 'react';
import { Form, FormGroup, Button} from 'react-bootstrap'
import BACKGROUND from '../../../assets/images/BACKGROUND.png'
import Logo from '../../../assets/images/logo.png'
import { cadastroUsuario } from '../../../services/MainApi/config/create';


import './styles.css'

const SignUpForm: React.FC = () => {

    const [nome, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")
    const [senhaConfirmacao, setSenhaConfirmada] = useState<string>("")
    const [apartamento, setApartamento] = useState<string>("")


    const cadastro = async (event: FormEvent) => {
        event.preventDefault()
        const payload = {
            nome,
            email,
            senha,
            senhaConfirmacao,
            apartamento
        }

        try {
          const response = await cadastroUsuario(payload)

          if(response.status !== 201) {
            return alert('Deu algo errado')
        }

        return alert('Cadastro Efetuado com sucesso!')
        } catch (error) {
            alert('Deu algo errado!')
        }
    }

    return (
        <div id='containerCadastro-img' >

        <div className='container container-cadastro' >
           
            <div>

            <div className='logo-image'>
                <img className='img-logo' src={Logo} alt="parrot logo" />
            </div>
            <div className='form'>
                <h4>CADASTRO</h4>
                <Form onSubmit={cadastro}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control className='input-forms' type="text" placeholder="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='input-forms' type="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='input-forms' type="password" placeholder="senha" value={senha} onChange={(event) => setSenha(event.target.value) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
                        <Form.Control  className='input-forms' type="password" placeholder="confirmar senha" value={senhaConfirmacao} onChange={(event) => setSenhaConfirmada(event.target.value) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control className='input-forms' type="number" placeholder="unidade/apartamento" value={apartamento} onChange={(event) => setApartamento(event.target.value)} />
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
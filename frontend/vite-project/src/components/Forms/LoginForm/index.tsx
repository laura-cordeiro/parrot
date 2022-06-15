import { Button, Form, FormControl, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FormEvent, useState } from 'react'

import Logo from '../../../assets/images/logo.png'

import './styles.css'
import { loginUsuario } from '../../../services/MainApi/config/create'

const LoginForm =  () => {
    const [email, setEmail] = useState<string>("")
    const [senha, setSenha] = useState<string>("")

    const login = async (event: FormEvent) => {
        event.preventDefault()
        const payload = {
            email,
            senha
        }

        try {
          const response = await loginUsuario(payload)

          if(response.status !== 200) {
            return alert('Deu algo errado')
        }

        alert('Cadastro Efetuado com sucesso!')
        } catch (error) {
            alert('Deu algo errado!')
        }
    }

    return(
        <div className='container'>
            <div className='logo-image mt-5'>
                <img src={Logo} alt="Logo Parrot" />
            </div>
            <div className='form mb-4' >
                <h4 className='mb-4'>Login</h4>
                <Form onSubmit={login}>
                    <Form.Group className='mb-4'>
                        <Form.Control className='input-forms' type='email' placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>

                    <Form.Group className='mb-4'>
                        <Form.Control type='password' className='input-forms' placeholder='senha' value={senha} onChange={(event) => setSenha(event.target.value)} />
                    </Form.Group>
                    <div className='row'>
                    <Button type='submit'>Entrar</Button>
                    </div>
                </Form>
            </div>
            <div className='pb-5'>
                <Link to='/cadastro' id='link-signup'>
                    cadastre-se
                </Link>
            </div>
        </div>
    )
}

export default LoginForm
import { AxiosError } from 'axios';
import React, { FormEvent, useState } from 'react';
import { Form, FormGroup, Button} from 'react-bootstrap'
import BACKGROUND from '../../../assets/images/BACKGROUND.png'
import Logo from '../../../assets/images/logo.png'
import { cadastroUsuario } from '../../../services/MainApi/config/create';
import Picture from '../../../assets/images/imagem-perfil.png'

import './styles.css'


const EditUserForm: React.FC = () => {
    const [name, setNome] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setSenha] = useState<string>("")
    const [senhaConfirmacao, setSenhaConfirmada] = useState<string>("")
    const [apartment, setApartamento] = useState<string>("")


    const cadastro = async (event: FormEvent) => {
        event.preventDefault()
        const payload = {
            name,
            email,
            password,
            apartment
        }

        try {
          const response = await cadastroUsuario(payload)
          

          if(response.status !== 201) {
            return alert('Deu algo errado')
        }

        return console.log(response.data)

        } catch (error:any) {
            console.log(error.response.data);
            
            alert(error.response.data)
        }
    }

    return (
        <div id='containerCadastro-img' >

        <div className='container container-cadastro' >
           
            <div>

            <div className='logo-image'>
                <img className='img-logo' src={Logo} alt="parrot logo" />
            </div>
            <div className="user-image">
            <img src={Picture} alt='Imagem de perfil'></img>
            </div>
            <div className='form'>
                <h4>Insira as alterações</h4>
                
                <Form onSubmit={cadastro}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control className='input-forms' type="text" placeholder="nome" value={name} onChange={(event) => setNome(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='input-forms' type="email" placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control className='input-forms' type="number" placeholder="unidade/apartamento" value={apartment} onChange={(event) => setApartamento(event.target.value)} />
                    </Form.Group>
                    <Button id='buttom-width' variant="primary" type="submit">
                        salvar alterações
                    </Button>
                </Form>

            </div>
            </div>
        </div>
</div>
    );
}

export default EditUserForm;
import React, { FormEvent } from 'react';

import Picture from '../../../assets/images/imagem-perfil.png'
import { useState } from 'react';
import {useFormik} from 'formik';
import { useParams } from 'react-router-dom';

import './styles.css'
import { criarPost } from '../../../services/MainApi/config/create';



const PostTweet: React.FC = () => {

    const [content, setContent] = useState<string>('')

    const { idUser } = useParams()
    
    const enviarPost = async (event: FormEvent) => {
        
        const payload = {
            idUser,
            content
        }

       

        try {
            const response = await criarPost(payload)

        } catch (error:any) {
            alert('Ops! Ocorreu um problema')
            return console.log(error.response.data);
            
            
        }
    }
       
    

    return (
        
        <div className='wrapper-post ms-auto'>
            <div className="user-info ">
                <div className="user-image">
                    <img src={Picture} alt='Imagem de perfil'></img>
                </div>
                <div className='post'>

                <form onSubmit={enviarPost}> 
                
                    
                <textarea  rows={2.5} className='text-area'
                    name='message'
                    id='message'
                    placeholder='Coloque aqui a sua mensagem'
                    value={content}
                    onChange={(event) => setContent(event.target.value)}
                    //value={formik.values.message}
                    //onChange={formik.handleChange}
                />
                <div>

                <button id="link-btn-publicar" type='submit'>publicar</button>
                </div>
            </form>


                </div>
            </div>
           
        </div>
    )
}

export default PostTweet;
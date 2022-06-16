import React from 'react';

import Picture from '../../../assets/images/imagem-perfil.png'
import {useFormik} from 'formik';

import './styles.css'

const PostTweet: React.FC = () => {
    return (

        <div className='wrapper-post ms-auto'>
            <div className="user-info ">
                <div className="user-image">
                    <img src={Picture} alt='Imagem de perfil'></img>
                </div>
                <div className='post'>

                <form> 
                
                    
                <textarea  rows={2.5} className='text-area'
                    name='message'
                    id='message'
                    placeholder='Coloque aqui a sua mensagem'
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
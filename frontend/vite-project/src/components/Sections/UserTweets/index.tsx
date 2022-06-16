import Picture from '../../../assets/images/imagem-perfil.png'

import './styles.css'

import { useEffect, useState } from 'react'
import { listarPosts } from '../../../services/MainApi/config/create'

interface TweetsUsuario {
    nome: string,
    apartamento: string,
    horario?: string,
    mensagem: string

}

const UserTweets: React.FC = () => {
    const [tweets, setTweets] = useState<TweetsUsuario[]>([])
    useEffect(() => {
        
            
        const getData = async () => {
            try{
            const response = await listarPosts()

            setTweets(response.data)
        }
             catch (error) {
         alert('Ocorreu um erro')   
    }

    getData()
    
    
    }}, [setTweets])

    return(
        <div className='wrapper'>
             {tweets.map( tweet => (
                 <div className="user-info">
           
                 <div className="user-image">
                     <img src={Picture} alt='Imagem de perfil'></img>
                 </div>
                 <div className='user-tweet'>
                     <h6 className='nome'>{tweet.nome} - {tweet.apartamento}</h6>
                     <span>00/00/2022 00:00</span>
                     <p>{tweet.mensagem}</p>
                 </div>
             </div>
                ))}
       
    </div>
    )
}

export default UserTweets
import Picture from '../../../assets/images/imagem-perfil.png'
import Icone from '../../../assets/images/icone.png'

import './styles.css'

import { useEffect, useState } from 'react'
import { infoUsuario, listarPostsUsuario } from '../../../services/MainApi/config/create'
import { useParams } from 'react-router-dom'

interface TweetsUsuario {
    content: string,
    createdAt: string,
  
}

interface InfoUsuario {
    name: string,
    email: string,
    apartment: number,
    password: string,
    idUser: number
}


const UserTweets: React.FC = () => {
    const [tweets, setTweets] = useState<TweetsUsuario[]>([])
    const [info, setInfo] = useState<InfoUsuario>()

    const { id } = useParams()

    const quantidadePosts = tweets.length
    

     //Funcao para obter os posts do usuário
     const obterPosts = async () => {
        const posts = await listarPostsUsuario(id)
        setTweets(posts.data)
        return console.log(posts.data);
        
     }

      //Funcao para obter os dados do usuário da API
    const obterDados = async () => {
        const dados = await infoUsuario(id)
        setInfo(dados.data)
        return console.log(dados.data);

    }

     //UseEffect
     useEffect(() => {
        obterPosts()
        obterDados()
     }, [])
        
    
        if(quantidadePosts){
            return(    <div id='container-posts'>
                {tweets.map(tweet => (
                       <div className='wrapper'>
                       <div className="user-info">
               
                       <div className="user-image">
                           <img src={Picture} alt='Imagem de perfil'></img>
                       </div>
                       <div className='user-tweet'>
                           <h6 className='nome'>{info?.name} - Apê {info?.apartment}</h6>
                           <span>{tweet.createdAt[8]}{tweet.createdAt[9]}/{tweet.createdAt[5]}{tweet.createdAt[6]}/{tweet.createdAt[0]}{tweet.createdAt[1]}{tweet.createdAt[2]}{tweet.createdAt[3]} - {tweet.createdAt[11]}{tweet.createdAt[12]}:{tweet.createdAt[14]}{tweet.createdAt[15]}</span>
                           <p>{tweet.content}</p>
                       </div>
                   </div>
                   
          
               </div>
                ))}
             
            </div> )
        }

        return(
            <div>
                <div id='no-posts'>
                    <p>Você ainda não fez nenhuma publicação :/ </p>
                    <img src={Icone} alt="Logo Parrot" />
                </div>
            </div>
        )
       
    
}

export default UserTweets
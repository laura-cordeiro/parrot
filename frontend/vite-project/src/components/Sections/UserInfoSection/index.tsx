import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Picture  from '../../../assets/images/imagem-perfil.png' 
import { infoUsuario, listarPostsUsuario } from '../../../services/MainApi/config/create'


import './styles.css'

interface InfoUsuario {
    name: string,
    email: string,
    apartment: number,
    password: string,
    idUser: number
}

interface TweetsUsuario {
    content: string,
    createdAt: string,
  
}
const UserInfoSection = () => {
    const { id } = useParams()
    
    //useState
    const [info, setInfo] = useState<InfoUsuario>()
    const [tweets, setTweets] = useState<TweetsUsuario[]>([])
   
    //Funcao para contar o número de posts do usuario
    let quantidadePosts = tweets.length

    // useEffect
    useEffect(() => {
        obterDados()
        obterPosts()
    }, [])

    //Funcao para obter os dados do usuário da API
    const obterDados = async () => {
        const dados = await infoUsuario(id)
        setInfo(dados.data)
        return console.log(dados.data);
        

    }

     //Funcao para obter os posts do usuário
     const obterPosts = async () => {
        const posts = await listarPostsUsuario(id)
        setTweets(posts.data)
        return console.log(posts.data);
        
     }

    return(
        <div className='wrapper'>
            <div className="user-info">
                <div className="user-image">
                    <img src={Picture} alt='Imagem de perfil'></img>
                </div>
                <div className='user-personal-data'>
                    <h4 className='nome'>{info?.name}</h4>
                    <ul>
                        <li>Apê {info?.apartment}</li>
                        <li>{info?.email}</li>
                        <li>{quantidadePosts} publicações</li>
                    </ul>
                </div>
            </div>
            <div className='edit-profile'>
                    <Link to='/' id='edit-profile-link'> editar perfil</Link>
               
            </div>
        </div>
    )

   

    }
    // useEffect(() => {
        
            
    //     const getData = async () => {
    //         try{
    //         const response = await infoUsuario()
    //         return console.log(response.data);
            
            
    //     }
    //          catch (error) {
    //      alert('Ocorreu um erro')   
    // }

    // getData()
    
    
    // }}, []) 
    

    

export default UserInfoSection
import React from 'react';
import Picture from '../../../assets/images/imagem-perfil.png'

import { useState, useEffect } from 'react';

import './styles.css'
import { listarPostsGeral } from '../../../services/MainApi/config/create';
import UserInfoSection from '../UserInfoSection';


interface AllPosts{
    idUser: number,
    name: string,
    content: string,
    createdAt: string,
    apartment: string
}

const FeedTweets: React.FC = () => {
    
    const [posts, setPosts] = useState<AllPosts[]>([])


    //Funcao para obter todos os posts
    const obterTodosPosts = async () => {
        try {
            const posts = await listarPostsGeral()
        setPosts(posts.data)
        return console.log(posts.data);
        
        } catch (error) {
            alert('Ops! Aconteceu algum problema!')
        }
        
     }

     //UseEffect

     useEffect(()=> {
        obterTodosPosts()
     }, [])

  return (
    <div className='container-posts'>
        {posts.map((post, index) => (
            <div className='wrapper'>
            <div className="user-info">
                <div className="user-image">
                    <img src={Picture} alt='Imagem de perfil'></img>
                </div>
                <div className='feed-tweet'>
                    <h6 className='nome'>ID Usuário {post.idUser} - apê</h6>
                    <span>{post.createdAt[8]}{post.createdAt[9]}/{post.createdAt[5]}{post.createdAt[6]}/{post.createdAt[0]}{post.createdAt[1]}{post.createdAt[2]}{post.createdAt[3]} - {post.createdAt[11]}{post.createdAt[12]}:{post.createdAt[14]}{post.createdAt[15]}</span>
                    <p>{post.content}</p>
                </div>
            </div>
        </div>
        ))}
        
    </div>
)
}

export default FeedTweets;
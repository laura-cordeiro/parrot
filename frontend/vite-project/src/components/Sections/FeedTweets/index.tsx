import React from 'react';
import Picture from '../../../assets/images/imagem-perfil.png'

import { useState, useEffect } from 'react';

import './styles.css'
import { listarPostsGeral } from '../../../services/MainApi/config/create';

interface AllPosts{
    name?: string,
    content: string,
    apartment?: string,
    createdAt: string
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
        {posts.map(post => (
            <div className='wrapper'>
            <div className="user-info">
                <div className="user-image">
                    <img src={Picture} alt='Imagem de perfil'></img>
                </div>
                <div className='feed-tweet'>
                    <h6 className='nome'>Nome - apê 82</h6>
                    <span>00/00/2022 00:00</span>
                    <p>{post.content}</p>
                </div>
            </div>
        </div>
        ))}
        
    </div>
)
}

export default FeedTweets;
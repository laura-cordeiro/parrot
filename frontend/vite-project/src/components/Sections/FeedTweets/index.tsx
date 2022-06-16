import React from 'react';
import Picture from '../../../assets/images/imagem-perfil.png'

import './styles.css'

const FeedTweets: React.FC = () => {
  return (
    <div className='wrapper'>
    <div className="user-info">
        <div className="user-image">
            <img src={Picture} alt='Imagem de perfil'></img>
        </div>
        <div className='feed-tweet'>
            <h6 className='nome'>Nome - apê 82</h6>
            <span>00/00/2022 00:00</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In amet veniam esse, ullam beatae soluta molestias accusantium, corporis consequatur assumenda delectus aut natus cumque libero eum iste, ratione voluptate sed?</p>
        </div>
    </div>
</div>
)
}

export default FeedTweets;
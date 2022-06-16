
import Header from "../../components/Header"
import FeedTweets from "../../components/Sections/FeedTweets"
import PostTweet from "../../components/Sections/PostTweet"


import './styles.css'

const Feed = () => {
   return (
      <div className="App">
         <div>
            <Header />
            <main>
            <PostTweet />
            <FeedTweets />
            </main>
         </div>

      </div>

   )
}

export default Feed

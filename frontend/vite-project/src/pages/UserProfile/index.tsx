import Header from "../../components/Header"
import UserInfoSection from "../../components/Sections/UserInfoSection"
import UserTweets from "../../components/Sections/UserTweets"

import './styles.css'

const UserProfile = () => {
 return(
    <div>
      <Header />
      <main>
          <UserInfoSection />
          <UserTweets />
      </main>
    </div>
 )
}

export default UserProfile
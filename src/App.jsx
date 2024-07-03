import './App.css'
import userData from "./userData.json"
import Profile from './components/Profile/Profile'
import FriendsList from './components/FriendList/FriendsList'
import Transaction from './components/Transaction/Transaction';

import friends from "./friends.json";
import transactions from "./transactions.json";

function App() {

  return (
    <>
      <Profile username={userData.username} tag={userData.tag} location={userData.location} avatar={userData.avatar} stats={userData.stats} />
      <FriendsList friends={friends} />
      <Transaction transactions={transactions} />
    </>
  )
}

export default App

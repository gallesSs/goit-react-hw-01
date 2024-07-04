import './App.css'
import user from "./userData.json"
import Profile from './components/Profile/Profile'
import FriendsList from './components/FriendList/FriendsList'
import Transaction from './components/Transaction/TransactionHistory';

import friends from "./friends.json";
import transactions from "./transactions.json";

function App() {

  return (
    <>
      <Profile user={user} />
      <FriendsList friends={friends} />
      <Transaction items={transactions} />
    </>
  )
}

export default App

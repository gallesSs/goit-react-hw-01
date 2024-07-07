import './App.css'
import user from "./userData.json"
import Profile from './components/Profile/Profile'
import Transaction from './components/Transaction/TransactionHistory';
import friends from "./friends.json";

import transactions from "./transactions.json";
import FriendList from './components/FriendList/FriendList';

function App() {

  return (
    <>
      <Profile user={user} />
      <FriendList friends={friends} />
      <Transaction items={transactions} />
    </>
  )
}

export default App

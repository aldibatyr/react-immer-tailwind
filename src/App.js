import { useImmer } from 'use-immer';
import { useEffect, useState } from 'react';
import UsersList from './UsersList';
import Skeleton from 'react-loading-skeleton';

function App() {

  const [users, setUsers] = useImmer([]);
  const [loading, setLoading] = useState(true);

  const fetchUsersOnMount = async (amount) => {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=${amount}`)
      const data = await response.json();
      setUsers(data.results)
    } catch (error) {
      console.log(error)
    } finally {
      console.log(users)
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchUsersOnMount(20)
  }, [])

  if (loading) {
    return (
      <div>
        <Skeleton count={10}/>
      </div>
    )
  } else {
    return (
      <div className="App">
        {/* <UsersList users={users}/> */}
      </div>  
    );
  }
}

export default App;

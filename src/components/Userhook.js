import React,{useEffect} from 'react'
import fetchUsers from './redux/user/userAction'
import {useSelector,useDispatch} from 'react-redux'
function Userhook() {
   const userData=useSelector((state)=>state.user)
  const dispatch=useDispatch()
   
    useEffect(()=>{
        dispatch(fetchUsers())}
        // eslint-disable-next-line 
    ,[])
  return userData.loading?(<h1>loading</h1>
    
  ):userData.error?(<h2>userData.err</h2>)   :
  (
      <div>
          <h1>Users</h1>
          {userData&&userData.users&& userData.users.map(user=><p>{user.name}</p>)}
      </div>
  ) 
 
}


 
export default Userhook
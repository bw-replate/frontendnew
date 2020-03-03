import React, {useState, createContext} from 'react';

export const UserContext= createContext();

const UserContextProvider= () => {
  const [user, setUser]= useState({
    userName: '', 
    userPermissions: ''
  });

  return(
    <UserContext.provider value= { {...user} }>
      {this.props.children}
    </UserContext.provider>
  )

}//end userContextProvider

export default UserContextProvider;
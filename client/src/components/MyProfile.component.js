import { useState,useEffect } from 'react';

const MyProfile = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
    useEffect(() => {
        
        setLoggedInUser(localStorage.getItem('token') || null);
        window.addEventListener('storage', storageEventHandler, false)

    }, [])

    const storageEventHandler = () => {
      console.log("hi from storageEventHandler")
      setLoggedInUser(localStorage.getItem('token') || null)
  }
  const onLogOut = ()=>{
    setLoggedInUser(localStorage.setItem('token',null));

 }

  return (
    <>
      <h2>My Profile</h2>
    </>
  );
};
export default MyProfile;
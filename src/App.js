import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import Login from "./components/Login";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./components/firebase";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
        }))
      }
      else{
        dispatch(logout());
      }
    });
  }, []);
  
  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="Sidebar_orient">
          <Sidebar />
          <div className="post_window">
            <Post />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

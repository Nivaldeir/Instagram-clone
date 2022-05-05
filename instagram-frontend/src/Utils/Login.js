import { Navigate, useLocation } from "react-router-dom";
import Router from "../Router/Router";

export default function SalveUserLogin(data) {
  const userId = data.data._id;
  const userName = data.data.username
  localStorage.setItem('InstagramUserId', userId)
  localStorage.setItem('InstagramUserName', userName)
}


function isAuth() {
  const user = localStorage.getItem('InstagramUserId')
  if (!user)
    return false
  console.log(user)
  return true
}




export function RequireAuth({ children }) {
  const authed = isAuth()
  const location = useLocation();
  return authed === true ? (
    children
  ) : (
    <Navigate to="/" replace state={{ path: location.pathname }} />
  );
}

export function LoginAuth({ children }) {
  const authed = isAuth()
  const location = useLocation(); // Pega o pathname `URL`
  return authed === true ? (
    <Navigate to="/feed" replace state={{ path: location.pathname }} />
  ) : (
    children
  );
}


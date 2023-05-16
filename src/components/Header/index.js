import "./header.css";
import { Link } from "react-router-dom";
import logo from "../Header/logo.png";

export default function Header() {
  return (
    <>
    <div className="header">
      <Link className="logo" to="/">
        <img src={logo} alt="logo"/>
      </Link>
      <Link className="mymovies" to="/mymovies">
        My Movies
      </Link>
      <div className="date">
        Movies showing in{" "}
        {new Date().toLocaleString("en-US", { month: "long" })}{" "}
        {new Date().toLocaleString("en-US", { day: "2-digit" })}th!
      </div>
      </div>
    </>
  );
}

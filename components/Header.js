import React from "react";
import logo from "./images/pokeball.gif";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="poke-header">
            <Link to="/">
                <img
                    className="pokeball-logo"
                    src={logo}
                    alt={"pokeball"}
                ></img>
            </Link>
            <div className="title">Welcome to the Pokemon world!</div>
        </div>
    );
}

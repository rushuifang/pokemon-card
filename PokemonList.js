import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";

export default function PokemonList({ pokemon }) {
    const indexUrl = pokemon.map(
        (item) => "/pokemon/" + item.url.match(/\d/g).slice(1).join("")
    );
    const cardImgurl = indexUrl.map(
        (item) =>
            "https://github.com/PokeAPI/sprites/blob/master/sprites" +
            item +
            ".png?raw=true"
    );
    const nameUrl = pokemon.map((item) => item.name);
    return (
        <div>
            {nameUrl.map((item) => (
                <div key={item} className="card poke-card">
                    <img
                        src={cardImgurl[nameUrl.indexOf(item)]}
                        alt="loading"
                        className="card-img-top card-image"
                    />
                    <Link
                        to={indexUrl[nameUrl.indexOf(item)]}
                        className="text-center card-body"
                    >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                </div>
            ))}
        </div>
    );
}

import React, { Component } from "react";
import axios from "axios";
import Header from "./Header.js";

export default class PokemonDetail extends Component {
    state = {
        pokemonIndex: "",
        imgUrl: "",
        name: "",
        abilities: [],
        base_exp: "",
        height: "",
        stats: [],
        types: [],
        weight: "",
    };

    async componentDidMount() {
        const { pokemonIndex } = this.props.match.params;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
        const pokemonRes = await axios.get(pokemonUrl);
        const imgUrl = pokemonRes.data.sprites.front_shiny;
        const name = pokemonRes.data.name;
        const abilities = pokemonRes.data.abilities.map(
            (item) =>
                item.ability.name.charAt(0).toUpperCase() +
                item.ability.name.slice(1)
        );
        const base_exp = pokemonRes.data.base_experience;
        const height = pokemonRes.data.height;
        const stats = pokemonRes.data.stats.map((item) => item.base_stat);
        const types = pokemonRes.data.types.map(
            (item) =>
                item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)
        );
        const weight = pokemonRes.data.weight / 10;

        this.setState({
            pokemonIndex,
            imgUrl,
            name,
            abilities,
            base_exp,
            height,

            stats,
            types,
            weight,
        });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="poke-detail">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="text-left col-6">
                                    Number {this.state.pokemonIndex}:{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                        {this.state.name
                                            .charAt(0)
                                            .toUpperCase() +
                                            this.state.name.slice(1)}
                                    </span>
                                </div>
                                <div className="text-right col-6">
                                    Type: {this.state.types.join(", ")}
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <img
                                className="poke-detail-img"
                                src={this.state.imgUrl}
                                alt={"loading"}
                                style={{ width: "15em", height: "15em" }}
                            ></img>
                            <div className="poke-stats">
                                <div className="stats-title text-danger">
                                    HP
                                </div>
                                <div
                                    className="progress stats-progress"
                                    style={{ margin: "5px" }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                        style={{
                                            width: `${this.state.stats[0]}%`,
                                        }}
                                    >
                                        {this.state.stats[0]}
                                    </div>
                                </div>
                            </div>
                            <div className="poke-stats">
                                <div className="stats-title text-success">
                                    ATTACK
                                </div>
                                <div
                                    className="progress stats-progress"
                                    style={{ margin: "5px" }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        style={{
                                            width: `${this.state.stats[1]}%`,
                                        }}
                                    >
                                        {this.state.stats[1]}
                                    </div>
                                </div>
                            </div>
                            <div className="poke-stats">
                                <div className="stats-title text-warning">
                                    DEFENSE
                                </div>
                                <div
                                    className="progress stats-progress"
                                    style={{ margin: "5px" }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                        style={{
                                            width: `${this.state.stats[2]}%`,
                                        }}
                                    >
                                        {this.state.stats[2]}
                                    </div>
                                </div>
                            </div>
                            <div className="poke-stats">
                                <div className="stats-title text-info">
                                    SPECIAL ATTACK
                                </div>
                                <div
                                    className="progress stats-progress"
                                    style={{ margin: "5px" }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                                        style={{
                                            width: `${this.state.stats[3]}%`,
                                        }}
                                    >
                                        {this.state.stats[3]}
                                    </div>
                                </div>
                            </div>
                            <div className="poke-stats">
                                <div className="stats-title text-primary">
                                    SPECIAL DEFENSE
                                </div>
                                <div
                                    className="progress stats-progress"
                                    style={{ margin: "5px" }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                        style={{
                                            width: `${this.state.stats[4]}%`,
                                        }}
                                    >
                                        {this.state.stats[4]}
                                    </div>
                                </div>
                            </div>
                            <div className="poke-stats">
                                <div className="stats-title text-dark">
                                    SPEED
                                </div>
                                <div
                                    className="progress stats-progress"
                                    style={{ margin: "5px" }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated bg-dark"
                                        style={{
                                            width: `${this.state.stats[5]}%`,
                                        }}
                                    >
                                        {this.state.stats[5]}
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="poke-profile">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="profile-column">
                                            <div className="profile-title">
                                                Height:
                                            </div>
                                            <div className="profile-value">
                                                {this.state.height / 10} m
                                            </div>
                                        </div>
                                        <div className="profile-column">
                                            <div className="profile-title">
                                                Weight:
                                            </div>
                                            <div className="profile-value">
                                                {this.state.weight} kg
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="profile-column">
                                            <div className="profile-title">
                                                Base Exprience:
                                            </div>
                                            <div className="profile-value">
                                                {this.state.base_exp}
                                            </div>
                                        </div>
                                        <div className="profile-column">
                                            <div className="profile-title">
                                                Abilities:
                                            </div>
                                            <div className="profile-value">
                                                {this.state.abilities.join(
                                                    ", "
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

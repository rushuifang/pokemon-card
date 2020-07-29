import React, { useState, useEffect } from "react";
import axios from "axios";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import PokemonDetail from "./components/PokemonDetail";

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [currentPageUrl, setCurrentPageUrl] = useState(
        "https://pokeapi.co/api/v2/pokemon"
    );
    const [nextPageUrl, setNextPageUrl] = useState();
    const [prevPageUrl, setPrevPageUrl] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let cancel;
        axios
            .get(currentPageUrl, {
                cancelToken: new axios.CancelToken((c) => (cancel = c)),
            })
            .then((res) => {
                setLoading(false);
                setNextPageUrl(res.data.next);
                setPrevPageUrl(res.data.previous);
                setPokemon(res.data.results);
            });

        return () => cancel();
    }, [currentPageUrl]);

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl);
    }

    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl);
    }

    if (loading) return "Loading...";
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={() => (
                        <div className="index-page">
                            <Header />
                            <Pagination
                                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
                            />
                            <PokemonList pokemon={pokemon} />
                            <Pagination
                                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                                gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
                            />
                        </div>
                    )}
                />
                <Route
                    exact
                    path="/pokemon/:pokemonIndex"
                    component={PokemonDetail}
                />
            </Switch>
        </Router>
    );
}

export default App;

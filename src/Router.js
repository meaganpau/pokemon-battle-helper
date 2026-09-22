import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import PokemonStats from './pages/PokemonStats';
import Type from './pages/Type';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/pokemon/:name' component={PokemonStats} />
                <Route exact path='/type/:type' component={Type} />
                <Route exact path='/' component={Home} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

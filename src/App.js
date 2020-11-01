import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Switch ,Route, Redirect} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Navbar from './Navbar';

const App = () =>{
    return (
        <>
            <Navbar />

            <Switch>
                {/* switch  make with first match to avoid it use 'exact */}
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/services" component={Services}/>
                {/* if none of these matches */}
                <Redirect to="/"/>
            </Switch>
        </>
    );
};

export default App;
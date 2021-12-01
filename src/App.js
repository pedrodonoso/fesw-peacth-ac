import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";
import Cookies from 'universal-cookie';

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import "./App.css"

function App() {

    const [registrado, setRegistrado] = useState(false);

    useEffect(() => {
        console.log("verificando usuario")
        const cookies = new Cookies();
        var jwt = cookies.get('user')
        if (jwt == undefined) { //no registrado
            console.log("no registrado")
            setRegistrado(false);
        } else { //registrado
            console.log("registrado")
            setRegistrado(true);

        }

    }, []);

    return (
        <Router basename={process.env.REACT_APP_BASENAME || ""}>
            <div>
                {routes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={withTracker(props => {
                                        return (
                                            <route.layout {...route.layout_props}>
                                                <route.component {...route.component_props} />
                                            </route.layout>
                                        );
                                    })}
                                />
                            );
                        }
                )}
            </div>
        </Router>
    );
}

export default App;
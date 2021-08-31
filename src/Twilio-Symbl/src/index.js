import React from 'react';
import {BrowserRouter as Router, Redirect, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import AppStateProvider, {useAppState} from './state';
import * as serviceWorker from './serviceWorker';
import {VideoProvider} from "./components/VideoProvider";
import UnsupportedBrowserWarning from "./components/UnsupportedBrowserWarning/UnsupportedBrowserWarning";
import generateConnectionOptions from "./utils/generateConnectionOptions/generateConnectionOptions";
import CssBaseline from "@material-ui/core/CssBaseline";
import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from "./theme";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import config from './config';

const basePath = config.appBasePath || "/session";

const VideoApp = () => {
    const {setError, settings} = useAppState();
    const connectionOptions = generateConnectionOptions(settings);

    return (
        <UnsupportedBrowserWarning>
            <VideoProvider options={connectionOptions} onError={setError}>
                {/*<ErrorDialog dismissError={() => setError(null)} error={error} />*/}
                <App/>
            </VideoProvider>
        </UnsupportedBrowserWarning>
    );
};

const CompleteApp = () =>{
    return(
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <AppStateProvider>
                    <Switch>
                        <PrivateRoute exact path={basePath}>
                            <VideoApp/>
                        </PrivateRoute>
                        <PrivateRoute exact path={`${basePath}room/:URLRoomName`}>
                            <VideoApp/>
                        </PrivateRoute>
                        <PrivateRoute exact path={`${basePath}room/:URLRoomName/:UserName`}>
                            <VideoApp/>
                        </PrivateRoute>
                        <Redirect to={basePath}/>
                    </Switch>
                </AppStateProvider>
            </Router>
        </MuiThemeProvider>
        
    );    
}

export default CompleteApp;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

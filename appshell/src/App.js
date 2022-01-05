import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

const Landing = React.lazy(() => import("Landing/Landing"));

const renderMFE = (MFE) => {
    return(
        <React.Suspense fallback="Loading...">
            <MFE />
        </React.Suspense>
    )
}

const App = () => {
    return(
        <Router>
            <p>shell</p>
            {renderMFE(Landing)}
        </Router>
    )
}

export default App;
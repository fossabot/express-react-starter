import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "Components/App";

import "./index.scss";

ReactDOM.render(
    <App />,
    document.getElementById("app")
);

if (module.hot) {
    module.hot.accept();
}

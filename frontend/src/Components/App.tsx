import * as React from "react";

interface IAppProps {

}

interface IAppState {

}

/**
 * Standard app class that wraps everything
 */
class App extends React.Component<IAppProps, IAppState> {
    public render() {
        return "Hello world";
    }
}

export default App;
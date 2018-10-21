import * as React from "react";

import { addLocaleData, IntlProvider, FormattedMessage } from "react-intl";
import * as de from "react-intl/locale-data/de";
import * as en from "react-intl/locale-data/en";

import {Provider} from "mobx-react";

import LogService from "Services/LogService";
import {ELogLevel} from "Services/AbstractLogService";

export const localeData: any = {
    de: require("../../locales/de.json")
};

interface IAppState {
    clicked: string;
}

/**
 * Standard app class that wraps everything
 */
class App extends React.Component<{}, IAppState> {
    private language = "en";
    private dependencies = {};

    public constructor(props: any) {
        super(props);

        addLocaleData([...en, ...de]);
        this.dependencies = this.generateDependencies();

        this.state = {
            clicked: "123"
        };
    }

    public render() {
        return <Provider>
            <IntlProvider  messages={localeData[this.language]} key={this.language} locale={this.language}>
                <React.Fragment>
                    <FormattedMessage
                        defaultMessage="Hello world"
                        id="sidia.hello_world"
                    />
                    <div onClick={this.onClick}>
                        {this.state.clicked}
                    </div>
                </React.Fragment>
            </IntlProvider>
        </Provider>;
    }

    public onClick = () => {
        this.setState({
            clicked: "asdf"
        });
    }

    private generateDependencies() {
        const logService = new LogService(ELogLevel.LOG_LEVEL_INFO);
        return {
            logService
        };
    }
}

export default App;
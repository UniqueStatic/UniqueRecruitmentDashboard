import * as React from "react";
import { reducer } from "./reducer";
import Main from "./view/Main";
import View from "./view/View";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Main>
                    <View />
                </Main>
            </Provider>
        );
    }
}

export default App;

import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from "app/providers/StoreProvider/config/store";

interface StoreProviderProps {
    children?: ReactNode
}

const StoreProvider = (props: StoreProviderProps) => {
    const {children} = props
    const store = createReduxStore()
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
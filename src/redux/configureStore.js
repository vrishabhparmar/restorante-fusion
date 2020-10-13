import {createStore,combineReducers, applyMiddleware} from 'redux'
import {createForms} from 'react-redux-form'
import {InitialFeedBack} from './forms'

import {Dishes} from './dishes'
import {Comments} from './comments'
import {Leaders} from './leaders'
import {Promotion} from './promotions'


import thunk from 'redux-thunk'
import logger from 'redux-logger'


export const ConfigureStore = () => {
    const store  = createStore(
        combineReducers({
            dishes : Dishes,
            comments : Comments,
            leaders : Leaders,
            promotions : Promotion,
            ...createForms({
                feedback : InitialFeedBack
            })

        }),
        applyMiddleware(thunk,logger)
    );

    return store ;
} 
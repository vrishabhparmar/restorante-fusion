import {createStore,combineReducers} from 'redux'


import {Dishes} from './dishes'
import {Comments} from './comments'
import {Leaders} from './leaders'
import {Promotion} from './promotions'


export const ConfigureStore = () => {
    const store  = createStore(
        combineReducers({
            dishes : Dishes,
            comments : Comments,
            leaders : Leaders,
            promotions : Promotion
        })
    );

    return store ;
} 
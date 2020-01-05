import {LEADERS} from '../shared/Leaders.js';
import {COMMENTS} from '../shared/Comments.js'
import {PROMOTIONS} from '../shared/Promotion.js'
import { DISHES } from '../shared/dishes';


export const initialState = {
        dishes : DISHES,
      
      comments : COMMENTS,
      promotions : PROMOTIONS,
      leaders : LEADERS
}


export const Reducer = (state = initialState , action ) => {
    return state
} 

import {CHANGE_MUSIC} from './actionType'

export default function IndexReducer(state, action){
    const {type, payload} = action
    const {listMusic, currentPlayIndex, newIndex} = payload
    switch (type) {
        case CHANGE_MUSIC:
            //reload when change music
             listMusic[currentPlayIndex].source.currentTime = 0;
            return newIndex;
        default:
            return state
    }
}



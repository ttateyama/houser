import ActionConstants from './constants'
const {
    GET_PROPERTIES
} = ActionConstants;

export function getProperties() {
    return {
        type: GET_PROPERTIES
    }
}
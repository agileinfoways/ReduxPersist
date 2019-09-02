export const TYPE_SAVE_USER_DATA = "TYPE_SAVE_USER_DATA"
export const TYPE_TOKEN_DATA = "TYPE_TOKEN_DATA"

export function saveUserDataInRedux(data) {
    console.log(" USER DATA ", data)
    return {
        type: TYPE_SAVE_USER_DATA,
        value: data
    }
}

export function saveTokenInRedux(data) {
    console.log(" TOKEN ", data)
    return {
        type: TYPE_TOKEN_DATA,
        value: data
    }
}
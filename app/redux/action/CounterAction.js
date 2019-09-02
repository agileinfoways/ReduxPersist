export const TYPE_INCREMENT_COUNTER = "TYPE_INCREMENT_COUNTER"
export const TYPE_DECREMENT_COUNTER = "TYPE_DECREMENT_COUNTER"

export function increaseCounter(data) {
    return {
        type: TYPE_INCREMENT_COUNTER,
        value: data
    }
}

export function decreaseCounter(data) {
    return {
        type: TYPE_DECREMENT_COUNTER,
        value: data
    }
}
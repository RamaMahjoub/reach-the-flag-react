export const isValidCell = (state, cell) => {
    return state[cell] === "" || state[cell] === "🔁" || state[cell] === "🚩";
}
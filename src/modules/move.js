export const move = (state, vipCells, finalPosition, isPositive, qu) => {
    let newState = structuredClone(state.cells);
    newState[state.personPosition] = "✅";
    isPositive ? newState[state.personPosition + qu] = "🧍" : newState[state.personPosition - qu] = "🧍";
    if (state.personPosition === finalPosition) {
        newState[finalPosition] = "🚩";
    }
    const isVip = vipCells.find((cell) => {
        return cell === state.personPosition;
    })
    isVip !== undefined && (newState[isVip] = "🔁");
    return newState;
}
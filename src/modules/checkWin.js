export const isWin = (state, width, height, winState) => {
    let b = true;
    for (let i = 0; i < width * height; i++) {
        if (state[i] !== winState[i]) {
            b = false;
        }
    }
    return b;
}
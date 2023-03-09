import { checkMovies } from "../../modules/checkMovies";
import { isValidCell } from "../../modules/checkValidCell";
import { isWin } from "../../modules/checkWin";
import { move } from "../../modules/move";

const reducer = (state, action) => {
    const { width, height, vipCells, finalPosition, winState } = action.payload;
    switch (action.type) {
        case 'moveRight': {
            if ((state.personPosition + 1) % (width) !== 0 && isValidCell(state.cells, state.personPosition + 1)) {
                const newState = move(state, vipCells, finalPosition, true, 1);
                return {
                    cells: newState,
                    personPosition: state.personPosition + 1,
                    win: isWin(newState, width, height, winState),
                    lost: checkMovies(newState, state.personPosition + 1, width, height)
                }
            } else {
                return state;
            }
        }
        case 'moveLeft': {
            if ((state.personPosition) % width !== 0 && isValidCell(state.cells, state.personPosition - 1)) {
                const newState = move(state, vipCells, finalPosition, false, 1);
                return {
                    cells: newState,
                    personPosition: state.personPosition - 1,
                    win: isWin(newState, width, height, winState),
                    lost: checkMovies(newState, state.personPosition - 1, width, height)
                }
            } else {
                return state;
            }
        }
        case 'moveDown': {
            if (state.personPosition + width < (width * height) && isValidCell(state.cells, state.personPosition + width)) {
                const newState = move(state, vipCells, finalPosition, true, width);
                return {
                    cells: newState,
                    personPosition: state.personPosition + width,
                    win: isWin(newState, width, height, winState),
                    lost: checkMovies(newState, state.personPosition + width, width, height)
                };
            } else {
                return state;
            }
        }
        case 'moveUp': {
            if ((state.personPosition - width + 1) > 0 && isValidCell(state.cells, state.personPosition - width)) {
                const newState = move(state, vipCells, finalPosition, false, width);
                return {
                    cells: newState,
                    personPosition: state.personPosition - width,
                    win: isWin(newState, width, height, winState),
                    lost: checkMovies(newState, state.personPosition - width, width, height)
                };
            } else {
                return state;
            }
        }
        default:
            return state;
    }
}

export default reducer;


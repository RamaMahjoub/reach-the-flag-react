import { isValidCell } from "./checkValidCell";

export const checkMovies = (state, personPosition, width, height) => {

    const islost = !(((personPosition - width + 1) > 0 && isValidCell(state, personPosition - width))
        || (personPosition + width < (width * height) && isValidCell(state, personPosition + width))
        || ((personPosition) % width !== 0 && isValidCell(state, personPosition - 1))
        || ((personPosition + 1) % (width) !== 0 && isValidCell(state, personPosition + 1)));
        
    return islost;
}
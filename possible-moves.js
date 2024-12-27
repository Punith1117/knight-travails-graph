export function getPossibleMoves(position) {
    let moves = [];
    let tempMoves = []
    let m1 = [position[0] + 1, position[1] + 2] 
    let m2 = [position[0] - 1, position[1] + 2] 
    let m3 = [position[0] + 1, position[1] - 2] 
    let m4 = [position[0] - 1, position[1] - 2] 
    let m5 = [position[0] + 2, position[1] + 1] 
    let m6 = [position[0] - 2, position[1] + 1] 
    let m7 = [position[0] + 2, position[1] - 1] 
    let m8 = [position[0] - 2, position[1] - 1]
    tempMoves.push(m1, m2, m3, m4, m5, m6, m7, m8)
    for (let move of tempMoves) {
        if (move[0] >= 0 && move[1] >= 0 && move[0] <= 7 && move[1] <= 7)
            moves.push(move)
    }
    return moves
}
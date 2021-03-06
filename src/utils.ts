import {PieceType, Square} from 'chess.js'
export const shortColorToLong = (color: 'b' | 'w'): string => {
  return color === 'b' ? 'black' : 'white'
}

export const shortTypeToLong = (type: PieceType): string => {
  switch (type) {
    case 'p': return 'pawn'
    case 'n': return 'knight'
    case 'k': return 'king'
    case 'b': return 'bishop'
    case 'r': return 'rook'
    case 'q': return 'queen'
    default: return ''
  }
}

export const algebraic = (rank: number, file: number): Square => `${'abcdefgh'[file]}${8 - rank}` as Square

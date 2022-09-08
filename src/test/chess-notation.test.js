const {fromChessNotation} = require('../chess-notation')

test('Not enough information throws an error', () => {
    expect(() => fromChessNotation('N')).toThrow('Invalid chess notation (N)');
})

test('Too much information throws an error', () => {
    expect(() => fromChessNotation('Ng88')).toThrow('Invalid chess notation (Ng88)');
})

test('Out of board rank-bounds produces an error', () => {
    expect(() => fromChessNotation('Ng0')).toThrow('Invalid chess notation (Ng0)');
    expect(() => fromChessNotation('Ng9')).toThrow('Invalid chess notation (Ng9)');
})

test('Out of board file-bounds produces an error', () => {
    expect(() => fromChessNotation('Ni3')).toThrow('Invalid chess notation (Ni3)');
    expect(() => fromChessNotation('NA3')).toThrow('Invalid chess notation (NA3)');
})

test('Valid move results in correct response', () => {
    const obj = fromChessNotation('Ng8');
    expect(obj.pieceName).toBe('Knight');
    expect(obj.piece).toBe('N');
    expect(obj.file).toBe('g');
    expect(obj.x).toBe(6);
    expect(obj.rank).toBe(8);
    expect(obj.y).toBe(7);
})

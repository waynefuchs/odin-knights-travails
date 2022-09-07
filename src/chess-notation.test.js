const {fromChessNotation} = require('./chess-notation')

test('Too few characters throws an error', () => {
    expect(() => fromChessNotation('N')).toThrow('Incorrect string length (N)');
});

test('Too many characters throws an error', () => {
    expect(() => fromChessNotation('Ng8y')).toThrow('Incorrect string length (Ng8y)');
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


// try {
//     console.log(fromChessNotation('Ng8'));
//     console.log(fromChessNotation('Ng9'));
//     console.log(fromChessNotation('Ni7'));
// } catch (error) {
//     console.error(error.message);
// }

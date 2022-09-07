const {fromChessNotation} = require('./chess-notation')

test('Too few characters returns an error', () => {
    expect(() => fromChessNotation('N')).toThrow('Incorrect string length (N)');
});

test('Too many characters returns an error', () => {
    expect(() => fromChessNotation('Ng8y')).toThrow('Incorrect string length (Ng8y)');
})

// try {
//     console.log(fromChessNotation('Ng8'));
//     console.log(fromChessNotation('Ng9'));
//     console.log(fromChessNotation('Ni7'));
// } catch (error) {
//     console.error(error.message);
// }

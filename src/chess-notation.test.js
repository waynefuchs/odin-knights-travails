const {fromChessNotation} = require('./chess-notation')

test('Too few characters returns an error', () => {
    expect(() => fromChessNotation('N')).toThrow('Incorrect string length (N)');
});

// try {
//     console.log(fromChessNotation('Ng8'));
//     console.log(fromChessNotation('Ng9'));
//     console.log(fromChessNotation('Ni7'));
// } catch (error) {
//     console.error(error.message);
// }

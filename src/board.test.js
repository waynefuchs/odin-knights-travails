const Board = require('./board.js');

test('Board is created with default values', () => {
    const board = new Board();
    let values = Object.values(board.map);
    expect(values).toStrictEqual([...Array(64).keys()]);
    expect(board.rank).toBe(8);
    expect(board.file).toBe(8);
})
describe('Player', function() {
  it("assigns a symbol to each player", function() {
    var testPlayer1 = new Player("X");
    var testPlayer2 = new Player("O");
    expect(testPlayer1.mark).to.equal("X");
    expect(testPlayer2.mark).to.equal("O");
  });
});

describe('Space', function() {
  it("returns a player's coordinates", function() {
    var testSpace = new Space(2,3);
    expect(testSpace.xCoordinate).to.equal(2);
    expect(testSpace.yCoordinate).to.equal(3);
  });

  it("lets a player mark their space on the board", function() {
    var testPlayer1 = new Player("X");
    var testSpace1 = new Space(2,3);
    var testPlayer2 = new Player("O");
    var testSpace2 = new Space(1,3);
    testSpace1.markBy(testPlayer1);
    testSpace2.markBy(testPlayer2);
    expect(testSpace1.markedBy).to.equal(testPlayer1);
    expect(testSpace2.markedBy).to.equal(testPlayer2);
  });
});

describe('Board', function() {
  it("creates a board of nine spaces when initialized", function() {
    var newBoard = new Board();
    expect(newBoard.spaces).to.eql([[new Space(1,1), new Space(2,1), new Space(3,1)],[new Space(1,2), new Space(2,2), new Space(3,2)],[new Space(1,3), new Space(2,3), new Space(3,3)]]);
  });

  it("returns the correct space when given coordinates", function() {
    var testBoard = new Board();
    var testSpace = new Space(1,2);
    expect(testBoard.spaceAt(1,2)).to.eql(testSpace);
  });
});

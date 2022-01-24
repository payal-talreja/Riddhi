var chessBoard,pawnImg,rookImg,bishopImg,knightImg,kingImg,queenImg, canvas;
var pawnImg2,rookImg2,bishopImg2,knightImg2,kingImg2,queenImg2
var blackPawn,blackKing,blackQueen,blackKnight,blackRook,blackBishop
var whitePawn1,whitePawn2,whitePawn3,whitePawn4
var whitePawn5,whitePawn6,whitePawn7,whitePawn8
var whiteBishop1,whiteBishop2,whiteKing,whiteKnight1
var whiteKnight2,whiteQueen,whiteRook1,whiteRook2
var blackPawn1,blackPawn2,blackPawn3,blackPawn4
var blackPawn5,blackPawn6,blackPawn7,blackPawn8
var blackBishop1,blackBishop2,blackKing,blackKnight1
var blackKnight2,wblackQueen,blackRook1,blackRook2


function preload() {
  chessBoard = loadImage("chessBoard.png")

  pawnImg = loadImage("whitePawn.png");
  rookImg = loadImage("whiteRook.png");
  kingImg = loadImage("whiteKing.jpg");
  queenImg = loadImage("whiteQueen.png");
  knightImg = loadImage("whiteKnight.png");
  rookImg2 = loadImage("blackRook.png");
  queenImg2 = loadImage("blackQueen.png");
  kingImg2 = loadImage("blackKing.png");
  knightImg2 = loadImage("blackKnight.jpg");
  pawnImg2 = loadImage("blackPawn.png");
  bishopImg = loadImage("whiteBishop.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);



  whitePawn1 = createSprite(500,500,50,50)
  whitePawn2 = createSprite(450,500,50,50)
  whitePawn3 = createSprite(400,500,50,50)
  whitePawn4 = createSprite(350,500,50,50)
  whitePawn5 = createSprite(300,500,50,50)
  whitePawn6 = createSprite(250,500,50,50)
  whitePawn7 = createSprite(200,500,50,50)
  whitePawn8 = createSprite(150,500,50,50)
  whiteBishop1 =  createSprite(400,550,60,60)
  whiteBishop2 =  createSprite(250,550,60,60)
  whiteKnight1 = createSprite(450,550,60,60)
  whiteKnight1 = createSprite(200,550,60,60)
  whiteRook1 = createSprite(500,550,60,60)
  whiteRook2 = createSprite(150,550,60,60)
  whiteQueen = createSprite(300,550,80,80)
  whiteKing = createSprite(350,550,80,80)

  blackPawn1 = createSprite(500,100,50,50)
  blackPawn2 = createSprite(450,100,50,50)
  blackPawn3 = createSprite(400,100,50,50)
  blackPawn4 = createSprite(350,100,50,50)
  blackPawn5 = createSprite(300,100,50,50)
  blackPawn6 = createSprite(250,100,50,50)
  blackPawn7 = createSprite(200,100,50,50)
  blackPawn8 = createSprite(150,100,50,50)
  blackBishop1 = createSprite(400,50,60,60)
  blackBishop2 =  createSprite(250,50,60,60)
  blackKnight1 = createSprite(450,50,60,60)
  blackKnight1 = createSprite(200,50,60,60)
  blackRook1 = createSprite(500,50,60,60)
  blackRook2 = createSprite(150,50,60,60)
  blackQueen = createSprite(300,50,80,80)
  blackKing = createSprite(350,50,80,80)


  

}

function draw() {
  background(chessBoard);
 drawSprites();
}



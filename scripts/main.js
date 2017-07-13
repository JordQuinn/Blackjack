/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
//let cards = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

function handValue (hand) {
  let total = 0;

    for (i = 0; i < hand.length; i++){

        sum the interger value of the hand and return the value
        if(hand[i] === "k")

        if the hand contains alphanumeric let K = 10, J= 10 and
        Q = 10 and add that to the hand
        if the hand contains the alphanumeric of A add 11 to the hand
          and if result > 21 then change the value of A to 1 and add that instead.
}


  return;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/

let board = []

function play(id) {
  let playerSpan = document.getElementById('player');
  let clickedElement = document.getElementById(id);
  
  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O';
    clickedElement.innerText = 'X';
    board[id] = 'X'
    clickedElement.removeAttribute('onclick')
  } else {
    playerSpan.innerText = 'X';
    clickedElement.innerText = 'O';
    board[id] = 'O'
    clickedElement.removeAttribute('onclick')
  }
  console.log();

  let t1 = board[0];
  let t2 = board[1];
  let t3 = board[2];
  let c1 = board[3];
  let c2 = board[4];
  let c3 = board[5];
  let b1 = board[6];
  let b2 = board[7];
  let b3 = board[8];

  // if(t1 !== undefined && t1 === t2 && t2 === t3 && t2 === t2) {
  //   window.alert("Winner!")
  // }

  function reset() {

  }

  if (t1 !== undefined && t1 === t2 && t1 === t3) {
    alert(`${t1} is the winner`);
    return;
  }
  if (c1 !== undefined && c1 === c2 && c1 === c3) {
    alert(`${c1} is the winner`);
    return;
  }
  if (b1 !== undefined && b1 === b2 && b1 === b3) {
    alert(`${b1} is the winner`);
    return;
  }
  if (t1 !== undefined && t1 === c1 && t1 === b1) {
    alert(`${t1} is the winner`);
    return;
  }
  if (t2 !== undefined && t2 === c2 && t2 === b2) {
    alert(`${t2} is the winner`);
    return;
  }
  if (t3 !== undefined && t3 === c3 && t3 === b3) {
    alert(`${t3} is the winner`);
    return;
  }
  if (t1 !== undefined && t1 === c2 && t1 === b3) {
    alert(`${t1} is the winner`);
    return;
  }
  if (b1 !== undefined && b1 === c2 && b1 === t3) {
    alert(`${b1} is the winner`);
    return;
  }

}


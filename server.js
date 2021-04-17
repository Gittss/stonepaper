const { json } = require("express");
const e = require("express");
const express = require("express");

var app = express();

app.listen(3000, (err) => {
  if (!err) console.log("App running at : 3000");
});

app.get("/", (req, res) => {
  var scores = [
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
    [-1, -1, -1, -1],
  ];
  var player = [4];
  var choice = ["Rock", "Paper", "Scissors"];
  let n = 1;
  res.writeHead(200, { "Content-Type": "text/html" });

  while (n <= 50) {
    res.write("<br><br>Iteration : " + n + "<br>");
    res.write("<tr><td>Player 1 </td> ");
    res.write("<td>Player 2</td> ");
    res.write("<td>Player 3</td> ");
    res.write("<td>Player 4</td></tr><br>");
    for (i = 0; i < 4; i++) {
      var j = Math.floor(Math.random() * 3);
      player[i] = choice[j];
    }
    res.write("<tr><td> " + player[0] + "&nbsp; </td> ");
    res.write("<td> &nbsp;" + player[1] + " </td> ");
    res.write("<td> &nbsp;" + player[2] + " </td> ");
    res.write("<td> &nbsp;" + player[3] + " </td></tr><br><br>");
    win = comapre(player[0], player[1]);
    if (win) {
      if (win === player[0]) scores[0][1] += 1;
      else scores[1][0] += 1;
    }
    win = comapre(player[0], player[2]);
    if (win) {
      if (win === player[0]) scores[0][2] += 1;
      else scores[2][0] += 1;
    }
    win = comapre(player[0], player[3]);
    if (win) {
      if (win === player[0]) scores[0][3] += 1;
      else scores[3][0] += 1;
    }
    win = comapre(player[1], player[2]);
    if (win) {
      if (win === player[1]) scores[1][2] += 1;
      else scores[2][1] += 1;
    }
    win = comapre(player[1], player[3]);
    if (win) {
      if (win === player[1]) scores[1][3] += 1;
      else scores[3][1] += 1;
    }
    win = comapre(player[2], player[3]);
    if (win) {
      if (win === player[2]) scores[2][3] += 1;
      else scores[3][2] += 1;
    }
    n++;
    res.write("<tr><td>--------</td><td>Player 1</td> &nbsp;&nbsp;");
    res.write("<td>Player 2</td> &nbsp;&nbsp;");
    res.write("<td>Player 3</td> &nbsp;&nbsp;");
    res.write("<td>Player 4</td></tr><br>");
    res.write("<tr><td> Player 1 </td> ");
    res.write("<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + scores[0][0] + "</td> ");
    res.write(
      "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + scores[1][0] + "</td> "
    );
    res.write(
      "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        scores[2][0] +
        "</td> "
    );
    res.write(
      "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        scores[3][0] +
        "</td></tr><br>"
    );
    res.write("<tr><td> Player 2 </td> ");
    res.write("<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + scores[0][1] + "</td> ");
    res.write(
      "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + scores[1][1] + "</td> "
    );
    res.write(
      "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        scores[2][1] +
        "</td> "
    );
    res.write(
      "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        scores[3][1] +
        "</td></tr><br>"
    );
    res.write("<tr><td> Player 3 </td> ");
    res.write("<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + scores[0][2] + "</td> ");
    res.write(
      "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + scores[1][2] + "</td> "
    );
    res.write(
      "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        scores[2][2] +
        "</td> "
    );
    res.write(
      "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        scores[3][2] +
        "</td></tr><br>"
    );
    res.write("<tr><td> Player 4 </td> ");
    res.write("<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + scores[0][3] + "</td> ");
    res.write(
      "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + scores[1][3] + "</td> "
    );
    res.write(
      "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        scores[2][3] +
        "</td> "
    );
    res.write(
      "<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        scores[3][3] +
        "</td></tr><br>"
    );
  }

  res.end();
});

function comapre(a, b) {
  if (a === b) return 0;
  else if ((a == "Rock") & (b == "Paper")) return b;
  else if ((a == "Rock") & (b == "Scissors")) return a;
  else if ((a == "Paper") & (b == "Rock")) return a;
  else if ((a == "Paper") & (b == "Scissors")) return b;
  else if ((a == "Scissors") & (b == "Rock")) return b;
  else if ((a == "Scissors") & (b == "Paper")) return a;
}

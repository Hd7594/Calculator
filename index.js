const express = require("express");

const app = express();

app.use(express.json());

/*
app.post("/calculate", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const operator = req.body.operator;

  if (num1 && num2 && operator) {
    if (
      operator === "+" ||
      operator === "-" ||
      operator === "*" ||
      operator === "/"
    ) {
      if (typeof num1 === "number" || typeof num2 === "number") {
        let result;
        if (operator === "+") {
          result = num1 + num2;
        }
        if (operator === "-") {
          result = num1 - num2;
        }
        if (operator === "/") {
          result = num1 / num2;
        }
        if (operator === "*") {
          result = num1 * num2;
        }
        res.json({ result: result });
      }
    }
  }
});

*/

app.post("/calculator", (req, res) => {
  const num1 = req.body.num1;
  const num2 = req.body.num2;
  const operator = req.body.operator;

  try {
    if (num1 && num2 && operator) {
      if (
        operator === "+" ||
        operator === "-" ||
        operator === "*" ||
        operator === "/"
      ) {
        if (typeof num1 === "number" || typeof num2 === "number") {
          let result;
          if (operator === "+") {
            result = num1 + num2;
          }
          if (operator === "-") {
            result = num1 - num2;
          }
          if (operator === "/") {
            result = num1 / num2;
          }
          if (operator === "*") {
            result = num1 * num2;
          }
          res.json({ result: result });
        }
      }
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  res.json({ message: "server not working" });
});

app.listen(3000, (req, res) => {
  console.log("server Launched");
});

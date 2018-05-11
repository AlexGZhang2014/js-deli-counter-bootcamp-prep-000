var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  return katzDeliLine[name] + 1;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return katzDeliLine[0];
  }
  katzDeliLine.shift();
}

function currentLine(katzDeliLine) {
  let string = "The line is currently: ";
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    for (let i = 0; i < katzDeliLine.length - 1; i++) {
      string.concat(`${i+1}. ${katzDeliLine[i]}, `);
    }
    string.concat(`${katzDeliLine.length}. ${katzDeliLine[katzDeliLine.length - 1]}`);
  }
  return string;
}
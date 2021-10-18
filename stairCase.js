function stairCase(n) {
  for (let i = 0; i < n; i++) {
    let spaces = n - i;
    let line = "";
    let hash = i + 1;

    while (spaces > 0) {
      line += " ";
      spaces--;
    }
    while (hash > 0) {
      line += "#";
      hash--;
    }

    line = line.substr(1);

    console.log(line);
  }
}

let result = stairCase(4);

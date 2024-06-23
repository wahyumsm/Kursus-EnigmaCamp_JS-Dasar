function generateTriangle(height) {
  let result = "";

  for (let i = 1; i <= height; i++) {

    let spaces = " ".repeat(height - i);

    // Create the triangle part with '#' characters
    let hashes = "#".repeat(2 * i - 1);

    // Combine spaces and hashes to form each line
    let line = spaces + hashes + "\n";

    // Append the line to the result
    result += line;
  }

  return result;
}

// Example usage:
let triangle = generateTriangle(5);
console.log(triangle);

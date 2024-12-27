const index = document.querySelector("input");

const lowerCaseOutput = document.querySelector("#lowercase span");
const upperCaseOutput = document.querySelector("#uppercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimOutput = document.querySelector("#trim span");


function capitalize(str) {
    if(!str) return str;
  return str[0].toUpperCase() + str.slice(1, str.lenght);
}
function camelCase(string) {
  const lowercaseString = string.toLowerCase();
  const wordsArray = lowercaseString.split(" ");
  const finalArray = wordsArray.map((word, i) => {
    if (i === 0) return word;
    return capitalize(word);
  });
  return finalArray.join("");
}

function pascalCase(string) {
    const lowercaseString = string.toLowerCase();
    const wordsArray = lowercaseString.split(" ");
    const finalArray = wordsArray.map((word) => {
      return capitalize(word);
    });
    return finalArray.join("");
  }
function snakeCase(string) {
    return string.replaceAll(" ", "_");
}
function kababCase(string) {
    return string.replaceAll(" ", "-");
}
function trim(string) {
    return string.replaceAll(" ", "");
}

function updateScreen() {
  lowerCaseOutput.innerText = index.value.trim().toLowerCase();
  upperCaseOutput.innerText = index.value.trim().toUpperCase();
  camelCaseOutput.innerText = camelCase(index.value.trim());
  pascalCaseOutput.innerText = pascalCase(index.value.trim());
  snakeCaseOutput.innerText = snakeCase(index.value.trim());
  kebabCaseOutput.innerText = kababCase(index.value.trim());
  trimOutput.innerText = trim(index.value);
 
}

updateScreen();
index.addEventListener("input",updateScreen);

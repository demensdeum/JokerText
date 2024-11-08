function upperEverySecondLetter(input) {
    let output = "";
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        let code = char.charCodeAt(0);

        if (i % 2 !== 0) {
            // Каждую вторую букву делаем заглавной
            if (code >= 0x61 && code <= 0x7A) {
                char = String.fromCharCode(code - 32); // Латиница, маленькие 'a'-'z' -> заглавные
            } else if (code >= 0x430 && code <= 0x44F) {
                char = String.fromCharCode(code - 32); // Кириллица, маленькие 'а'-'я' -> заглавные
            }
        } else {
            // Остальные буквы делаем маленькими
            if (code >= 0x41 && code <= 0x5A) {
                char = String.fromCharCode(code + 32); // Латиница, заглавные 'A'-'Z' -> маленькие
            } else if (code >= 0x410 && code <= 0x42F) {
                char = String.fromCharCode(code + 32); // Кириллица, заглавные 'А'-'Я' -> маленькие
            }
        }

        output += char;
    }
    return output;
}

var jokerTextMessageTransformer = function(message) {
    message = upperEverySecondLetter(message);
    return message;
};
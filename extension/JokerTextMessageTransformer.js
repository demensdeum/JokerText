function capitalizeFirstLowerSecond(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        var code = char.charCodeAt(0);

        // if (i % 2 === 0) {
        //     // Каждую первую букву делаем заглавной
        //     if (code >= 0x61 && code <= 0x7A) {
        //         char = String.fromCharCode(code - 32); // Латиница, маленькие 'a'-'z' -> заглавные
        //     } else if (code >= 0x430 && code <= 0x44F) {
        //         char = String.fromCharCode(code - 32); // Кириллица, маленькие 'а'-'я' -> заглавные
        //     }
        // } else {
        //     // Каждую вторую букву делаем маленькой
        //     if (code >= 0x41 && code <= 0x5A) {
        //         char = String.fromCharCode(code + 32); // Латиница, заглавные 'A'-'Z' -> маленькие
        //     } else if (code >= 0x410 && code <= 0x42F) {
        //         char = String.fromCharCode(code + 32); // Кириллица, заглавные 'А'-'Я' -> маленькие
        //     }
        // }

        output += char;
    }
    return input;
}

var jokerTextMessageTransformer = function(message) {
    message = capitalizeFirstLowerSecond(message);
    return message;
};
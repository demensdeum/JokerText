function capitalizeFirstLowerSecond(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        var code = char.charCodeAt(0);

        if (i % 2 === 0) {
            if (code >= 0x61 && code <= 0x7A) {
                char = String.fromCharCode(code - 32);
            } else if (code >= 0x430 && code <= 0x44F) {
                char = String.fromCharCode(code - 32);
            }
        } else {
            // Каждую вторую букву делаем маленькой
            if (code >= 0x41 && code <= 0x5A) {
                char = String.fromCharCode(code + 32);
            } else if (code >= 0x410 && code <= 0x42F) {
                char = String.fromCharCode(code + 32);
            }
        }

        output += char;
    }
    return output;
}

function makeJoke(input) {
    // var output = input + " JOKER";
    // return output;

    var output = "";
    
    var jokeType = "JuMp";

    if (jokeType == "cypher") {
        for (var i = 0; i < input.length; i++) {
            var code = input.charCodeAt(i);
            output += code;
            output += ".";
        }
    }

    if (jokeType == "JuMp") {
        output = capitalizeFirstLowerSecond(input);
    }

    return output;
}

var jokerTextMessageTransformer = function(message) {
    var output = makeJoke(message);
    return output;
};
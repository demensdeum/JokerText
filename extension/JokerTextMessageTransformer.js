function capitalizeFirstLowerSecond(input) {
    var output = "";
    for (var i = 0; i < input.length; i++) {
        var char = input.charAt(i);

        if (i % 2 === 0) {
            output += char.toUpperCase();
        } else {
            output += char.toLowerCase();
        }

    }
    return output;
}

function makeJoke(input) {
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

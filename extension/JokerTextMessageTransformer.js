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
        for (var i = 0; i < input.length; i++) {
            var code = input.charCodeAt(i);
            output += code;
            output += ".:).";
        }
    }

    return output;
}

var jokerTextMessageTransformer = function(message) {
    var output = makeJoke(message);
    return output;
};
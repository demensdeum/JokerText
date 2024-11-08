function capitalizeFirstLowerSecond(input) {
    // var output = input + " JOKER";
    // return output;

    var output = "";
    for (var i = 0; i < input.length; i++) {
        var code = input.charCodeAt(i);
        output += code;
        output += ".";
    }
    return output;
}

var jokerTextMessageTransformer = function(message) {
    var output = capitalizeFirstLowerSecond(message);
    return output;
};
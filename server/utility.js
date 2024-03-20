exports.capitalize = function(str) {
    const firstLetter = str.split("")[0];
    return firstLetter.toUpperCase() + str.slice(1);
}

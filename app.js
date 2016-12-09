var fs = require('fs');

var length = 0;
function parseCommand(line) {
    var l = line;
    /* Part 1
    while(l.length > 0) {
        var result = (/(\((\d+)x(\d+)\))/g).exec(l);
        if (result) {

            length += result.index 
                + (Number.parseInt(result[2]) * Number.parseInt(result[3]));
            l = l.substr(result.index + result[0].length + Number.parseInt(result[2]));
        } else {
            length += l.length;
            l = '';
        }
    }
    */

    /* Part 2 */
    length += decompress(l, 1);
}

function decompress(part, multiplier) {
    var result = (/(\((\d+)x(\d+)\))/g).exec(part);

    if (result) {
        var letters = Number.parseInt(result[2]);
        return (result.index * multiplier)
            + decompress(part.substr(
                result.index + result[1].length,
                letters
            ), multiplier * Number.parseInt(result[3]))
            + decompress(part.substr(
                result.index + result[1].length + letters
            )
            , multiplier);
    } else {
        return part.length * multiplier;
    }
}

fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

  var lines = data.split('\n');
  
  lines.forEach(function(e,i) {
      parseCommand(e.trim());
  });

  console.log(length);

});
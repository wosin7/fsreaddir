var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, data) {
    console.log('lala'.blue)
    console.log(data);
    fs.writeFile('./tekst.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
});
});

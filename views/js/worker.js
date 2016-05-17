this.onmessage = function (e) {
    console.log('hi');
    var data = e.data;
    var adjectives = e.data.adjectives;
    var nouns = e.data.nouns;
    var k = e.data.k;
    var l = e.data.l;
    var arr = [];

        arr.push({
            adj:adj,
            noun:noun,
            randomA:randomA,
            randomN:randomN
        });
    }
    postMessage(arr);




    /*
    var s = data.s;
    var cols = data.cols;
    var position = data.position;
    var arr = [];
    for (var i = 0; i < 200; i++) {
        var elem = {};
        var phase = Math.sin((position / 1250) + (i % 5));
        elem.left = (i % cols) * s;
        elem.styleLeft = elem.left + 100 * phase + 'px';
        elem.styleTop = (Math.floor(i / cols) * s) + 'px';
        arr.push(elem);
    }
    postMessage(arr);*/
}

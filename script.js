//out.send([144, 60, 50]); Note On
//out.send([128, 60, 50]); Note Off
var elem = null
var mainColor = rgb(80, 80, 80)
var CreatingEffect = false;



var Launchpad = [

    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0

];

var Page = "a"

function setPage(val) {
    switch (val) {
        case 1:
            Page = "a"
            break;

        case 2:
            Page = "b"
            break;

        case 3:
            Page = "c"
            break;

        case 4:
            Page = "d"
            break;

        case 5:
            Page = "e"
            break;

        case 6:
            Page = "f"
            break;

        case 6:
            Page = "g"
            break;

        case 6:
            Page = "h"
            break;

        default:
            Page = "a"

    }
}



var Theme = x = {
    aInternal: true,
    aListener: function(val) {},
    set Now(val) {
        this.aInternal = val;
        this.aListener(val);
    },
    get Now() {
        return this.aInternal;
    },
    registerListener: function(listener) {
        this.aListener = listener;
    }
}

function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}

function setLed(out, state, note, velocity) {
    if (state) { out.send([144, note, velocity]) } else { out.send([128, note, 0]) }
}

var VelocityConverter = {
    0: [0, 0, 0],
    1: [150, 150, 150],
    2: [200, 200, 200],
    3: [255, 255, 255],
    4: [255, 127, 127],
    5: [255, 0, 0],
    6: [150, 0, 0],
    7: [100, 0, 0],
    8: [255, 208, 148],
    9: [255, 135, 15],
    10: [188, 106, 12],
    11: [150, 99, 12],
    12: [255, 221, 149],
    13: [255, 255, 0],
    14: [150, 150, 0],
    15: [100, 100, 0],
    16: [160, 160, 9],
    17: [137, 255, 121],
    18: [113, 255, 14],
    19: [87, 195, 11],
    20: [75, 120, 7],
    21: [13, 255, 147],
    22: [13, 246, 13],
    23: [11, 209, 11],
    24: [8, 126, 8],
    25: [132, 255, 155],
    26: [15, 255, 117],
    27: [11, 195, 90],
    28: [10, 155, 80],
    29: [123, 255, 166],
    30: [14, 255, 159],
    31: [9, 188, 125],
    32: [9, 155, 114],
    33: [125, 255, 201],
    34: [15, 255, 201],
    35: [17, 189, 151],
    36: [12, 149, 124],
    37: [124, 255, 255],
    38: [14, 232, 255],
    39: [8, 188, 188],
    40: [8, 164, 167],
    41: [14, 178, 255],
    42: [11, 137, 188],
    43: [8, 97, 126],
    44: [159, 178, 255],
    45: [13, 13, 246],
    46: [13, 13, 188],
    47: [10, 10, 132],
    48: [182, 167, 255],
    49: [120, 14, 255],
    50: [99, 11, 202],
    51: [81, 9, 160],
    52: [255, 162, 221],
    53: [255, 17, 221],
    54: [202, 11, 178],
    55: [142, 7, 111],
    56: [255, 137, 172],
    57: [255, 10, 165],
    58: [187, 5, 95],
    59: [159, 4, 79],
    60: [255, 99, 9],
    61: [255, 165, 9],
    62: [209, 181, 11],
    63: [117, 156, 16],
    64: [66, 111, 9],
    65: [7, 91, 61],
    66: [11, 86, 149],
    67: [13, 13, 202],
    68: [12, 121, 110],
    69: [93, 17, 202],
    70: [189, 182, 169],
    71: [60, 60, 60],
    72: [255, 10, 10],
    73: [209, 255, 16],
    74: [165, 188, 11],
    75: [133, 231, 14],
    76: [86, 182, 12],
    77: [12, 202, 128],
    78: [14, 213, 231],
    79: [14, 155, 231],
    80: [98, 15, 231],
    81: [139, 10, 231],
    82: [255, 122, 211],
    83: [85, 56, 6],
    84: [255, 114, 16],
    85: [197, 255, 15],
    86: [192, 255, 115],
    87: [9, 255, 9],
    88: [121, 255, 113],
    89: [119, 255, 162],
    90: [121, 255, 212],
    91: [140, 224, 255],
    92: [92, 143, 161],
    93: [132, 135, 202],
    94: [228, 115, 255],
    95: [255, 22, 169],
    96: [255, 136, 23],
    97: [202, 193, 15],
    98: [164, 255, 19],
    99: [155, 143, 10],
    100: [121, 103, 9],
    101: [9, 106, 64],
    102: [8, 95, 74],
    103: [65, 63, 73],
    104: [54, 64, 77],
    105: [106, 92, 70],
    106: [106, 9, 9],
    107: [173, 114, 101],
    108: [202, 142, 90],
    109: [255, 220, 102],
    110: [189, 255, 104],
    111: [131, 173, 12],
    112: [62, 62, 78],
    113: [255, 255, 178],
    114: [184, 255, 177],
    115: [180, 203, 246],
    116: [207, 192, 246],
    117: [100, 100, 100],
    118: [173, 173, 173],
    119: [205, 223, 205],
    120: [183, 14, 14],
    121: [116, 10, 10],
    122: [8, 188, 8],
    123: [7, 142, 7],
    124: [185, 188, 11],
    125: [143, 129, 10],
    126: [173, 130, 9],

    127: [255, 140, 0],
}

function VelocityToRGB(velocity) {
    return rgb(VelocityConverter[velocity][0], VelocityConverter[velocity][1], VelocityConverter[velocity][2])
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function isString(x) {
    return Object.prototype.toString.call(x) === "[object String]"
}



document.onkeydown = function(e) {
    switch (e.key) {
        case 'ArrowUp':
            console.log("Up")
            break;
        case 'ArrowDown':
            console.log("down")
            break;
        case 'ArrowLeft':
            console.log("<=")
            break;
        case 'ArrowRight':
            console.log("=>")
    }
};



function CreateLed(buttonIndex, visible) {
    if (visible) {
        $('#Launchpad').append(
            $('<div>').prop({
                id: 'Button' + buttonIndex,
                className: 'Button'

            })
        );
    } else {
        $('#Launchpad').append(
            $('<div>').prop({
                id: 'Button' + buttonIndex,
                className: 'Button'

            })
        );
        document.getElementById('Button' + buttonIndex).style.visibility = "hidden";
    }
}

function ChangeButton(note, velocity) {
    if (velocity > 0) {
        if (note == 44 || note == 45 || note == 54 || note == 55) {
            if (Theme.Now) {
                document.getElementById("Button" + note).style.backgroundColor = VelocityToRGB(velocity);
            } else {
                document.getElementById("Button" + note).style.backgroundColor = VelocityToRGB(velocity);
                document.getElementById("InnerMiddle" + note).style.backgroundColor = VelocityToRGB(velocity);
            }
        } else {
            if (Theme.Now) {
                document.getElementById("Button" + note).style.borderColor = VelocityToRGB(velocity);
            } else {
                document.getElementById("Button" + note).style.borderColor = VelocityToRGB(velocity);
                document.getElementById("Button" + note).style.backgroundColor = VelocityToRGB(velocity);
            }
        }
    } else {
        if (note == 44 || note == 45 || note == 54 || note == 55) {
            if (Theme.Now) {
                document.getElementById("Button" + note).style.backgroundColor = mainColor;
            } else {
                document.getElementById("Button" + note).style.backgroundColor = mainColor;
                document.getElementById("InnerMiddle" + note).style.backgroundColor = mainColor;
            }
        } else {
            if (Theme.Now) {
                document.getElementById("Button" + note).style.borderColor = mainColor;
            } else {
                document.getElementById("Button" + note).style.borderColor = mainColor;
                document.getElementById("Button" + note).style.backgroundColor = mainColor;
            }
        }

    }
}

$(document).ready(function() {
    /*for (var i =0 ; i < 128; i++) {
        console.log(i + ': [],')
    }*/



    document.getElementById("Stickers").addEventListener('click', event => {
        var e = document.getElementById("Stickers");
        Theme.Now = e.checked;
    });


    var ButtonNow = 0;

    for (var i = 0; i <= 9; i++) {
        for (var j = 0; j <= 9; j++) {
            CreateLed(ButtonNow, true);
            if (ButtonNow % 10 == 0) {
                document.getElementById('Button' + ButtonNow).style.clear = 'both';
            }
            ButtonNow++;
        }
    }

    document.getElementById('Button' + 99).style.visibility = 'hidden';
    document.getElementById('Button' + 90).style.visibility = 'hidden';
    document.getElementById('Button' + 0).style.visibility = 'hidden';
    document.getElementById('Button' + 9).style.visibility = 'hidden';


    for (var i = 1; i <= 8; i++) {
        document.getElementById('Button' + i).style.borderRadius = '50%';
        document.getElementById('Button' + i).style.marginBottom = '10px';
        document.getElementById('Button' + i).style.backgroundColor = 'black';
        document.getElementById('Button' + i).className = 'RadialButton';
    }

    for (var i = 90; i <= 99; i++) {
        document.getElementById('Button' + i).style.borderRadius = '50%';
        document.getElementById('Button' + i).style.marginTop = '10px';
        document.getElementById('Button' + i).style.backgroundColor = 'black';
        document.getElementById('Button' + i).className = 'RadialButton';
    }

    for (var i = 1; i <= 8; i++) {
        document.getElementById('Button' + (10 * i)).style.borderRadius = '50%';
        document.getElementById('Button' + (10 * i)).style.marginRight = '10px';
        document.getElementById('Button' + (10 * i)).style.backgroundColor = 'black';
        document.getElementById('Button' + (10 * i)).className = 'RadialButton';
    }

    for (var i = 1; i <= 8; i++) {
        document.getElementById('Button' + ((10 * i) + 9)).style.borderRadius = '50%';
        document.getElementById('Button' + ((10 * i) + 9)).style.marginLeft = '10px';
        document.getElementById('Button' + ((10 * i) + 9)).style.backgroundColor = 'black';
        document.getElementById('Button' + ((10 * i) + 9)).className = 'RadialButton';
    }

    //document.getElementById('Button' + 44).style.clipPath = 'polygon(100% 60%, 60% 100%, 0% 100%, 0% 0%, 100% 0%, 100% 0%)';
    document.getElementById('Button' + 44).className = 'MiddleLD';
    $('#Button' + 44).append(
        $('<div>').prop({
            id: 'InnerMiddle' + 44,
        })
    );

    document.getElementById('Button' + 45).className = 'MiddlePD';
    $('#Button' + 45).append(
        $('<div>').prop({
            id: 'InnerMiddle' + 45,
        })
    );

    document.getElementById('Button' + 54).className = 'MiddleLU';
    $('#Button' + 54).append(
        $('<div>').prop({
            id: 'InnerMiddle' + 54,
        })
    );

    document.getElementById('Button' + 55).className = 'MiddleRU';
    $('#Button' + 55).append(
        $('<div>').prop({
            id: 'InnerMiddle' + 55,
        })
    );



});

function getAndSend(note, velocity) {

    navigator.requestMIDIAccess().then(midiAccess => {
        Array.from(midiAccess.outputs).forEach(RawOut => {
            if (RawOut[0] == "output-1") {
                out = RawOut[1];

                out.send([144, note, velocity])


            }
        });
    });
}

var EffectNotes = [];

function CreateNewEffect(btn) {
    if (CreatingEffect == false) {
        CreatingEffect = true;
        btn.innerText = "Cancel";
    } else {
        CreatingEffect = false;
        Array.from(EffectNotes).forEach((v, i) => {
            getAndSend(v, 0);
            //setLed(getOut(), true, v, 0);
            ChangeButton(v, 0);
            console.log(EffectNotes)
            EffectNotes.splice(0, 1)
            console.log(EffectNotes)
        });

        btn.innerText = "Create New Effect";
    }
}

function SaveEffect(btn) {
    console.log("save")
}



Theme.registerListener(function(val) {
    if (val) {

        Array.prototype.forEach.call($('#Launchpad').children(), child => {
            if (child.id == 'Button44' || child.id == 'Button45' || child.id == 'Button54' || child.id == 'Button55') {
                child.children[0].style.backgroundColor = rgb(0, 0, 0);
            } else {
                child.style.backgroundColor = rgb(0, 0, 0);
            }
        });

    } else {
        Array.prototype.forEach.call($('#Launchpad').children(), child => {
            if (child.id == 'Button44' || child.id == 'Button45' || child.id == 'Button54' || child.id == 'Button55') {
                child.children[0].style.backgroundColor = mainColor;
            } else {
                child.style.backgroundColor = mainColor;
            }
        });
    }
});



async function PlayEffect(out, Path, state, notepressed) {


    $.ajax({
        url: Path,
        dataType: 'json',
        success: function(data) {


            //console.log(Launchpad[notepressed].meta)

            console.log("Starting Effect...");
            console.log("-----------------------");

            async function Play() {
                //setLed(out, true, 11, 0);
                Array.from(data[0]).forEach(outdata => {
                    setLed(out, true, outdata, 0)
                });

                for (var rawi = 0; rawi < (Object.keys(data).length - 2); rawi++) {
                    i = rawi + 1;
                    if (isString(data[i][1])) {
                        var time = data.meta[data[i][1]];
                    } else {
                        var time = data[i][1];
                    }


                    Array.from(data[i]).forEach(function callback(value1, index1) {

                        if (Array.isArray(value1)) {

                            if (Object.keys(value1).length < 2) {





                                if (Array.isArray(value1[0])) {

                                    Array.from(value1[0]).forEach(note => {

                                        setLed(out, true, note, 0);
                                        ChangeButton(note, 0);
                                    });
                                } else {

                                    setLed(out, true, value1[(Object.keys(value1).length - 1)], 0);
                                    ChangeButton(note, 0);
                                }





                            } else {
                                if (Array.isArray(value1[(Object.keys(value1).length - 1)])) {
                                    Array.from(value1).forEach(function callback(value2, index2) {
                                        //console.log(value2)
                                        if (Object.keys(value2).length < 2) {

                                            if (Array.isArray(value2[0])) {

                                                Array.from(value2[0]).forEach(note => {
                                                    setLed(out, true, note, 0);
                                                    ChangeButton(note, 0);
                                                });

                                            } else {
                                                setLed(out, true, value2[0], 0);
                                                ChangeButton(note, 0);
                                            }

                                        } else {
                                            var velocity = value2[(Object.keys(value2).length - 1)];
                                            if (Array.isArray(value2[0])) {
                                                Array.from(value2[0]).forEach(note => {
                                                    setLed(out, true, note, velocity);
                                                    ChangeButton(note, velocity);
                                                });
                                            } else {
                                                setLed(out, true, value1[0], velocity);
                                                ChangeButton(note, velocity);
                                            }
                                        }
                                    });
                                } else {
                                    var velocity = value1[(Object.keys(value1).length - 1)];

                                    if (Array.isArray(value1[0])) {
                                        Array.from(value1[0]).forEach(note => {
                                            setLed(out, true, note, velocity);
                                            ChangeButton(note, velocity);
                                        });
                                    } else {
                                        setLed(out, true, value1[0], velocity);
                                        ChangeButton(note, velocity);
                                    }

                                }
                            }

                        } else {
                            //time 
                        }






                    });
                    await sleep((time * 1000) / (data.meta.bpm / 120));
                }
            }

            if (data.meta.whenplay == state) {
                Play()
            } else if (data.meta.whenplay == null) {
                Play()
            }

            console.log("-----------------------");
        },

        error: function() {
            console.error("Error:: Cannot To Get Effect")
        },

    });




}






navigator.requestMIDIAccess().then(midiAccess => {
    Array.from(midiAccess.inputs).forEach(input => {
        input[1].onmidimessage = (msg) => {
            var note = msg.data[1];
            var velocity = msg.data[2];


            //ChangeButton(note, velocity);







            Array.from(midiAccess.outputs).forEach(RawOut => {
                if (RawOut[0] == "output-1") {
                    out = RawOut[1];
                    //out.send([144, 60, 50]); Note On
                    //out.send([128, 60, 50]); Note Off
                    //console.log(RawOut)





                    if (CreatingEffect == false) {
                        console.log("Loocking for: " + note + Page + ".json")
                        if (velocity > 0) {
                            PlayEffect(out, `Projects/Test/Effects/${note+Page}.json`, true, note);
                        } else {
                            PlayEffect(out, `Projects/Test/Effects/${note+Page}.json`, false, note);
                        }
                    } else {
                        if (velocity > 0) {
                            if (EffectNotes.includes(note)) {
                                setLed(out, true, note, 0)
                                ChangeButton(note, 0)
                                    //console.log(EffectNotes)
                                Array.from(EffectNotes).forEach((v, i) => {
                                    if (v == note) {
                                        EffectNotes.splice(i, 1)
                                    }
                                });
                                //console.log(EffectNotes)
                            } else {
                                setLed(out, true, note, 3)
                                ChangeButton(note, 3)




                                Array.prototype.push.apply(EffectNotes, [note]);


                            }

                        }
                    }

                    //setLed(out, true, note, velocity);

                }
            });
        }
    })
});
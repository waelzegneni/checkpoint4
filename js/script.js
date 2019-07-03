
$(".dialog").hide();
$(".dialog1").hide();


var b = 0;
document.getElementById("bold").addEventListener("click", function () {
    if (b == 0) {
        document.getElementById("textArea").style.fontWeight = "bolder";
        b = 1;
    }
    else {
        document.getElementById("textArea").style.fontWeight = "normal";
        b = 0;
    }
}
);

var i = 0;
document.getElementById("italic").addEventListener("click", function () {
    if (i == 0) {
        document.getElementById("textArea").style.fontStyle = "italic";
        i = 1;
    }

    else {
        document.getElementById("textArea").style.fontStyle = "";
        i = 0;
    }
}
);

var u = 0;
document.getElementById("underline").addEventListener("click", function () {
    if (u == 0) {
        document.getElementById("textArea").style.textDecoration = "underline";
        u = 1;
    }
    else {
        document.getElementById("textArea").style.textDecoration = "none";
        u = 0;
    }
}
);



function handleFontSize() {
    var fontsize = document.getElementById("fontsize").value;
    document.getElementById("textArea").style.fontSize = fontsize;
}

function handleTextFamily() {
    var fontFamily = document.getElementById("textfamily").value;
    document.getElementById("textArea").style.fontFamily = fontFamily;
}



$(".button1").click(function () {
    $(".dialog").dialog();
}
);


$(".button1").click(function () {
    $(".dialog1").dialog();
}
);

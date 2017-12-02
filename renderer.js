const monaco = require("monaco-loader");


monaco().then(function (monaco) {

    var edInst = monaco.editor.create(document.getElementById("vsEditor"), {
        "language": "javascript",
        theme: 'vs-dark',
        automaticLayout: true

    })

})
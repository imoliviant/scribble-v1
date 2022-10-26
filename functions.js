// Mint
function mintScribble() {
    var amount1 = $("#amount1").val();
    var content = "Sending transaction from: ";
    content += scribbleChef;
    $("#scrib1").html(content);
    var event = contractScribble.methods.mint(amount1).send({ from: scribbleChef, value: 100 * amount1 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent!: ";
            //alert("Done!");
    content += JSON.stringify(receipt.transactionHash);
    $("#scrib1").html(content);
        });;
  };

function supply() {
    var content = "";
    var event = contractScribble.methods.totalSupply().call({ from: scribbleChef })
        .then(function (result) {
            console.log(result);
    var content = "Already minted: ";
    content += result;
    $("#scrib2").html(content);
    });
};

// Wallet
function wallet() {
    var content = "";
        var event = contractScribble.methods.balanceOf(scribbleChef).call({ from: scribbleChef })
        .then(function (result) {
    balance = result;
    for(var i = 0; i < balance; i++){
    var event = contractScribble.methods.tokenOfOwnerByIndex(scribbleChef, i).call({ from: scribbleChef })
        .then(function (result) {
    var event = contractScribble.methods.tokenURI(Number(result)).call()
        .then(function (result1) {
    content += "<img src=https://dogescribble.netlify.app/scribbles/nfts/"+result+".png width=150 height=150>" + "<br><br>Id: " + result;
    $("#scrib3").html(content);
    });
    });
    };
    });
};

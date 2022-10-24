// mint scribbles
function mintScribbles() {
    var amount1 = $("#amount1").val();
    var content = "Sending transaction from: ";
    content += scribbleChef;
    $("#scrib1").html(content);
    var event = contractScribble.methods.batchMint(scribbleChef, amount1).send({ from: scribbleChef, value: 25000000000000000000 * amount1 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent!: ";
            //alert("Done!");
    content += JSON.stringify(receipt.transactionHash);
    $("#scrib1").html(content);
        });;
};

// minted scribbles
function supplyMinted() {
    var content = "";
    var event = contractScribble.methods.totalSupply().call({ from: scribbleChef })
        .then(function (result) {
            console.log(result);
    var content = "Already minted: ";
    content += result;
    $("#scrib2").html(content);
    });
};

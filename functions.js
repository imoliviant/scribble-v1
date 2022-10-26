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

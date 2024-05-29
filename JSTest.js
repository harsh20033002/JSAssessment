const NFTs=[]

function mintNFT (_name, _eyeColor, _shirtType, _bling) {
    const NFT={
        "name": _name,
        "eyeColor": _eyeColor,
        "shirtType": _shirtType,
        "bling": _bling
    }
    NFTs.push(NFT);
    console.log("Minted:" + _name);
}
function listNFTs () {
for(let i=0; i < NFTs.length; i++) {
    console.log("\nID: \t\t\t\t" +(i+1));
    console.log("Name: \t\t\t"+ NFTs[i].name);
    console.log("Eyecolor: \t"+ NFTs[i].eyeColor);
    console.log("Shirt Type: " + NFTs[i].shirtType);
    console.log("Bling: \t\t "+ NFTs[i].bling);
}
}
function getTotalSupply() {
    console.log("\n" + NFTs.length);
}
mintNFT("Harsh", "Black", "Hoodie", "Gold Chain");
mintNFT("Salman", "Blue", "Hoodie", "Gold Chain");
mintNFT("Sharukh", "Blue", "Hoodie", "Gold Chain");
mintNFT("Doremon", "Blue", "Hoodie", "Gold Chain");
listNFTs();
getTotalSupply();

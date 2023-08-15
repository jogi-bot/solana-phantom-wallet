const web3 = require('@solana/web3.js');

async function connectToPhantom() {

  const connection = new web3.Connection(
    web3.clusterApiUrl('mainnet-beta') 
  );

  
  const publicKey = new web3.PublicKey('//write your own public key //#note write on string mode ');

  
  const balance = await connection.getBalance(publicKey);

  console.log(`Balance for wallet ${publicKey.toBase58()}: ${balance}`);
}

connectToPhantom().catch(error => console.error(error));

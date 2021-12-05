class Config{
  constructor(opts) {
    this.network = "T"
    this.nodeURL = "https://nodes-testnet.wavesnodes.com"
    this.providerUrl = "https://testnet.waves.exchange/signer/"
    this.userAddress = "3P9ey9ngKScPodYA9qpGEuPGYpUWxwwGy1Y"
    this.dappAddress = "3NBbHi3Vj5yt37Yv9XZtfwMy7KnZUWSY3uM"  // 3NAS3hC5PcNgwBXjgzj4F8c4s6GwvfbCAx7
  }

  get(key) {
    return this[key];
  }

  set(key, val) {
    this[key] = val;
  }

}
module.exports = Config
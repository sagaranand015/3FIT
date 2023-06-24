export const GYM_STORE_CONTRACT = "0xe1751468a2eE67B29A6fFfe007C1D544b4055481";
export const GYM_SUBSCRIPTION_CONTRACT = "0x53b21646a2b013eb17898915466e400AeD9f18D5";

export function GetCidFromIpfsLink(ipfsLink) {
    if (ipfsLink) {
        const arr = ipfsLink.split("//");
        if (arr.length > 1) {
            return arr[1];
        }
    }
    return "";
}

export function GetIpfsFileUrl(cid) {
    return `https://${cid}.ipfs.w3s.link`
}

export const shortenAddress = (address) => {
    if (address)
        return address.substring(0, 6) + "..." + address.substring(address.length - 4, address.length)
}

export function isSubscriptionValid(validTillTime) {
    const now = (Date.now() / 1000); // Unix timestamp in milliseconds
    if (now > validTillTime) {
        return false;
    }
    return true;
}

export function GetDateInCurrentTimezone(validTillTime) {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(validTillTime);
    // return d.toString();
    return d.getFullYear().toString() + "-" + (d.getMonth() + 1).toString() + "-" + d.getDate().toString();
}
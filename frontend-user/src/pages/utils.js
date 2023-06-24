export const GYM_STORE_CONTRACT = "0xf8228E24F6c6F53cB22af72192114bB58022918B";
export const GYM_SUBSCRIPTION_CONTRACT = "0x13D6E226a77d8420878e0E04C514d1f3b702bBd0";

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
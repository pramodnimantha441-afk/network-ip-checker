function checkIP() {
    let ip = document.getElementById("ipInput").value;
    let firstOctet = parseInt(ip.split('.')[0]);
    let result = document.getElementById("result");

    if (isNaN(firstOctet)) {
        result.innerHTML = "Please enter a valid IP!";
        return;
    }

    let ipClass = "";
    if (firstOctet >= 1 && firstOctet <= 126) ipClass = "Class A (Large Network)";
    else if (firstOctet >= 128 && firstOctet <= 191) ipClass = "Class B (Medium Network)";
    else if (firstOctet >= 192 && firstOctet <= 223) ipClass = "Class C (Small Office/Home)";
    else ipClass = "Special/Multicast Class";

    result.innerHTML = "Result: This is a " + ipClass;
}
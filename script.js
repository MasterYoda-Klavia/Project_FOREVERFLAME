const params = new URLSearchParams(
    window.location.search
);


const token = params.get("token");


const status = document.getElementById("status");



if(token === "HEARTLOCK_SUCCESS") {


    status.innerHTML =
    `
    PARTNER VERIFIED
    <br><br>
    MEMORY VAULT UNLOCKED
    `;


}
else {


    status.innerHTML =
    `
    ACCESS DENIED
    <br><br>
    SIGNIFICANT OTHER MISSING
    `;


}
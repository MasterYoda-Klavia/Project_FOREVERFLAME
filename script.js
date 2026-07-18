const params = new URLSearchParams(
    window.location.search
);


const token = params.get("token");


const status = document.getElementById("status");



if(token === "712453ce1475d5415f7e3f2b2069ab829829bc11fd72c084c33b3c3b9062f7f8") {


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

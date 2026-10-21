

const postmethod = async(url, data) =>{
    try{
        const response = await fetch(url, {
            method:"POST",
            headers: {
                "Content-Type": "application.json"
            },
            body: JSON.stringify(data)
        })
        if(!response.ok){
            throw new Error("Hiba történt.")
        }
        return await response.json()
    }
    catch(error){
        throw new Error("Hiba")
    }
}

document.addEventListener("DOMContentLoaded", async()=>{
    let url = "/api/vote"
    document.getElementById('gomb1').addEventListener('click', () => {
        fetch('/api/vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ option: 'opcio1' }) // Ezt kapja meg a backend a req.body-ban
        });
    });


    document.getElementById('gomb2').addEventListener('click', () => {
        fetch('/api/vote', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ option: 'opcio2' }) // Ezt kapja meg a backend a req.body-ban
        });
    });
    
    

})
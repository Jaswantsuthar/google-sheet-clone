const download =document.getElementById("download");
const upload =document.getElementById("upload")

download.addEventListener("click" , ()=>{
    let blob = new Blob([JSON.stringify(state)] , {type: "application/json"})
    let url =URL.createObjectURL(blob)
    let link =document.createElement("a");
    link.href=url;
    link.download="speadsheet.json"
    link.click();
})
upload.addEventListener("change", (e) =>{
    let file =e.target.files[0];
    if(file.type !== "appliaction/json") {
        alert("please upload json file only")
    }

    let fileReader= new FileReader();
    
    fileReader.onload=function (e){
        let fileData =JSON.parse(e.target.result);

        console.log(fileData)
        //  todo : data should fill to same cell
        for (let cellId in fileData) {
            if (fileData.hasOwnProperty(cellId)) {
                // Update the state with the data from the uploaded file
                state[cellId] = fileData[cellId];

                // Update the corresponding cell in the spreadsheet
                let cell = document.getElementById(cellId);
                if (cell) {
                    cell.innerText = fileData[cellId].innerText;
                    applyStyle(fileData[cellId]); // Apply styles if present in the uploaded data
                }
            }
        }
    };
    
    fileReader.readAsText(file);
})
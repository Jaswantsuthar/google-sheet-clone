const headRow =document.getElementById("head");
const sno =document.getElementById("sno1");
const body =document.getElementById("body1");

const rows =100, column =26;

// for head cell 
for(let i=1;i< column + 1 ;i++){
    const headCell = document.createElement("div")
    if(i >=1){
        headCell.innerText =String.fromCharCode(i+64)
        headCell.className="colHead"
    }
    headRow.append(headCell)
}

// for serial number cell
for(let i=0;i< rows  ;i++){
    const snoCell = document.createElement("div");
    snoCell.innerText=i+1;
    snoCell.className="snoCell";
    sno.append(snoCell)
}

// for all body cells
for(let i=1;i<=rows ;i++){
    const row =document.createElement("div")
    row.className="row"
    for(let j=1; j<=column;j++){
        const cell =document.createElement("div")
        cell.className="cell";
        cell.id=`${String.fromCharCode(j+64)}${i}`;
        cell.contentEditable=true;
        cell.addEventListener("focus", onFocusCell);
        cell.addEventListener("input", onChangeInnerText);
        row.appendChild(cell)
        
    }
    body.appendChild(row)
}
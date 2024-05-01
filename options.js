const form=document.querySelector("#options-form")
const activeCellElement=document.querySelector(".selected-cell")
const expression =document.querySelector("#inputBox")
let selectedCell =null

let state ={};

const defaultState ={
    innerText: "",
    isBold:false,
    alignment:"left",
    isUnderlined:false,
    isItalic:false,
    fontSize:"16px",
    fontFamily:"sans serif",
    textColor:"#000000",
    backgroundColor:"#ffffff"
}
function applyCellInfoToForm(){
    if(state[selectedCell.id]){
        //already edited cell
        const data =state[selectedCell.id];
        for(let key in data){
            if(form[key].type === "checkbox"){
                form[key].checked =data[key];
            }
            form[key].value =data[key];
        }
    }
    else{
        //newly focus cell
        form.reset();
    }
}

function onChangeInnerText(e){
    if(state[selectedCell.id]){
        state[selectedCell.id].innerText=selectedCell.innerText;
    }
    else{
        state[selectedCell.id]={...defaultState, innerText: selectedCell.innerText} 
    }
}

function onFocusCell(e){
    if(selectedCell){
        selectedCell.classList.remove("active-cell")
    }
    selectedCell=e.target;
    activeCellElement.innerHTML=selectedCell.id;
    selectedCell.classList.add("active-cell")
    applyCellInfoToForm();
}

function applyStyle(styles){
    //takes styles from user and update it to active cell
    selectedCell.style.fontSize= styles.fontSize + "px";
    selectedCell.style.fontFamily=styles.fontFamily;
    selectedCell.style.fontWeight =styles.isBold ? "bold" : "400";
    selectedCell.style.fontStyle =styles.isItalic ? "italic" : "normal";
    selectedCell.style.textDecoration =styles.isUnderlined ? "underline" : "none";
    selectedCell.style.textAlign =styles.alignment;
    selectedCell.style.color =styles.textColor;
    selectedCell.style.backgroundColor =styles.backgroundColor;

}

form.addEventListener("change", function(){
    if(!selectedCell){
        alert("Please select the cell before making the changes")

        form.reset();
        return;
    }
    const formData ={
        fontFamily:form.fontFamily.value,
        fontSize: form.fontSize.value,
        isBold: form.isBold.checked,
        isItalic: form.isItalic.checked,
        isUnderlined: form.isUnderlined.checked,
        alignment: form.alignment.value,
        textColor: form.textColor.value,
        backgroundColor: form.backGroundColor.value,
        
    }
    //add data to state object
    state[selectedCell.id]={...formData, innerText: selectedCell.innerText}
    applyStyle(formData)
})
expression.addEventListener("keyup", (e) => {
     if (e.code === "Enter" && selectedCell){
        let expressions = expression.value;
        let result =eval(expressions)
        selectedCell.innerHTML =result;
     }
})
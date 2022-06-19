const fileInputControl = document.getElementById('fileInputControl');

fileInputControl.addEventListener('change',function(event){
    const file_instruction = document.getElementById('file_instruction');
    const dombody = document.getElementById('dombody');
    var files = event.target.files;
    files.length > 0 ? dombody.innerHTML = "" : '';
    file_instruction.innerHTML = files.length != 1 ? `${files.length} files` : `${files.length} files`;
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    for(let i=0;i<files.length+1;i++){
        const row = document.createElement("tr");
        if(i == 0){
            const cell1 = document.createElement('th');
            const cell1text = document.createTextNode('File Name');
            cell1.appendChild(cell1text);
            const cell2 = document.createElement('th');
            const cell2text = document.createTextNode('File Size');
            cell2.appendChild(cell2text);
            row.appendChild(cell1);
            row.appendChild(cell2);
        }
        else{
            const cell1 = document.createElement('td');
            const cell1text = document.createTextNode(files[i-1].name);
            cell1.appendChild(cell1text);
            const cell2 = document.createElement('td');
            const cell2text = document.createTextNode(files[i-1].size);
            cell2.appendChild(cell2text);
            row.appendChild(cell1);
            row.appendChild(cell2);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    dombody.appendChild(tbl);
    tbl.setAttribute("border", "2");    
})
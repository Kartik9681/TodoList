function update1(){
    console.log("clicked")
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArr = [];
        itemJsonArr.push([tit,desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    }
    else{
        itemJsonArrStr = localStorage.getItem('itemsJson')
        itemJsonArr = JSON.parse(itemJsonArrStr);
        itemJsonArr.push([tit,desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    }
    update();
}
function update(){
    if(localStorage.getItem('itemsJson')==null){
        itemJsonArr = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    }
    else{
        itemJsonArrStr = localStorage.getItem('itemsJson')
        itemJsonArr = JSON.parse(itemJsonArrStr);
    }
    let tbody = document.getElementById('tbody');
    let str = "";

    itemJsonArr.forEach((element,index) => {
        str+= `
                <tr>
                    <th scope="row">${index+1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-sm btn-primary" onclick = "deleted(${index})">Delete</button></td>
                </tr>`;
    });
    tbody.innerHTML = str;
}
add = document.getElementById('add');
add.addEventListener('click', update1);
update();

function deleted(item){
    console.log("delete",item);
    itemJsonArrStr = localStorage.getItem('itemsJson')
    itemJsonArr = JSON.parse(itemJsonArrStr);
    itemJsonArr.splice(item,1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    update();
}

function cleared(){
    confirm("You want to clear the list?")
    console.log("clear");
    localStorage.clear();
    update();
}
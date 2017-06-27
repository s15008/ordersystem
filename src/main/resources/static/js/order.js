var rowsNum = 11;
var id;
var seedNum;
var trayNum;
//var price = [[[6,4]],[[8,6],[15,17]],[[7,9],[14,16]]];
var sum = 0;
var defaultRows = ["<p></p>","<select onchange=\"itemChange(this)\"><option>レタス</option><option>きゅうり</option><option>トマト</option><option>ピーマン</option></select>","<select onchange=\"changeRootStock(this)\"><option>自根</option></select>","<select><option>なし<option></select>","<select><option>128穴</option><option>200穴</option></select>","<input type=\"number\" id=\"seedNum\" value=\"1\" max=\"10000\" min=\"1\">","<p></p>","<input type=\"date\" value=\"2017-06-14\">","<p></p>","<p></p>","<input type=\"button\" value=\"×\" onclick=\"removeList(this)\">"]

function removeList(obj){
    var tab = obj.parentNode.parentNode.parentNode;
    var tr = obj.parentNode.parentNode;
    tab.removeChild(tr);
    sort();
}

function sort(){
    tabbody = document.getElementById("tabbody");
    for(var i = 0; i < tabbody.rows.length;i++){
        var HTML = '<p>' + (i + 1) + '<p>';
        tabbody.rows[i].childNodes[0].innerHTML = HTML;
    }

}

function addList(obj){
    var row = obj.insertRow(-1);

    for(var i = 0; i < rowsNum; i++){
        var cell =	row.insertCell(i);
        var HTML = defaultRows[i];
        cell.innerHTML = HTML;
    }
    row.firstChild.firstChild.innerHTML = obj.childElementCount;
}
function itemChange(obj){
    removeChilds(obj);
    addChilds(obj);
    changeRootStock(obj.parentNode.nextElementSibling.firstChild);
}
function removeChilds(obj){
    var nextparents = obj.parentNode.nextElementSibling.firstChild;
    nextparents.innerHTML = '';
}
function addChilds(obj){
    var parents = obj;
    var nextparents = parents.parentNode.nextElementSibling.firstChild;
    for(var i = 0; i < methods[parents.selectedIndex].length; i++){
        var option = document.createElement('option');
        option.innerHTML = methods[parents.selectedIndex][i];
        nextparents.appendChild(option);
    }
}
function changeRootStock(obj){
    var rootMethodSel = obj;
    removeChilds(rootMethodSel);
    addRootStockChilds(obj);
}
function addRootStockChilds(obj){
    var methodSel = obj;
    var rootSel = methodSel.parentNode.nextElementSibling.firstChild;
    var itemSel = methodSel.parentNode.previousElementSibling.firstChild;
    if(obj.selectedIndex == 0){
        var option = document.createElement('option');
        option.innerHTML = rootStocks[0][0];
        rootSel.appendChild(option);
    }
    else{
        for(var i = 0; i < rootStocks[itemSel.selectedIndex].length; i++){
            var option = document.createElement('option');
            option.innerHTML = rootStocks[itemSel.selectedIndex][i];
            rootSel.appendChild(option);
        }
    }
}
/*
 function selectPrice(obj){
 var selectItem = obj.parentNode.parentNode.childNodes[1].firstChild.selectedIndex;
 var selectMethod = obj.parentNode.parentNode.childNodes[2].firstChild.selectedIndex;
 var selectTray = obj.parentNode.parentNode.childNodes[4].firstChild.selectedIndex;
 obj.parentNode.childNodes[8].firstChild.innerHTML = price[selectItem][selectMethod][selectTray];

 }
 */
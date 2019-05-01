function makeEmptyCell (event){
    //lineItemMaximum의 스크린의 크기가 300px보다 작으면 값이 0이 됨.
    //n의 값의 범위는 NaN,1부터 lineItemMaximum 값 까지임.
    var lineItemMaximum = Math.floor(window.innerWidth/300);
    var itemNumbers = document.getElementsByClassName("card1").length;
    var lastLineItemNumbers = itemNumbers % lineItemMaximum;
    var n = lineItemMaximum - lastLineItemNumbers;


    //삭제
    var removeTarget = document.getElementsByClassName("emptyCell")
    var test1 = removeTarget.length;
    for(var i=0;i<removeTarget.length;i++){
        removeTarget[i].remove();
        i--;
    }

    //생성 & 삽입구.
    var tempArray = []
    if(n != lineItemMaximum && n != NaN){
        var target = document.getElementsByClassName("cardFlexWrapper")[0];
        for(var i=0;i<n;i++){
            var tempElement =document.createElement("div",{"class":"emptyCell"});
            tempElement.className = "emptyCell"
            
            tempArray.push(tempElement)
        }
        for(var i=0;i<n;i++){
            target.appendChild(tempArray[i]);
        }
    }

}
window.onload = makeEmptyCell;
window.onresize = makeEmptyCell;
function makeEmptyCell (event){
    //lineItemMaximum의 스크린의 크기가 300px보다 작으면 값이 0이 됨.
    //n의 값의 범위는 NaN,1부터 lineItemMaximum 값 까지임.
    var lineItemMaximum = Math.floor(window.innerWidth/330); // 한 라인에 들어갈 수 있는 아이템의 최대 갯수. 이건 종속적임.. 나중에 어떻게 수정되어야 할듯. index.css에서 card의 마진값도 추가해서 계산해야함. 스크롤바가 생길 경우에, 스크롤바가 공간을 차지하면서 오작동함.. 여유값을 주자.
    var itemNumbers = document.getElementsByClassName("card1").length; // 현재 페이지의 아이템의 갯수.
    var lastLineItemNumbers = itemNumbers % lineItemMaximum; // 마지막 줄에 있는 아이템의 갯수.
    var n = lineItemMaximum - lastLineItemNumbers;

    alert(lineItemMaximum);

    //삭제
    var removeTarget = document.getElementsByClassName("emptyCell")
    var test1 = removeTarget.length;
    for(var i=0;i<removeTarget.length;i++){
        removeTarget[i].remove();
        i--;
    }

    //생성 & 삽입구.
    var tempArray = []
    if(n != lineItemMaximum && n != NaN && itemNumbers > lineItemMaximum){
        var target = document.getElementsByClassName("cardFlexWrapper")[0];
        for(var i=0;i<n;i++){
            var tempElement =document.createElement("div");
            tempElement.className = "emptyCell"

            tempArray.push(tempElement)
        }
        for(var i=0;i<n;i++){
            target.appendChild(tempArray[i]);
        }
        //test
        //var testMessage = `한 줄에 있을 수 있는 아이템의 개수 : ${lineItemMaximum} \n존재하는 아이템의 개수 : ${itemNumbers} \n마지막줄의 아이템 개수: ${lastLineItemNumbers}\n 생성될 EmptyCell의 개수: ${n}`
        //alert(testMessage);
    }
}
//window.onload = makeEmptyCell; //createCell이 추가 되었다. 이제 콘텐츠가 추가된 다음에 정렬을 한번 해주도록 하자.
window.onresize = makeEmptyCell;
var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue = document.getElementById("comment-box").value;
      var nameBoxValue = document.getElementById("name-box").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(nameBoxValue + " wrote "+ "'"+commentBoxValue+"'");
   if (commentBoxValue.length < 140){
  li.appendChild(text);
    document.getElementById("unordered").appendChild(li);}
});


function countChars(CommentBoxValue){
    var maxLength = 140;
    var strLength = CommentBoxValue.value.length;
    
    if(strLength > maxLength){
        document.getElementById("charNum").innerHTML = '<span style="color: red;">'+strLength+'/'+maxLength+' characters</span>';
    }else{
        document.getElementById("charNum").innerHTML = strLength+'/'+maxLength+' characters';
    }
}
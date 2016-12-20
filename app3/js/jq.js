$(document).ready(function(){

    $("button").on("click",function(){
      $("#ffname").val("daas");

    });


    for (var i = 0; i < 5; i++) {
      (function(i){
      var btn = document.createElement('button');
      btn.appendChild(document.createTextNode('Button ' + i));
      btn.addEventListener('click', function(){
         alert(i);
      });
      document.body.appendChild(btn);
    })(i);
    }

    for(var i = 0;i<4;i++){
      (function(){
        //alert(i);
      })();
    }

    var arr = [];
  //  alert(Object.prototype.toString.call([]));
});

$(function(){
    for (var i = 1; i <= 4; i++){
        $('#daimei').append(i);
        $('#loop-list').append('<h1>'+i+'</h1><figure><img class="lazy" src="media/'+i+'.jpg" width="300" height="300" alt="'+i+'" /><audio controls src="media/'+i+'.wav"/></figure><hr>');
    }
});




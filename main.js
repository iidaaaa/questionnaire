$(function(){
    var array = ['01M', "02M", "03F", "04M", "05F", "07F", "08F", "09F", "10M"]
    var count = 0
    $.each(array, function(){
        count += 1
        var randomNum = Math.floor(Math.random()*((5+1)-1)+1);
        $('#daimei').append(count);
        $('#loop-list').append('<h1>'+count+'</h1><figure><img class="lazy" src="media/'+this+'/'+randomNum+'.jpg" width="300" height="300" alt='+randomNum+' "/><audio controls src="media/'+this+'/'+randomNum+'.wav"/></figure><hr>');
    })

});




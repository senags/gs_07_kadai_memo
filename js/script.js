$('#save').on('click',function(){
  const key = $('#key').val();
  const value =$('#value').val();
  localStorage.setItem(key,value);

  const html= '<tr><th>'+key+'</th><th>'+value+'</th></tr>';
  $('#list').append(html);
});

$('#clear').on('click',function(){
  localStorage.clear();
  $('#list').empty();
});
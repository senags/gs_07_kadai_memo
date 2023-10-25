$('#save').on('click',function(){
  const key = $('#key').val();
  const value =$('#value').val();
  localStorage.setItem(key,value);
});
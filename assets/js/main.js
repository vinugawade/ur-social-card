document.getElementById('user_type').addEventListener('change',(selected_value)=>{
  if (selected_value.target.value === 'General') {
    document.getElementById('Developer').style.display = 'none';
    document.getElementById('General').style.display = 'block';
  }
  if (selected_value.target.value === 'Developer') {
    document.getElementById('General').style.display = 'none';
    document.getElementById('Developer').style.display = 'block';
  }
  if (selected_value.target.value === 'Here') {
    document.getElementById('General').style.display = 'none';
    document.getElementById('Developer').style.display = 'none';
  }
});
document.getElementById('src_photo').addEventListener('change',(photo)=>{
	document.getElementById('dest_photo').src = URL.createObjectURL(photo.target.files[0]);
});
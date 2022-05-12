/* Listening for a change in the `user_type` element and when it changes it sets the `Developer`
element to `none` and the `General` element to `block` if the `user_type` element is equal to
`General`. */
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

/* Listening for a change in the `src_photo` element and when it changes it sets the `dest_photo`
element to the value of the `src_photo` element. */
document.getElementById('src_photo').addEventListener('change',(photo)=>{
	document.getElementById('dest_photo').src = URL.createObjectURL(photo.target.files[0]);
});
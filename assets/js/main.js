document.getElementById('user_type').addEventListener('change', (selected_value) => {
  /* Selecting all the input elements in the `General` and `Developer` elements. */
  const General = document.querySelectorAll('#General > div > input');
  const Developer = document.querySelectorAll('#Developer > div > input');

  if (selected_value.target.value === 'General') {
    /* Setting the `display` property of the `Developer` element to `none` and the `General`
    element to `block`. */
    document.getElementById('Developer').style.display = 'none';
    document.getElementById('General').style.display = 'block';

    /* Removing the `required` attribute from all the input elements in the `Developer` element. */
    for (const ins of Developer) {
      ins.removeAttribute('required');
    }

    /* Setting the `required` attribute to all the input elements in the `General` element. */
    for (const ins of General) {
      ins.setAttribute('required','');
    }
  }

  if (selected_value.target.value === 'Developer') {
    /* Setting the `display` property of the `General` element to `none` and the `Developer` element to
    `block`. */
    document.getElementById('General').style.display = 'none';
    document.getElementById('Developer').style.display = 'block';

    /* Removing the `required` attribute from all the input elements in the `General` element. */
    for (const ins of General) {
      ins.removeAttribute('required');
    }

    /* Setting the `required` attribute to all the input elements in the `Developer` element. */
    for (const ins of Developer) {
      ins.setAttribute('required','');
    }
  }

  if (selected_value.target.value === '') {
    /* Hiding the `General` and `Developer` elements. */
    document.getElementById('General').style.display = 'none';
    document.getElementById('Developer').style.display = 'none';

    /* Removing the `required` attribute from all the input elements in the `Developer` and `General`
    elements. */
    for (const ins of Developer) {
      ins.removeAttribute('required');
    }
    for (const ins of General) {
      ins.removeAttribute('required');
    }

  }
});

/* Listening for a change in the `src_photo` element and when it changes it sets the `dest_photo`
element to the value of the `src_photo` element. */
document.getElementById('src_photo').addEventListener('change', (photo) => {
  document.getElementById('dest_photo').src = URL.createObjectURL(photo.target.files[0]);
});
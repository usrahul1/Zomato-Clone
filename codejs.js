function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("show") == -1) {
      x.className += " show";
    } else { 
      x.className = x.className.replace(" show", "");
    }
}

document.addEventListener('DOMContentLoaded', function () {
  const radio1 = document.getElementById('radio1');
  const radio2 = document.getElementById('radio2');
  const content1 = document.getElementById('zappmail');
  const content2 = document.getElementById('zappnum');

  function toggleContent() {
      if (radio1.checked) {
          content1.classList.remove('hide');
          content2.classList.add('hide');
      } else if (radio2.checked) {
          content1.classList.add('hide');
          content2.classList.remove('hide');
      }
  }

  radio1.addEventListener('change', toggleContent);
  radio2.addEventListener('change', toggleContent);

  toggleContent();
});

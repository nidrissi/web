; // boulets
$(document).ready(function () {
  var toc = document.getElementById('TableOfContents');
  if (toc) {
    do {
      var li, ul = toc.querySelector('ul');
      if (ul.childElementCount !== 1) break;
      li = ul.firstElementChild;
      if (li.tagName !== 'LI') break;
      // remove <ul><li></li></ul> where only <ul> only contains one <li>
      ul.outerHTML = li.innerHTML;
    } while (toc.childElementCount >= 1);
  }
});

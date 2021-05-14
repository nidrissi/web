exports.onClientEntry = () => {
  window.onload = function () {
    if (
      !document.cookie
        .split("; ")
        .find((row) => row.startsWith("cookieToastShown"))
    ) {
      var toastElement = document.getElementById("cookie-toast");
      var toast = new bootstrap.Toast(toastElement);
      toast.show();
      document.cookie =
        "cookieToastShown=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    }
  };

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-S549JC61XZ");
};

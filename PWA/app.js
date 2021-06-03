if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function () {
      console.log("SW Registered");
    })
    .catch(function (err) {
      console.log(err);
    });
}

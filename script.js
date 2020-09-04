$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#show-delete").click(function () {
   $("#delete-button").removeClass("d-none");
});

$("#sign-up-button").click(function () {
   $("#intro-card").toggle();
   $("#create-account-card").toggle();
});

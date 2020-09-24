const dbUserDetails = ["email", "password"];

$("login-button").click(function () {
   const emailInput = $("#email-input").val();
   const passwordInput = $("#password-input").val();
   const userInputDetails = [emailInput, passwordInput];

   const isUserInDb = checkIsUserInDb(dbUserDetails, userInputDetails);
   if (isUserInDb) {
      console.log("Let's continue.");
      disableElement("#login-button");
      disableElement("#email-input");
      disableElement("#password-input");
   } else {
      console.log("The user is not found");
   }
});

function disableElement(id) {
   $(id).attr("disabled", "disabled");
}

function checkIsUserInDb(dbUserDetails, userInputDetails) {
   if (
      dbUserDetails[0] === userInputDetails[0] &&
      dbUserDetails[1] === userInputDetails[1]
   ) {
      return true;
   } else {
      return false;
   }
}

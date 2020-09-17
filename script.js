const maxChar = 240;
$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#create-imagery-input").keyup(function (e) {
   console.log("Event: ", e);

   // get the text frrom the textarea
   const text = e.target.value;
   // console.log("The user inputted: ", text);
   console.log(`The user inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`The length of the text is: ${textLength}`);
   if (textLength < 241 && textLength > 0) {
      $("#save-card").removeAttr("disabled");
      $("#imagery-characters").removeClass("text-danger");
      $("#imagery-characters").addClass("text-muted");
   } else if (textLength > 240) {
      $("#save-card").attr("disabled", "disabled");
      $("#imagery-characters").removeClass("text-muted");
      $("#imagery-characters").addClass("text-danger");
   } else if (textLength === 0) {
      $("#save-card").attr("disabled", "disabled");
      $("#imagery-characters").removeClass("text-danger");
      $("#imagery-characters").addClass("text-muted");
   }

   // update the character counter
   $("#imagery-char-count").html(textLength);
});

$("#create-answer-input").keyup(function (e) {
   console.log("Event: ", e);

   // get the text frrom the textarea
   const text = e.target.value;
   // console.log("The user inputted: ", text);
   console.log(`The user inputted: ${text}`);

   // check the length of the text
   const textLength = text.length;
   console.log(`The length of the text is: ${textLength}`);
   if (textLength < 241 && textLength > 0) {
      $("#next").removeAttr("disabled");
      $("#answer-characters").removeClass("text-danger");
      $("#answer-characters").addClass("text-muted");
   } else if (textLength > 240) {
      $("#next").attr("disabled", "disabled");
      $("#answer-characters").removeClass("text-muted");
      $("#answer-characters").addClass("text-danger");
   } else if (textLength === 0) {
      $("#next").attr("disabled", "disabled");
      $("#answer-characters").removeClass("text-danger");
      $("#answer-characters").addClass("text-muted");
   }

   // update the character counter
   $("#answer-char-count").html(textLength);
});

$("#edit-imagery-input").keyup(function (e) {
   console.log("Event: ", e);
   const text = e.target.value;
   console.log(`The user inputted: ${text}`);
   const textLength = text.length;
   console.log(`The length of the text is: ${textLength}`);

   if (textLength <= 240 && textLength >= 0) {
      $("#edit-imagery-characters").removeClass("text-danger");
   } else {
      $("#edit-imagery-characters").addClass("text-danger");
   }
   const imageryInput = $("#edit-imagery-input").val();
   console.log(`The user inputted: ${imageryInput}`);
   const imageryInputLength = imageryInput.length;
   console.log(`The length of the imagery is: ${imageryInputLength}`);
   const answerInput = $("#edit-answer-input").val();
   console.log(`The user inputted: ${answerInput}`);
   const answerInputLength = answerInput.length;
   console.log(`The length of the answer is: ${answerInputLength}`);

   if (
      imageryInputLength > 0 &&
      imageryInputLength <= maxChar &&
      answerInputLength > 0 &&
      answerInputLength <= maxChar
   ) {
      $("#edit-save").removeAttr("disabled");
   } else {
      $("#edit-save").attr("disabled", "disabled");
   }

   // update the character counter
   $("#edit-imagery-char-count").html(textLength);
});

$("#edit-answer-input").keyup(function (e) {
   console.log("Event: ", e);
   const text = e.target.value;
   console.log(`The user inputted: ${text}`);
   const textLength = text.length;
   console.log(`The length of the text is: ${textLength}`);
   if (textLength < 241 && textLength > 0) {
      $("#edit-answer-characters").removeClass("text-danger");
   } else if (textLength > 240) {
      $("#edit-answer-characters").addClass("text-danger");
   } else if (textLength === 0) {
      $("#edit-answer-characters").removeClass("text-danger");
   }
   const imageryInput = $("#edit-imagery-input").val();
   console.log(`The user inputted: ${imageryInput}`);
   const imageryInputLength = imageryInput.length;
   console.log(`The length of the imagery is: ${imageryInputLength}`);
   const answerInput = $("#edit-answer-input").val();
   console.log(`The user inputted: ${answerInput}`);
   const answerInputLength = answerInput.length;
   console.log(`The length of the answer is: ${answerInputLength}`);

   if (
      imageryInputLength > 0 &&
      imageryInputLength < 241 &&
      answerInputLength > 0 &&
      answerInputLength < 241
   ) {
      $("#edit-save").removeAttr("disabled");
   }
   if (
      imageryInputLength === 0 ||
      imageryInputLength > 240 ||
      answerInputLength === 0 ||
      answerInputLength > 240
   ) {
      $("#edit-save").attr("disabled", "disabled");
   }
   // update the character counter
   $("#edit-answer-char-count").html(textLength);
});

$("#back-to-answer").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

$("#show-delete").click(function () {
   $("#delete-button").removeClass("d-none");
});

$("#sign-up-button").click(function () {
   $("#intro-card").addClass("d-none");
   $("#create-account-card").removeClass("d-none");
});

$("#lets-go").click(function () {
   const email = $("#email-sign-up").val();
   console.log(`The user inputted: ${email}`);
   const trimmedEmail = email.trim();
   const lowerCasedEmail = trimmedEmail.toLowerCase();
   console.log(
      `The user's trimmed and lower cased email address: ${lowerCasedEmail}`
   );

   // check the length of the email address
   const emailLength = email.length;
   console.log(`The length of the email is: ${emailLength}`);
   if (emailLength === 0) {
      $("#email-sign-up").addClass("is-invalid");
      $("#enter-email-error").removeClass("d-none");
   } else if (emailLength > 0) {
      $("#email-sign-up").removeClass("is-invalid");
      $("#email-sign-up").addClass("is-valid");
      $("#enter-email-error").addClass("d-none");
   }

   const delimiter = "@";
   const indexOfEmailAtDelimiter = lowerCasedEmail.indexOf(delimiter);
   const localPartEmail = lowerCasedEmail.slice(0, indexOfEmailAtDelimiter);
   console.log(
      `This is the user inputted local part of email: ${localPartEmail}`
   );

   const localPartEmailLength = localPartEmail.length;
   console.log(`The lenght of the local part of the inputted email is: `);

   const password = $("#password-sign-up").val();
   console.log(`The user inputted: ${password}`);

   const lowerCasedPassword = password.toLowerCase();
   console.log(
      `The user inputted lower cased password is: ${lowerCasedPassword}`
   );

   const passwordLength = password.length;
   console.log(`The length of the password is: ${passwordLength}`);

   if (passwordLength === 0) {
      $("#password-sign-up").addClass("is-invalid");
      $("#password-blank-error").removeClass("d-none");
      $("#password-min-char-error").addClass("d-none");
      $("#local-part-email-password-error").addClass("d-none");
   } else if (passwordLength < 9 && passwordLength > 0) {
      $("#password-sign-up").addClass("is-invalid");
      $("#password-min-char-error").removeClass("d-none");
      $("#password-blank-error").addClass("d-none");
      $("#local-part-email-password-error").addClass("d-none");
   } else if (
      lowerCasedPassword.includes(localPartEmail) &&
      localPartEmailLength >= 4
   ) {
      $("#password-sign-up").addClass("is-invalid");
      $("#password-min-char-error").addClass("d-none");
      $("#password-blank-error").addClass("d-none");
      $("#local-part-email-password-error").removeClass("d-none");
   } else {
      $("#password-sign-up").removeClass("is-invalid");
      $("#password-sign-up").addClass("is-valid");
      $("#password-min-char-error").addClass("d-none");
      $("#password-blank-error").addClass("d-none");
      $("#local-part-email-password-error").addClass("d-none");
   }
});

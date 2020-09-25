// const maxChar = 240;
// $("#save-card").click(function () {
//    $("#overlay-success").toggleClass("d-flex d-none");
// });
// $("#back-to-answer").click(function () {
//    $("#overlay-error").toggleClass("d-flex d-none");
// });

// $("#show-delete").click(function () {
//    $("#delete-button").removeClass("d-none");
// });

// $("#sign-up-button").click(function () {
//    $("#intro-card").addClass("d-none");
//    $("#create-account-card").removeClass("d-none");
// });

// $("#create-imagery-input").keyup(function (e) {
//    console.log("Event: ", e);
//    const text = e.target.value;
//    console.log(`The user inputted: ${text}`);
//    if (text.length <= maxChar && text.length > 0) {
//       $("#save-card").removeAttr("disabled");
//       $("#imagery-characters").removeClass("text-danger");
//       $("#imagery-characters").addClass("text-muted");
//    } else if (text.length > maxChar) {
//       $("#save-card").attr("disabled", "disabled");
//       $("#imagery-characters").removeClass("text-muted");
//       $("#imagery-characters").addClass("text-danger");
//    } else if (text.length === 0) {
//       $("#save-card").attr("disabled", "disabled");
//       $("#imagery-characters").removeClass("text-danger");
//       $("#imagery-characters").addClass("text-muted");
//    }
//    $("#imagery-char-count").html(text.length);
// });

// $("#create-answer-input").keyup(function (e) {
//    console.log("Event: ", e);
//    const text = e.target.value;
//    console.log(`The user inputted: ${text}`);
//    if (text.length <= maxChar && text.length > 0) {
//       $("#next").removeAttr("disabled");
//       $("#answer-characters").removeClass("text-danger");
//       $("#answer-characters").addClass("text-muted");
//    } else if (text.length > maxChar) {
//       $("#next").attr("disabled", "disabled");
//       $("#answer-characters").removeClass("text-muted");
//       $("#answer-characters").addClass("text-danger");
//    } else if (text.length === 0) {
//       $("#next").attr("disabled", "disabled");
//       $("#answer-characters").removeClass("text-danger");
//       $("#answer-characters").addClass("text-muted");
//    }
//    $("#answer-char-count").html(text.length);
// });

// $("#edit-imagery-input, #edit-answer-input").keyup(function (e) {
//    const imageryInput = $("#edit-imagery-input").val();
//    console.log(`The user inputted: ${imageryInput}`);
//    const answerInput = $("#edit-answer-input").val();
//    console.log(`The user inputted: ${answerInput}`);
//    if (imageryInput.length <= maxChar && imageryInput.length >= 0) {
//       $("#edit-imagery-characters").removeClass("text-danger");
//    } else {
//       $("#edit-imagery-characters").addClass("text-danger");
//    }
//    if (answerInput.length <= maxChar && answerInput.length >= 0) {
//       $("#edit-answer-characters").removeClass("text-danger");
//    } else {
//       $("#edit-answer-characters").addClass("text-danger");
//    }

//    if (
//       imageryInput.length > 0 &&
//       imageryInput.length <= maxChar &&
//       answerInput.length > 0 &&
//       answerInput.length <= maxChar
//    ) {
//       $("#edit-save").removeAttr("disabled");
//    } else {
//       $("#edit-save").attr("disabled", "disabled");
//    }
//    $("#edit-imagery-char-count").html(imageryInput.length);
//    $("#edit-answer-char-count").html(answerInput.length);
// });

$("#lets-go").click(function () {
   const email = $("#email-sign-up-input").val();
   const password = $("#password-sign-up-input").val();

   const emailError = getEmailError(email); // emailError = whatever return it gets when it executes that function
   console.log(emailError);
   if (emailError) {
      showErrorValidation("#email-sign-up", emailError);
   } else {
      hideErrorValidation("#email-sign-up");
   }

   const passwordError = getPasswordError(email, password); // passwordError = whatever return it gets when it executes that function
   console.log(passwordError);
   if (passwordError !== "") {
      showErrorValidation("#password-sign-up", passwordError);
   } else {
      hideErrorValidation("#password-sign-up");
   }

   let today = new Date(Date.now());
   // to test other days:
   today = new Date(2020, 6, 2);
   const year = today.getFullYear();
   const month = today.getMonth();
   const day = today.getDate();
   const yearPart = String(year);
   const monthPart = String(month + 1);
   const dayPart = String(day);
   const isMonthOneDigit = checkDatePartLength(monthPart);
   if (isMonthOneDigit) {
      paddedMonthPart = padDatePart(monthPart);
   } else {
      paddedMonthPart = monthPart;
   }
   const isDayOneDigit = checkDatePartLength(dayPart);
   if (isDayOneDigit) {
      paddedDayPart = padDatePart(dayPart);
   } else {
      paddedDayPart = dayPart;
   }
   const createdAt = yearPart + paddedMonthPart + paddedDayPart;
   console.log(`Created at: ${createdAt}`);
});

function padDatePart(datePart) {
   return "0" + datePart;
}

function checkDatePartLength(datePart) {
   return datePart.length < 2;
}

function showErrorValidation(pizza, banana) {
   $(`${pizza}-input`).addClass("is-invalid");
   $(`${pizza}-error`).removeClass("d-none");
   $(`${pizza}-error`).html(banana);
}

function hideErrorValidation(pizza) {
   $(`${pizza}-input`).addClass("is-valid");
   $(`${pizza}-input`).removeClass("is-invalid");
   $(`${pizza}-error`).addClass("d-none");
}

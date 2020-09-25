const maxChar = 240;
$("#save-card").click(function () {
   showOverlay("#overlay-success");
});
$("#back-to-answer").click(function () {
   showOverlay("#overlay-error");
});

$("#show-delete").click(function () {
   showHiddenElement("#delete-button");
});

$("#sign-up-button").click(function () {
   hideElement("#intro-card");
   showHiddenElement("#create-account-card");
});

$("#create-imagery-input").keyup(function () {
   const imageryInput = $("#create-imagery-input").val();
   console.log(`The user inputted: ${imageryInput}`);
   styleCardCreationValidation(
      imageryInput,
      "#imagery-characters",
      "#imagery-char-count",
      "#save-card"
   );
});

$("#create-answer-input").keyup(function () {
   const answerInput = $("#create-answer-input").val();
   console.log(`The user inputted: ${answerInput}`);
   styleCardCreationValidation(
      answerInput,
      "#answer-characters",
      "#answer-char-count",
      "#next"
   );
});

$("#edit-imagery-input, #edit-answer-input").keyup(function () {
   const imageryInput = $("#edit-imagery-input").val();
   console.log(`The user inputted: ${imageryInput}`);
   const answerInput = $("#edit-answer-input").val();
   console.log(`The user inputted: ${answerInput}`);
   checkIsOver(imageryInput, maxChar, "#edit-imagery-characters");
   checkIsOver(answerInput, maxChar, "#edit-answer-characters");

   if (
      imageryInput.length > 0 &&
      imageryInput.length <= maxChar &&
      answerInput.length > 0 &&
      answerInput.length <= maxChar
   ) {
      $("#edit-save").removeAttr("disabled");
   } else {
      $("#edit-save").attr("disabled", "disabled");
   }
   updateCharCount("#edit-imagery-char-count", imageryInput);
   updateCharCount("#edit-answer-char-count", answerInput);
});

$("#lets-go").click(function () {
   const emailInput = $("#email-sign-up-input").val();
   const email = emailInput.trim().toLowerCase();
   const password = $("#password-sign-up-input").val();

   const emailError = getEmailError(email); // emailError = whatever return it gets when it executes that function
   console.log(emailError);
   if (emailError) {
      showError("#email-sign-up", emailError);
   } else {
      hideError("#email-sign-up", emailError);
   }

   const passwordError = getPasswordError(email, password); // passwordError = whatever return it gets when it executes that function
   console.log(passwordError);
   if (passwordError !== "") {
      showError("#password-sign-up", passwordError);
   } else {
      hideError("#password-sign-up", passwordError);
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

function showError(element, errorMessage) {
   $(`${element}-input`).addClass("is-invalid");
   $(`${element}-error`).removeClass("d-none");
   $(`${element}-error`).html(errorMessage);
}

function hideError(element, errorMessage) {
   $(`${element}-input`).removeClass("is-invalid");
   $(`${element}-error`).html(errorMessage);
}

function showHiddenElement(id) {
   $(id).removeClass("d-none");
}

function hideElement(id) {
   $(id).addClass("d-none");
}

function styleCardCreationValidation(
   inputname,
   inputcharsid,
   inputcharactercountid,
   buttonid
) {
   if (inputname.length <= maxChar && inputname.length > 0) {
      $(buttonid).removeAttr("disabled");
      $(inputcharsid).removeClass("text-danger");
      $(inputcharsid).addClass("text-muted");
   } else if (inputname.length > maxChar) {
      $(buttonid).attr("disabled", "disabled");
      $(inputcharsid).removeClass("text-muted");
      $(inputcharsid).addClass("text-danger");
   } else if (inputname.length === 0) {
      $(buttonid).attr("disabled", "disabled");
      $(inputcharsid).removeClass("text-danger");
      $(inputcharsid).addClass("text-muted");
   }
   $(inputcharactercountid).html(inputname.length);
}

function checkIsOver(input, num, charactercount) {
   if (input.length > num) {
      $(charactercount).addClass("text-danger");
   } else {
      $(charactercount).removeClass("text-danger");
   }
}

function updateCharCount(id, input) {
   $(id).html(input.length);
}

function showOverlay(id) {
   $(id).toggleClass("d-flex d-none");
}

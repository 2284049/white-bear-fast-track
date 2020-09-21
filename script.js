const maxChar = 240;
$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
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

$("#create-imagery-input").keyup(function (e) {
   console.log("Event: ", e);
   const text = e.target.value;
   console.log(`The user inputted: ${text}`);
   if (text.length < 241 && text.length > 0) {
      $("#save-card").removeAttr("disabled");
      $("#imagery-characters").removeClass("text-danger");
      $("#imagery-characters").addClass("text-muted");
   } else if (text.length > 240) {
      $("#save-card").attr("disabled", "disabled");
      $("#imagery-characters").removeClass("text-muted");
      $("#imagery-characters").addClass("text-danger");
   } else if (text.length === 0) {
      $("#save-card").attr("disabled", "disabled");
      $("#imagery-characters").removeClass("text-danger");
      $("#imagery-characters").addClass("text-muted");
   }
   $("#imagery-char-count").html(text.length);
});

$("#create-answer-input").keyup(function (e) {
   console.log("Event: ", e);
   const text = e.target.value;
   console.log(`The user inputted: ${text}`);
   if (text.length < 241 && text.length > 0) {
      $("#next").removeAttr("disabled");
      $("#answer-characters").removeClass("text-danger");
      $("#answer-characters").addClass("text-muted");
   } else if (text.length > 240) {
      $("#next").attr("disabled", "disabled");
      $("#answer-characters").removeClass("text-muted");
      $("#answer-characters").addClass("text-danger");
   } else if (text.length === 0) {
      $("#next").attr("disabled", "disabled");
      $("#answer-characters").removeClass("text-danger");
      $("#answer-characters").addClass("text-muted");
   }
   $("#answer-char-count").html(text.length);
});

$("#edit-imagery-input, #edit-answer-input").keyup(function (e) {
   const imageryInput = $("#edit-imagery-input").val();
   console.log(`The user inputted: ${imageryInput}`);
   const answerInput = $("#edit-answer-input").val();
   console.log(`The user inputted: ${answerInput}`);
   if (imageryInput.length <= 240 && imageryInput.length >= 0) {
      $("#edit-imagery-characters").removeClass("text-danger");
   } else {
      $("#edit-imagery-characters").addClass("text-danger");
   }
   if (answerInput.length < 241 && answerInput.length >= 0) {
      $("#edit-answer-characters").removeClass("text-danger");
   } else {
      $("#edit-answer-characters").addClass("text-danger");
   }

   if (
      imageryInput.length > 0 &&
      imageryInput.length < 241 &&
      answerInput.length > 0 &&
      answerInput.length < 241
   ) {
      $("#edit-save").removeAttr("disabled");
   } else {
      $("#edit-save").attr("disabled", "disabled");
   }
   $("#edit-imagery-char-count").html(imageryInput.length);
   $("#edit-answer-char-count").html(textLength);
});

$("#lets-go").click(function () {
   const email = $("#email-sign-up").val();
   console.log(`The user inputted: ${email}`);
   const trimmedAndLowerCasedEmail = email.trim().toLowerCase();
   console.log(
      `The user's trimmed and lower cased email address: ${trimmedAndLowerCasedEmail}`
   );

   if (email.length === 0) {
      $("#email-sign-up").addClass("is-invalid");
      $("#enter-email-error").removeClass("d-none");
   } else if (email.length > 0) {
      $("#email-sign-up").removeClass("is-invalid");
      $("#email-sign-up").addClass("is-valid");
      $("#enter-email-error").addClass("d-none");
   }

   // ONE WAY TO SEPARATE LOCAL PART OF EMAIL
   // USING DELIMITER & SLICE METHOD
   // const delimiter = "@";
   // const indexOfEmailAtDelimiter = trimmedAndLowerCasedEmail.indexOf(delimiter);
   // const localPartEmail = trimmedAndLowerCasedEmail.slice(0, indexOfEmailAtDelimiter);
   // console.log(
   //    `This is the user inputted local part of email: ${localPartEmail}`
   // );
   // const localPartEmailLength = localPartEmail.length;
   // console.log(`The lenght of the local part of the inputted email is: `, localPartEmailLength);

   // SECOND WAY TO SEPARATE LOCAL PART OF EMAIL
   // USING SPLIT METHOD
   const emailParts = trimmedAndLowerCasedEmail.split("@");
   console.log(`Here is the lower cased email in parts: `, emailParts);
   const localPartEmail = emailParts[0];
   console.log(`Here is the local part of the email: `, localPartEmail);

   const password = $("#password-sign-up").val();
   console.log(`The user inputted: ${password}`);

   const lowerCasedPassword = password.toLowerCase();
   console.log(
      `The user inputted lower cased password is: ${lowerCasedPassword}`
   );

   // combining mostInsecurePasswords and secondMostInsecurePasswords
   const allInsecurePasswords = mostInsecurePasswords.concat(
      secondMostInsecurePasswords
   );
   console.log(`Entire list of insecure passwords:\n`, allInsecurePasswords);

   const allFlatInsecurePasswords = allInsecurePasswords.flat();
   console.log(
      `Here's a list of all flat insecure passwords:\n `,
      allFlatInsecurePasswords
   );

   // getting rid of duplicates
   const allUniqueInsecurePasswords = [...new Set(allFlatInsecurePasswords)];
   console.log(
      `Here's a list of all unique insecure passwords:\n `,
      allUniqueInsecurePasswords
   );

   const firstSliceOfInsecurePasswords = allUniqueInsecurePasswords.slice(
      0,
      allUniqueInsecurePasswords.indexOf("skywalker")
   );
   console.log(
      `Here is the first slice of unacceptable passwords:\n `,
      firstSliceOfInsecurePasswords
   );
   const secondSliceOfInsecurePasswords = allUniqueInsecurePasswords.slice(
      allUniqueInsecurePasswords.indexOf("1010101010"),
      allUniqueInsecurePasswords.indexOf("obama2016")
   );
   console.log(
      `Here is the second slice of unacceptable passwords:\n `,
      secondSliceOfInsecurePasswords
   );
   const thirdSliceOfInsecurePasswords = allUniqueInsecurePasswords.slice(
      allUniqueInsecurePasswords.indexOf("mypassword")
   );
   console.log(
      `Here is the third slice of unacceptable passwords:\n `,
      thirdSliceOfInsecurePasswords
   );

   const unacceptablePasswordsWithBooleans = firstSliceOfInsecurePasswords.concat(
      secondSliceOfInsecurePasswords,
      thirdSliceOfInsecurePasswords
   );
   console.log(
      `At long last, here is the list of unacceptable passwords with Booleans and numbers:\n`,
      unacceptablePasswordsWithBooleans
   );

   let unacceptablePasswordStrings = [];
   for (let i = 0; i < unacceptablePasswordsWithBooleans.length; i++) {
      const value = unacceptablePasswordsWithBooleans[i];
      // remove the booleans and keep numbers and strings:
      if (typeof value === "number" || typeof value === "string") {
         // convert numbers to strings:
         unacceptablePasswordStrings = unacceptablePasswordStrings.concat(
            String(value)
         );
      }
   }
   console.log(
      `Here is a list of unacceptable password strings: `,
      unacceptablePasswordStrings
   );

   let unacceptableReversedPasswords = [];
   for (let i = 0; i < unacceptablePasswordStrings.length; i++) {
      const unaccPassStr = unacceptablePasswordStrings[i];
      const unaccPassStrChars = unaccPassStr.split("");
      const copyOfUnaccPassChars = [...unaccPassStrChars];
      const reverseUnaccPassChars = copyOfUnaccPassChars.reverse();
      const newUnaccPassStr = reverseUnaccPassChars.join("");
      unacceptableReversedPasswords = unacceptableReversedPasswords.concat(
         newUnaccPassStr
      );
   }
   console.log(
      `Here are the reversed passwords: `,
      unacceptableReversedPasswords
   );

   const unaccStrAndReversedPasswords = [
      ...unacceptablePasswordStrings,
      ...unacceptableReversedPasswords,
   ];
   console.log(
      `Here are all the unacceptable password strings and reversed strings: `,
      unaccStrAndReversedPasswords
   );

   let lowerCasedUnaccPasswords = [];
   for (let i = 0; i < unaccStrAndReversedPasswords.length; i++) {
      const unacceptablePassword = unaccStrAndReversedPasswords[i];
      const lowerCasedUnaccPass = unacceptablePassword.toLowerCase();
      lowerCasedUnaccPasswords = lowerCasedUnaccPasswords.concat(
         lowerCasedUnaccPass
      );
   }
   console.log(
      `Here are the lower cased unacceptable passwords: `,
      lowerCasedUnaccPasswords
   );

   const unacceptablePasswords = [...new Set(lowerCasedUnaccPasswords)];
   console.log(
      `Here's a list of all unique, reversed, lower cased passwords:\n `,
      unacceptablePasswords
   );

   if (password.length === 0) {
      $("#password-sign-up").addClass("is-invalid");
      $("#password-error").removeClass("d-none");
      $("#password-error").html("Please create a password.");
   } else if (password.length < 9 && password.length > 0) {
      $("#password-sign-up").addClass("is-invalid");
      $("#password-error").removeClass("d-none");
      $("#password-error").html("Your password must be at least 9 characters.");
   } else if (
      lowerCasedPassword.includes(localPartEmail) &&
      localPartEmailLength >= 4
   ) {
      $("#password-sign-up").addClass("is-invalid");
      $("#password-error").removeClass("d-none");
      $("#password-error").html(
         "All or part of your email address cannot be used in your password."
      );
   } else if (unacceptablePasswords.includes(lowerCasedPassword)) {
      $("#password-sign-up").addClass("is-invalid");
      $("#password-error").removeClass("d-none");
      $("#password-error").html(
         `Your password contains a commonly used password, “${lowerCasedPassword}” and can be easily discovered by attackers. Please use something else.`
      );
   } else {
      $("#password-sign-up").removeClass("is-invalid");
      $("#password-sign-up").addClass("is-valid");
      $("#password-error").addClass("d-none");
      $("#password-error").html("");
   }

   let createdAt = new Date(Date.now());
   const year = createdAt.getFullYear();
   const month = createdAt.getMonth();
   const day = createdAt.getDate();
   const hour = createdAt.getHours();
   const minutes = createdAt.getMinutes();
   const seconds = createdAt.getSeconds();
   const milliseconds = createdAt.getMilliseconds();

   const yearPart = String(year);
   const monthPart = String(month + 1);
   const dayPart = String(day);
   if (monthPart.length < 2) {
      let createdAt = yearPart + "0" + monthPart + dayPart;
      console.log(`Created at: ${createdAt}`);
   } else {
      let createdAt = yearPart + monthPart + dayPart;
      console.log(`Created at: ${createdAt}`);
   }
});

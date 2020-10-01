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
   if (emailError !== "") {
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

   console.log(`User inputted email: ${email}`);
   console.log(`User inputted password: ${password}`);

   const createdAt = getCreatedAt();
   console.log(`Created at: ${createdAt}`);

   const id = createRandomID();
   console.log(`The random user ID is: ${id}`);

   const user = {
      email: email,
      password: password,
      createdAt: createdAt,
      id: id,
      emailTld: getTld(email),
      socialProfiles: [
         {
            site: "facebook",
            siteId: "530c2716-36e2-4a80-93b7-0e8483d629e1",
            username: "",
            image: {
               sm: "",
               orig: "",
            },
         },
         {
            site: "twitter",
            siteId: "79023b4d-57a2-406b-8efe-bda47fb1696c",
            username: "",
            image: {
               sm: "",
               md: "",
               orig: "",
            },
         },
      ],
   };

   activeUser = makeDeepCopySafely(user);
   if (activeUser !== undefined) {
      activeUser.isActive = true;
      activeUser.createdAt = Date.now();
      delete activeUser.socialProfiles[0].image["sm"];
      delete activeUser.socialProfiles[1].image["sm"];
      delete activeUser.socialProfiles[1].image["md"];
   }

   if (passwordError === "" && emailError === "") {
      console.log(user);
      console.log(`Active User Properties: `, activeUser);
   }
});

function makeDeepCopySafely(obj) {
   const str = JSON.stringify(obj);
   return safelyParseJson(str);
}
function safelyParseJson(str) {
   try {
      JSON.parse(str);
   } catch {
      return str;
   }
   return JSON.parse(str);
}

function getTld(email) {
   return email.slice(email.lastIndexOf(".") + 1);
}

function createRandomID() {
   let today = new Date(Date.now());
   const milliseconds = String(today.getMilliseconds());
   const paddedMS = milliseconds.padStart(3, "0");
   const randomNum = String(getRandomInt(0, 999));
   const paddedRandomNum = randomNum.padStart(3, "0");
   const randomID = paddedRandomNum + paddedMS;
   console.log(`The padded random number for the id is: ${paddedRandomNum}`);
   console.log(`The padded milliseconds for the id is: ${paddedMS}`);
   return randomID;
}

function getRandomInt(min, max) {
   return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getCreatedAt() {
   let today = new Date(Date.now());
   // to test other days:
   //today = new Date(2020, 6, 2);
   const year = today.getFullYear();
   const month = today.getMonth();
   const day = today.getDate();
   const yearPart = String(year);
   const monthPart = String(month + 1);
   const dayPart = String(day);
   const paddedMonth = padLeft(monthPart);
   const paddedDay = padLeft(dayPart);
   const createdAt = yearPart + paddedMonth + paddedDay;
   return Number(createdAt);
}

function padLeft(datePart) {
   if (datePart.length < 2) {
      return "0" + datePart;
   } else {
      return datePart;
   }
}

function showError(element, errorMessage) {
   $(`${element}-input`).addClass("is-invalid");
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

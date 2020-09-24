function getEmailError(email) {
   const trimmedAndLowerCasedEmail = email.trim().toLowerCase();
   console.log(
      `The user's trimmed and lower cased email address: ${trimmedAndLowerCasedEmail}`
   );

   if (email.length === 0) {
      return true;
   } else {
      return false;
   }
}

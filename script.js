$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

let imageryCharsCount = 0; // Put it above the function, so that it's only zero once, not everytime they keypress again.

$("#create-imagery-input").keydown(function (e) {
   const key = e.which;
   console.log("Key inputted: ", key);

   // If the user presses backspace, decrement the count
   // key 8 is backspace. Every key on the keyboard has a number assigned to it.
   if (key === 8) {
      console.log("The user has pressed backspace!");
      imageryCharsCount -= 1;
      if (imageryCharsCount < 0) {
         console.log("You have entered negative territory!");
         imageryCharsCount = 0;
      }
   } else if (key === 16 || 18 || 46 || 35 || 36 || 20) {
      // key 16 is the shift key; two pipes is "OR"
      console.log("This doesn't count in the character counter.");
   } else {
      //Else, increment the count
      console.log("The user has pressed any other key!");
      imageryCharsCount += 1;
      /*
   Be careful with decimals in JavaScript, "floating point"

   Could use:
   imageryCharsCount = imageryCharsCount + 1;
   imageryCharsCount++   (this adds one increment each time, can also do --= to subtract an increment each time)
   */
   }

   console.log("Total inputted chars: ", imageryCharsCount);
   $("#imagery-char-count").html(imageryCharsCount);
});

$("#back-to-answer").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

$("#show-delete").click(function () {
   $("#delete-button").removeClass("d-none");
});

$("#sign-up-button").click(function () {
   $("#intro-card").toggle();
   $("#create-account-card").toggle();
});

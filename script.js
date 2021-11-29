function formValidate() {
   var name = document.forms["VkgForm"]["Name"];
   var address = document.forms["VkgForm"]["Address"];
   var zip = document.forms["VkgForm"]["Zip"];
   var state = document.forms["VkgForm"]["State"];
   var username = document.forms["VkgForm"]["Username"];
   var email = document.forms["VkgForm"]["Email"];
   if (name.value == "") {
      window.alert("Please enter your name.");
      name.focus();
      return false;
   }
   if (address.value == "") {
      window.alert("Please enter your address.");
      address.focus();
      return false;
   }
   if (zip.value == "") {
      window.alert("Please enter your Zip Code.");
      zip.focus();
      return false;
   }
   if (state.value == "State") {
      window.alert("Please Choose your State.");
      state.focus();
      return false;
   }
   if (username.value == "") {
      window.alert("Please enter your Username.");
      username.focus();
      return false;
   }
   if (username.value.length < 6 || username.value.length > 8) {
      window.alert("Username length must be in between 6 to 8.");
      username.focus();
      return false;
   }
   if (email.value == "") {
      window.alert("Please enter your e-mail address.");
      email.focus();
      return false;
   }
   return true;
}
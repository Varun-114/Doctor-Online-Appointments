 function required()
 {
   var empt = document.forms["myform"]["firstname"].value;
   if(empt=="")
   {
    alert("First name cannot be left blank");
    return false;
   }

  var empt = document.forms["myform"]["lastname"].value;
   if(empt=="")
   {
    alert("Last name cannot be left blank");
    return false;
   }
   
   var empt = document.forms["myform"]["r1"].value;
   if(empt=="")
   {
    alert("Gender cannot be left blank");
    return false;
   }

   var empt = document.forms["myform"]["age"].value;
   if(empt=="")
   {
    alert("Age cannot be left blank");
    return false;
   }
  
   var empt = document.forms["myform"]["phone"].value;
   if(empt=="")
   {
    alert("Phone no. cannot be left blank");
    return false;
   }

   var empt = document.forms["myform"]["email"].value;
   if(empt=="")
   {
    alert("Email id cannot be left blank");
    return false;
   }

   var empt = document.forms["myform"]["specialization"].value;
   if(empt=="")
   {
    alert("Specialization cannot be left blank");
    return false;
   }

   var empt = document.forms["myform"]["address"].value;
   if(empt=="")
   {
    alert("Address cannot be left blank");
    return false;
   }

   var empt = document.forms["myform"]["date"].value;
   if(empt=="")
   {
    alert("Date cannot be left blank");
    return false;
   }

   var empt = document.forms["myform"]["time"].value;
   if(empt=="")
   {
    alert("Time cannot be left blank");
    return false;
   }

   var empt = document.forms["myform"]["r2"].value;
   if(empt=="")
   {
    alert("Visit cannot be left blank");
    return false;
   }

   let text = "Are you sure of submitting your details??";
  if (confirm(text) == true) {
    text = "You pressed OK!";
  } else {
    text = "You cancelled!";
  }
}

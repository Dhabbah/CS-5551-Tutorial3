  function SignupPage() {
    window.location.href = '/signup'
  }
  
  function Cancel() {
    window.location.href = '/index'
  }
  
  function LogIn(){
	  var user = document.LogInForm.Username.value;
	  var Pass = document.LogInForm.Password.value;
	  console.log(user, Pass);
      FirstName = localStorage.getItem('First Name');
      LastName = localStorage.getItem('Last Name');
      Username =  localStorage.getItem('Username');
      Password = localStorage.getItem('Password');
	  if ((user == Username) && (Pass == Password)){
		  alert ("Nice Job");
		  document.getElementById("element").style.display = "block";
		  document.getElementById("labuser").textContent = Username;
		  document.getElementById("labFirstName").textContent = FirstName;
		  document.getElementById("labLastName").textContent = LastName;
	  }
	  else{
		  alert ("Login was unsuccessful, please check your username and password");
		  		  document.getElementById("element").style.display = "none";
		  return false;
	  }
  }
  
    function store(){
	  var FirstName = document.SignUpForm.FirstName.value;
	  var LastName = document.SignUpForm.LastName.value;
	  var user = document.SignUpForm.Username.value;
	  var Pass = document.SignUpForm.Password.value;
	  console.log(FirstName, LastName, user, Pass);
	  if (localStorage){
		  localStorage.setItem('First Name', FirstName);
		  localStorage.setItem('Last Name', LastName);
		  localStorage.setItem('Username', user);
		  localStorage.setItem('Password', Pass);
		  console.log(localStorage);
		  if ((FirstName !== "") && (LastName !== "") && (user !== "") && (Pass !== "")){
		  alert ("Nice Job, Registration Successful");
		  location.replace("index")
		  }
		  else{alert('Please complete the form'); }
	  }
	  else{
		  alert ("Signup was unsuccessful, please try to signup again");
		  return false;
	  }
  }
  
  
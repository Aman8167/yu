
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var resume = document.getElementById('resume').value;
  
   
    if (!name || !email || !phone || !resume) {
      alert('Please fill in all fields');
      return;
    }
  
 
    var formData = {
      name: name,
      email: email,
      phone: phone,
      resume: resume
    };
  
   
    console.log(formData);
  
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('resume').value = '';
  });

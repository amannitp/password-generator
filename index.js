
    const password=document.getElementById('password');
    const copyPassword=document.getElementById('copyPassword')
    const generatePassword=document.getElementById('generatePassword')

    generatePassword.addEventListener('click',showGeneratedPassword)
      

    
    function showGeneratedPassword(e){
        console.log(" password is created ")
        
        password.value=generateRandomPassword(12)
    }


    copyPassword.addEventListener('click',copyGeneratedPassword)

    function copyGeneratedPassword(){
        if(password.value!=''){
            password.select();  // // Select the text within the input element
            document.execCommand() // Copy the selected text to the clipboard
        }
      
      
     
    }


  function generateRandomPassword(length) {
       const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
       const lowerCase='abcdefghijklmnopqrstuvwxyz'
       const number='1234567890'
       const symbol='!@#$%^&*()-_+={}[]\|;:/?.>,<';

       const allChar=upperCase+lowerCase+number+symbol;

       let password=''
       console.log('password initially', password)
       password +=upperCase[Math.floor(Math.random()*upperCase.length)]
       password +=lowerCase[Math.floor(Math.random()*lowerCase.length)]
       password +=number[Math.floor(Math.random()*number.length)]
       password +=symbol[Math.floor(Math.random()*symbol.length)]
      

       while(length>password.length){
            password+=allChar[Math.floor(Math.random()*allChar.length)]
       }
     
       return password;
}


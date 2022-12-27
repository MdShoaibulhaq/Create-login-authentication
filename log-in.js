function validate()
{
    var username= document.getElementById("username").value;
    var password= document.getElementById("password").value;
if (username=="Shoaibulhaq6@gmail.com" && password=="Shoaib@8510")
{
    alert("Login Success");
    return true;
}
else{
    alert("Invalid username or password");
    return false;
}
}

function login(showhide){
    if(showhide == "show"){
        document.getElementById('popupbox').style.visibility="visible";
    }else if(showhide == "hide"){
        document.getElementById('popupbox').style.visibility="hidden"; 
    }
  }
  
  function myFunction()
{
alert("Hello! I am an alert box!");
}
</script>
</head>
<body>

<input type="button" onclick="myFunction()" value="Show alert box" />
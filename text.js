<script type="text/javascript">

function volume() {
if (document.getElementById('en').checked) {
document.getElementById("units").value = "English"; document.getElementById("r").value = " (ft) "; document.getElementById("h").value = " (ft) "; document.getElementById("v").value = " (ft^3) ";
} else if ((document.getElementById('si').checked)) { document.getElementById("units").value = "SI"; document.getElementById("r").value = " (m) "; document.getElementById("h").value = " (m) "; document.getElementById("v").value = " (m^3) ";
}
var option = document.getElementById("shape");
var radius = document.myform.radius.value; document.getElementById("rad").value = radius;
if (document.myform.height.value == 0 && (option[option.selectedIndex].value ==
"cylinder" || option[option.selectedIndex].value == "cone")) window.alert("Please Enter Height!");
var height = document.myform.height.value; document.getElementById("ht").value = height;
if (option[option.selectedIndex].value == "Cylinder") {
var volume = (1/1) * Math.PI * radius * radius * height; document.getElementById("cv").value = volume; document.getElementById("vol").value = "Cylinder"; document.getElementById("vol1").value = "Cylinder";
} else if (option[option.selectedIndex].value == "Sphere") { var volume = (4/3) * Math.PI * radius * radius * radius; document.getElementById("cv").value = volume; document.getElementById("vol").value = "Sphere"; document.getElementById("vol1").value = "Sphere";
} else if (option[option.selectedIndex].value == "Cone") { var volume = (1/3) * Math.PI * radius * radius * height; document.getElementById("cv").value = volume; document.getElementById("vol").value = "Cone"; document.getElementById("vol1").value = "Cone";
} }
</script>

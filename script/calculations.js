function ComputeAreaCircle(r){
	var areaCircle = (parseInt(r) * parseInt(r)) * 3.1416;
	var resultAreaCircle = document.getElementById("resultsCircle");
	resultDisplayArea.setAttribute("value",areaCircle.toFixed(2));
}
function ResetFormContents(){
	location.reload(false);
}
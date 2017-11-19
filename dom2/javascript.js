window.onload = function(){
	var liNodes = document.getElementsByClassName("nav");
	for (var i=0; i<liNodes.length; i++)
	{
		liNodes[i].onmouseover = function(){
			this.id = "subMenuShow";
		}
		liNodes[i].onmouseout = function(){
			this.id = "";
		}
	}
}

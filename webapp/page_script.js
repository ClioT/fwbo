function poke()
{
	jQuery.get(
		"/poke.cshtml",
		null,
		function() {
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("pokeresponse").innerHTML = this.responseText ;
			},
		"html"
	);
}
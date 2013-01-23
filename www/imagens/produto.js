function modificaProduto(){
	/* DADOS */
		//DOC_TITULO 		= document.title;
console.log('1');
		try{
		PRODUTO_ID 		= document.location.href.split("produto/")[1].split("/")[0];
		PRODUTO_ID 		= document.getElementsByClassName("AMigalhaAtivo")[0].getAttribute("href").split("/")[2];
		FABRICANTE_IMG 	= document.getElementsByClassName("DSL_ImgFabricante")[0].innerHTML;
		PRODUTO_NOME 	= document.getElementsByClassName("DSL_NomeDescricao")[0].innerHTML;
		}catch(e){
		}
		
console.log('2');
		container_fonte = document.getElementById("modificacao_produto").innerHTML;
		container_fonte = container_fonte.substr(0, container_fonte.length - 4);
		container_fonte = container_fonte.substring(5);
		
		document.getElementById("DSL_ProdutoDetalhesGeral").innerHTML = container_fonte;

console.log('3');
		logado = document.getElementById('flag_logado').value;
		if (logado == "0"){	// não logado
			document.getElementById('AreaClienteHTM').innerHTML = '<a href="/56675_vinadecamisetas/Default.asp?Menu=Cadastro&PGRetorno=PaginaInicial"><img src="/56675_vinadecamisetas/imagens/BotAvalie.gif" border="0" /></a>'
		}
		else
		{
			document.getElementById('AreaClienteHTM').innerHTML = '<a href=# OnClick="AbrePopAval()" title="Clique aqui para avaliar este produto"><img src="/56675_vinadecamisetas/imagens/BotAvalie.gif" border="0" /></a>'			
		}
		document.getElementById('DSL_RedesSociais').innerHTML = '<span style="float:left"><g:plusone size="standard" annotation="bubble"></g:plusone></span>' + document.getElementById('DSL_RedesSociais').innerHTML;
		$("#DSL_RedesSociais").css("border-top","1px solid gray");
		$("#DSL_RedesSociais").css("width","100%");
		$("#DSL_RedesSociais").css("text-align","center");
		$("#DSL_RedesSociais").css("padding","5px");
//		$("#DSL_RedesSociais").css("padding","5px");
		// google plus
		po = document.createElement('script');
		po.type = 'text/javascript';
		po.async = true;
		po.src = 'https://apis.google.com/js/plusone.js';
		s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(po, s);
}
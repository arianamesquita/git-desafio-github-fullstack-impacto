
/* CLIQUE NO SINAL DE "+", À ESQUERDA, PARA EXIBIR A DESCRIÇÃO DO EXEMPLO
 *  
 * Copyright (C) 2014 - UNIVALI - Universidade do Vale do Itajaí
 * 
 * Este arquivo de código fonte é livre para utilização, cópia e/ou modificação
 * desde que este cabeçalho, contendo os direitos autorais e a descrição do programa, 
 * seja mantido.
 * 
 * Se tiver dificuldade em compreender este exemplo, acesse as vídeoaulas do Portugol 
 * Studio para auxiliá-lo:
 * 
 * https://www.youtube.com/watch?v=K02TnB3IGnQ&list=PLb9yvNDCid3jQAEbNoPHtPR0SWwmRSM-t
 * 
 * Descrição:
 * 
 * 	Este exemplo utiliza a saída de dados do Portugol para exibir a 
 * 	mensagem "Olá mundo".
 * 
 * Autores:
 * 
 * 	Giordana Maria da Costa Valle
 * 	Carlos Alexandre Krueger
 * 	
 * Data: 01/06/2013
 */
 
programa 
{ 
	funcao inicio () 
	{
		real venda1,venda2,venda3,venda4,media
		cadeia vendedor

		escreva ("Digite o nome do vendedor: ")
		leia(vendedor)
		escreva ("Digite o número de vendas de janeiro:")
		leia(venda1)
		escreva ("Digite o número de vendas de fevereiro:")
		leia(venda2)
		escreva ("Digite o número de vendas de março:")
		leia(venda3)
		escreva ("Digite o número de vendas de abril:")
		leia(venda4)

		media = (venda1+venda2+venda3+venda4)/4
		
		escreva ("O vendedor: " + vendedor + " obteve os seguintes números de vendas:" +
			" janeiro: " + venda1 + ", " +
			" fevereiro: " + venda2 + ", " +
			" março: " + venda3 + ", " +
			" abril: " + venda4 + ". " +
			" O vendedor " + vendedor + " obteve a média de vendas de: " + media)
	} 
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1520; 
 * @DOBRAMENTO-CODIGO = [1];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
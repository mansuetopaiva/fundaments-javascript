/*
Arquitetura de dados.
casa -
1. Estrutura

1.1 Aterramento 
1.2 Vigas
1.3 Paredes
1.4 Fiação
1.5 Encanação
1.6 Base
1.7 telhado


2. Acabamento	

2.1 Pintura
2.2 Portas
2.3 Pisos
2.4 Janelas
2.5 Tomadas/Interrupitores
2.6 Pias
2.7 Luzes


3. Decoração

3.1 Moveis
3.2 Quadros
3.3 Plantas
3.4 Tapetes
3.5 Cortinas
3.6 Objetos decorativos
3.7 Ar-condicionado
3.8 Eletrodomésticos
3.9 Itens de cozinha
3.10 Itens de banheiro


Sala de entrada.

1. 1 porta
2. 1 mesa
3. 6 cadeiras
4. 1 sofa
5. 1 TV
6. 1 ar-condicionado 
7. 8 tomadas
8. 1 interruptor 
9. 1 móvel para TV
10. 1 ventilador
11. 1 camera

Cozinha.

1. 1 geladeira
2. 1 bebedouro
3. 1 garrafao de 20L
4. 2 pias (para lavar louça e roupa)
5. 2 torneiras
6. 3 móveis (para utensílios)
7. 1 air fryer
8. 1 sanduicheira
9. 1 despensa (1. 2 moveis para utensílios)
10. 1 maquina de lavar
11. 1 liquidificador
12. 1 microondas
13. 1 porta
14. 7 tomadas
15. 1 interruptor
16. 1 camera


Escritorio.

1. 1 mesa automatica
2. 1 mesa de plastico
3. 2 caderias
4. 1 espelho
5. 1 movel
6. 3 notbooks
7. 3 monitores
8. 1 iPad
9. 3 celulares
10. 1 video game
11. 2 caixas de depósitos para utensílios
12. 1 ar-condicionado
13. 1 cortina automatica
14. 1 camera
15. 1 porta
16. 7 tomadas
17. 1 interruptor
18. 2 siris


Quarto do bebe.

1. 1 cama
2. 1 rede
3. 1 comoda
4. 1 ventilador
5. 1 camera
6. 1 janela
7. 1 cortina automatica
8. 1 ar-condicionado
9. 4 tomadas
10. 1 interruptor 
11. 1 porta
12. 1 siri

Banheiro.

1. 1 chuveiro elétrico 
2. 1 pia
3. 1 torneira
4. 1 privada
5. 1 móvel 
6. 1 porta
7. 1 porta de vidro corrediça 
8. 2 tomadas
9. 1 interruptor
10. 1 espelho



function abrirFechar (porta, chuveiro, torneira) {
	if(porta === fechada && porta !== trancado || chuveiro === desligado && chuveiro !== com defeito || torneira === fechada && torneira !== com defeito) {
	return “abrir”
	} else if (porta === aberta && porta !== trancado || chuveiro === ligado && chuveiro !== com defeito || torneira === aberta && torneira !== com defeito) {
	return “fechar”
	}
	return "trancado ou com defeito”
};

function ligarDesligar (iterruptor, utensilios) {
    if(iterruptor === desligado && iterruptor !== com defeito || utensilios === desligados && utensilios !== com defeito) {
    return “ligar" 
    } else if (iterruptor === ligado && iterruptor !== com defeito || utensilios === ligados && utensilios !== com defeito) {
    return “desligar”
    }
    return “Com defeito”
};

function colocarTirar (tomada, itens) {
    if(tomada === vazia) {
    return `colocar ${itens} na tomada` 
    } else if (tomada === ocupada) {
    return `tirar ${itens} da tomada`
    }
    return `tomada com defeito`
};

// O método hasOwnProperty() retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma propriedade herdada).

// Valor de Retorno
// Um booleano indicando se o objeto possui ou não a propriedade especificada como uma propriedade do próprio objeto e que a propriedade não é uma propriedade herdada.

// Descrição
// Todo objeto descendente de Object herda o método hasOwnProperty. Este método pode ser usado para determinar se um objeto possui a propriedade especificada como propriedade direta do objeto.
// Diferentemente do operador in, este método não checa a cadeia prototípica do objeto.

// Nota
// o método hasOwnProperty retorna true mesmo se o valor da propridade em questão é null ou undefined

o = new Object();
o.propUm = null;
o.hasOwnProperty('propUm'); // retorna true
o.propDois = undefined;
o.hasOwnProperty('propDois'); // retorna true

// O seguinte exemplo determina se o objeto o possui uma propriedade com o nome prop:

o = new Object();
o.hasOwnProperty('prop'); // retorna false
o.prop = 'existe';
o.hasOwnProperty('prop'); // retorna true

// Propriedades Diretas vs Propriedades Herdadas
// O seguinte exemplo diferencia entre propriedade diretas e propriedade herdadas da cadeia prototípica:

o = new Object();
o.prop = "existe";
o.hasOwnProperty("prop"); // Retorna true
o.hasOwnProperty("toString"); // Retorna false
o.hasOwnProperty("hasOwnProperty"); // Retorna false

// O seguinte exemplo diferencia entre propriedade diretas e propriedade herdadas da cadeia prototípica:

o = new Object();
o.prop = "existe";
o.hasOwnProperty("prop"); // Retorna true
o.hasOwnProperty("toString"); // Retorna false
o.hasOwnProperty("hasOwnProperty"); // Retorna false

// O seguinte exemplo mostra como percorrer as propriedade de um objeto sem executar as propriedade herdadas.

// Vale observar que o loop for...in percorre somente itens enumeráveis. Entretanto, o método hasOwnProperty também funciona com propriedades não enumeráveis.

var buz = {
    fog: "stack",
  };
  
  for (var nome in buz) {
    if (buz.hasOwnProperty(nome)) {
      alert("this is fog (" + nome + ") for sure. Value: " + buz[nome]);
    } else {
      alert(nome); // toString ou qualquer outra coisa
    }
  }

  // JavaScript não protege o nome hasOwnProperty, assim, se existir a possibilidade do objeto possuir uma propriedade com esse nome, é necessário usar externamente hasOwnProperty para se ter o resultado correto:

  var foo = {
    hasOwnProperty: function () {
      return false;
    },
    bar: "Here be dragons",
  };
  
  foo.hasOwnProperty("bar"); // Sempre retorna false
  
  // Usando a propriedade hasOwnProperty de outro objeto e definindo 'this' como foo
  ({}).hasOwnProperty.call(foo, "bar"); // true
  
  // Também é possível usar hasOwnProperty do objeto
  Object.prototype.hasOwnProperty.call(foo, "bar"); // true
  
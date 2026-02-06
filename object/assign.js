// O Object.assign() método estático copia todas as propriedades próprias enumeráveis​​ de um ou mais objetos de origem para um objeto de destino. Ele retorna o objeto de destino modificado

const target1 = { a: 1, b: 2, c: 10};
const source = { b: 4, d: 55, e: 15 };

const returnedTarget = Object.assign(target1, source);

console.log(target1);
// Expected output: Object { a: 1, b: 4, c: 10, d: 55, e: 15 }

console.log(returnedTarget === target1);
// Expected output: true

// Clonando um objeto

var obj = { a: 1, b: 321, c: `neto` };
var copy = Object.assign({}, obj);
console.log(copy); // { a: 1, b: 321, c: "neto" }

// Mesclando objetos

var o1 = { a: 1 };
var o2 = { b: 2 };
var o3 = { c: 3 };

var obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, o próprio objeto alvo é alterado.
console.log(obj === o1); // Expected output: true

//Copiando propriedades Symbol

var o1 = { a: 1 };
var o2 = { [Symbol("foo")]: 2 };

var obj = Object.assign({}, o1, o2);
console.log(obj); // { a: 1, [Symbol("foo")]: 2 }

//Propriedades herdadas e não enumeráveis ​​não podem ser copiadas

var obj = Object.create(
    { foo: 1 },
    {
      // foo é uma propriedade herdada.
      bar: {
        value: 2, // bar é uma propriedade não enumerável.
      },
      baz: {
        value: 3,
        enumerable: true, // baz é uma propriedade enumerável própria.
      },
    },
  );
  
  var copy = Object.assign({}, obj);
  console.log(copy); // { baz: 3 }

  // Primitivas serão encapsuladas em objetos

  var v1 = "123";
  var v2 = true;
  var v3 = 10;
  var v4 = Symbol("foo");

var obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Primitivos serão agrupados, nulos e indefinidos serão ignorados.
// Observe que apenas wrappers de string podem ter propriedades enumeráveis ​​próprias. 
console.log(obj); // { "0": "1", "1": "2", "2": "3" }

// Exceções irão interromper a tarefa de cópia em execução

let target = Object.defineProperty({}, "foo", {
    value: 1,
    writeable: false,
  }); // target.foo is a read-only property
  
  Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 });
 // TypeError: "foo" é somente leitura
 // A exceção é lançada ao atribuir target.foo
  
  console.log(target.bar); // 2, a primeira fonte foi copiada com sucesso.
  console.log(target.foo2); // 3, a primeira propriedade da segunda fonte foi copiada com sucesso.
  console.log(target.foo); // 1, exceção é lançada aqui.
  console.log(target.foo3); // undefined, o método de atribuição foi concluído, foo3 não será copiado.
  console.log(target.baz); // undefined, a terceira fonte também não será copiada.
  
  // Copiando acessores
  
  var obj = {
    foo: 1,
    get bar() {
      return 2;
    },
  };
  
  var copy = Object.assign({}, obj);
  console.log(copy);
  // { foo: 1, bar: 2 }, the value of copy.bar is obj.bar's getter's return value.
  
  // This is an assign function which can copy accessors.
  function myAssign(target, ...sources) {
    sources.forEach((source) => {
      Object.defineProperties(
        target,
        Object.keys(source).reduce((descriptors, key) => {
          descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
          return descriptors;
        }, {}),
      );
    });
    return target;
  }
  
  var copy = myAssign({}, obj);
  console.log(copy);
  // { foo:1, get bar() { return 2 } }

  
   // Polyfill
  // Este polyfill não suporta propriedades Symbol, visto que ES5 não possui símbolos:

  if (!Object.assign) {
    Object.defineProperty(Object, "assign", {
      enumerable: false,
      configurable: true,
      writable: true,
      value: function (target) {
        "use strict";
        if (target === undefined || target === null) {
          throw new TypeError("Cannot convert first argument to object");
        }
  
        var to = Object(target);
        for (var i = 1; i < arguments.length; i++) {
          var nextSource = arguments[i];
          if (nextSource === undefined || nextSource === null) {
            continue;
          }
          nextSource = Object(nextSource);
  
          var keysArray = Object.keys(Object(nextSource));
          for (
            var nextIndex = 0, len = keysArray.length;
            nextIndex < len;
            nextIndex++
          ) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
            if (desc !== undefined && desc.enumerable) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
        return to;
      },
    });
  }
  
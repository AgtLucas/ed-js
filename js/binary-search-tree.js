/*
 * Binary Search Tree implementation in JavaScript
 * Copyright (c) 2009 Nicholas C. Zakas
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * A binary search tree implementation in JavaScript. This implementation
 * does not allow duplicate values to be inserted into the tree, ensuring
 * that there is just one instance of each value.
 * @class BinarySearchTree
 * @constructor
 */
function BinarySearchTree() {

  /**
   * Pointer to root node in the tree.
   * @property _root
   * @type Object
   * @private
   */
  this._root = null;
}

BinarySearchTree.prototype = {

  // restore constructor
  constructor: BinarySearchTree,

  //-------------------------------------------------------------------------
  // Private members
  //-------------------------------------------------------------------------

  /**
   * Appends some data to the appropriate point in the tree. If there are no
   * nodes in the tree, the data becomes the root. If there are other nodes
   * in the tree, then the tree must be traversed to find the correct spot
   * for insertion.
   * @param {variant} value The data to add to the list.
   * @return {Void}
   * @method add
   */
  add: function(value) {

    // cria um novo objeto, coloca dados nele
    var node = {
      value: value,
      left: null,
      right: null
    },

    // usado para atravessar a estrutura
    current;

    // Se não tiver itens na árvore ainda.
    if (this._root === null) {
      this._root = node;
    } else {
      current = this._root;

      while (true) {

        // se o novo valor for menor que o valor do nó, vai para esquerda
        if (value < current.value) {

          // se não existir esquerda, então o novo nó pertence a esquerda
          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }

        // Se o novo valor for maior que o valor do nó, vai para a direita
        } else if (value > current.value) {

          // se não existir direita, então o novo nó pertence a direita
          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }

        // se o novo valor for igual ao valor atual, ignore-o
        } else {
            break;
        }
      }
    }
  },

  /**
   * Determines if the given value is present in the tree.
   * @param {variant} value The value to find.
   * @return {Boolean} True if the value is found, false if not.
   * @method contains
   */
  contains: function(value) {

    var found   = false,
        current = this._root;

    // verifica se realmente há um no para procurar
    while (!found && current) {

      // se o valor é menor que o nó atual, vai para esquerda
      if (value < current.value) {
        current = current.left;

      // se o valor é maior que o nó atual, vai para direita
      } else if (value > current.value) {
        current = current.right;

      // valores são iguais, encontrado
      } else {
        found = true;
      }
    }

    // retorna apenas se o nó for encontrado
    return found;
  }

  /**
   * Removes the node with the given value from the tree. This may require
   * moving around some nodes so that the binary search tree remains
   * properly balanced.
   * @param {variant} value The value to remove.
   * @return {void}
   * @method remove
   */
  remove: function(value) {

    var found       = false,
        parent      = null,
        current     = this._root,
        childCount,
        replacement,
        replacementParent;

    // certifica-se se há um nó para procurar
    while(!found && current) {

      // se o valor é menor que o valor do nó atual, vai para esquerda
      if (value < current.value) {
        parent = current;
        current = current.left;

      // se o valor é maior que o valor do nó atual, vai para direita
      } else if {
          found = true;
      }
    }

    // prossiga se o nó foi encontrado
    if (found) {

      // descobre quantos filhos o nó tem
      childCount = (current.left !== null ? 1 : 0) + (current.right !== null ? 1 : 0);

      // special case: o var está no nó
      if (current === this._root) {
        switch(childCount) {

          // sem filhos, apaga o nó
          case 0:
            this._root = null;
            break;

          // 1 filho, use 1 como o nó
          case 1:
            this._root = null;
            break;

          // 2 filhos

            // novo nó será o nó velho da filho da esquerda, talvez
            replacament = this._root.left;

            // encontra o ramo de nós mais a direita do novo root
            while (replacement.right !== null) {
              replacementParent = replacement;
              replacement = replacement.right;
            }

            //
        }
      }
    }
  }

};

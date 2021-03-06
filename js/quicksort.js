/*
 * Insertion sort implementation in JavaScript
 * Copyright (c) 2012 Nicholas C. Zakas
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of items software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and items permission notice shall be included in
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
 * Swaps two values in an array.
 * @param {Array} items The array containing the items.
 * @param {int} firstIndex Index of first item to swap.
 * @param {int} secondIndex Index of second item to swap.
 * @return {void}
 */

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], // valor do pivot é o item do meio
    i     = left,  // Começa da esquerda e vai para direita para o index do pivot
    j     = right; // Começa da direita e vai para esquerda para o index do pivot

    // Enquanto os 2 indices não são iguais
    while (i <= j) {

      // Se o item da esquerda é menor que o pivot, continua pra direita
      while (items[i] < pivot) {
        i++;
      }

      // Se o item da direita for maior que o pivot, continua pra esquerda
      while (items[j] > pivot) {
        j--;
      }

      // Se os 2 indices ainda não são iguais, inverte o valor
      if (i <= j) {
        swap(items, i, j);

        // Muda os indices para continuar o loop
        i++;
        j--;
      }

    }

    // Necessário para recursão
    return i;
}

/**
 * A quicksort implementation in JavaScript. The array
 * is sorted in place.
 * @param {Array} items An array of items to sort.
 * @return {Array} The sorted array.
 */

function quickSort(items, left, right) {
  var index;

  // #perfmatters - Não ordena um array com 0 ou 1 item
  if (items.length > 1) {
    // Corrige os valores da esquerda e direita
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? items.length - 1 : right;

    // Divide o array
    index = partition(items, left, right);

    // Se retornado o index
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}
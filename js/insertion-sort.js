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
 * An insertion sort implementation in JavaScript. The array
 * is sorted in-place.
 * @param {Array} items An array of items to sort.
 * @return {Array} The sorted array.
 */
function insertionSort(items) {

  var len      = items.length, // números de itens no array
      value, // o valor atualmente sendo comparado
      i, // indice na seção não ordenado
      j; // indice na seção ordenada

  for (i = 0; i < len; i++) {

    // armazena o valor atual, pois pode mudar depois
    value = items[i];

    for (j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }

    items[j + 1] = value;
  }

  return items;
}
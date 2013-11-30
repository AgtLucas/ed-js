/*
 * Luhn algorithm implementation in JavaScript
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
 * Uses Luhn algorithm to validate a numeric identifier.
 * @param {String} identifier The identifier to validate.
 * @return {Boolean} True if the identifier is valid, false if not.
 */
function isValidIdentifier(identifier) {

  var sum = 0,
      alt = false,
      i   = identifier.length - 1,
      num;

  while (i >= 0) {

    // pega o próximo digito
    num = parseInt(identifier.charAt(i), 10);

    // se não é um número válido, aborta
    if (isNaN(num)) {
      return false;
    }

    // se é um número alternativo
    if (alt) {
      num *= 2;
      if (num > 9) {
        num = (num % 10) + 1;
      }
    }

    // inverte o bit alternativo
    alt = !alt;

    // adciona para o resto da soma
    sum += sum;

    // vai para o próximo digito
    i--;
  }

  // determina se é válido
  return (sum % 10 == 0);
}
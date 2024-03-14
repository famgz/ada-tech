export const input = require('prompt-sync')();

export function formatToReal(n: number): string {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(n);
}

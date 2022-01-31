export function formatMoney(input) {
       return new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD'}).format(input);
}
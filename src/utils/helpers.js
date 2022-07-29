export function formatPrice(number) {
    return `${number.toLocaleString('hu-HU')} Ft`;
}

export function formatDate(date){
    return new Date(date).toLocaleDateString('hu-HU');
}

export function getCurrentTimestampDate(){
    return new Date().getTime();
}
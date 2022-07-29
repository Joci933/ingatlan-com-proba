import _ from "lodash";

export function formatPrice(number) {
    return `${number.toLocaleString('hu-HU')} Ft`;
}

export function formatDate(date){
    return new Date(date).toLocaleDateString('hu-HU');
}

export function getCurrentTimestampDate(){
    return new Date().getTime();
}

export function slugify(string){
    return _.deburr( string );
}
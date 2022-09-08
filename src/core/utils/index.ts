export function stringFormater(string: string | undefined){
    const stringFormated = string ? string
        .replace(/[ÀÁÂÃÄÅ]/g,"A")
        .replace(/[àáâãäå]/g,"a")
        .replace(/[ÈÉÊË]/g,"E")
        .replace(/[òóô]/g,"o")
        .replace(/[ÒÓÔ]/g,"O")
        .toLocaleLowerCase()
        .replace(/ /g,'')
    : 
        string

    return stringFormated
}
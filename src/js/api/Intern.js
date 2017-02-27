// import ApiFetch from './Base'
// import XLSX from 'xlsx'

export default {
    // get: data => ApiFetch('/spreadsheets/d/1pTgvUcZoaVcrdiFRgow4PdAURbUaCGnszL853UntAew/export?format=xlsx&id=1pTgvUcZoaVcrdiFRgow4PdAURbUaCGnszL853UntAew', {
    // })
    get: () => {
        return new Promise(
            (resolve, reject) => {
                const url = 'https://docs.nctu.me//spreadsheets/d/1pTgvUcZoaVcrdiFRgow4PdAURbUaCGnszL853UntAew/export?format=xlsx&id=1pTgvUcZoaVcrdiFRgow4PdAURbUaCGnszL853UntAew'
                var xhr = new XMLHttpRequest()
                xhr.open('GET', url)
                xhr.send()
                xhr.onload = (msg) => {
                    resolve(xhr.responseText)
                    console.log(xhr.responseText)
                }
            }
        )
    }
}

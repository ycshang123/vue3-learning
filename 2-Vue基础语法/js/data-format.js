
let timeFormat = function (dt) {
    let y = dt.getFullYear()
    let m = (dt.getMonth() + 1).toString().padStart(2, '0')
    let d = dt.getDate().toString().padStart(2, '0')
    let hh = dt.getHours().toString().padStart(2, '0')
    let mm = dt.getMinutes().toString().padStart(2, '0')
    let ss = dt.getSeconds().toString().padStart(2, '0')
    let formatStr = `${y}-${m}-${d} ${hh}:${mm}:${ss}`
    return formatStr
}



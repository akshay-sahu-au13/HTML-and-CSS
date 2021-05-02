var sort_by = function (key, order) {
    if (order === 'ASC') {
        return function (a, b) {
            if (a[key] > b[key]) {
                return 1;
            } else if (a[key] < b[key]) {
                return -1;
            }
            return 0;
        }
    } else if(order === "DESC"){
        return function (a, b) {
            if (a[key] < b[key]) {
                return 1;
            } else if (a[key] > b[key]) {
                return -1;
            }
            return 0;
        }
    } else {
        console.log(`INVALID ORDER, PLEASE ENTER EITHER "ASC" or "DESC"...`)
    }
}
module.exports = sort_by;
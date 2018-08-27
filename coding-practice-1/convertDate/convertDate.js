/**
 * This function converts user entered date format M/D/YYYY to YYYYMMDD
 * @param userDate
 * @return formattedDate
 */
function convertDate(userDate){
    var d = new Date(userDate);
    if (isNaN(d.getDate())){
        return "Invalid date";
    }
    return d.getFullYear().toString() + (d.getMonth()+1).toString() + d.getDate().toString();
}

console.log(convertDate("12/31/2014"));
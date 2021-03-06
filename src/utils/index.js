export default {
    formDate(unix) {
        function fixedZero(num) {
            return num >= 10 ? ('' + num) : ( '0' + num )
        }
        let date = new Date(unix)
        let year = date.getFullYear()
        let month = fixedZero(date.getMonth())
        let day = fixedZero(date.getDate())
        let hour = fixedZero(date.getHours())
        let min = fixedZero(date.getMinutes())
        let seconds = fixedZero(date.getSeconds())

        return `${year}-${month}-${day} ${hour}:${min}:${seconds}`
    }
}
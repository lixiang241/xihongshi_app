export default {
    timeFormat: function (value) {
        let date = new Date(value).getDate();
        let cDate = new Date().getDate();
        let response;
        try {
            response = date === cDate ? value.split(" ")[1] : value.split(" ")[0]
        } catch (e) {
            response = value
        }
        return response
    },
    djangoTimeFormat : function (value) {
        let date = new Date(value);
        let year = date.getFullYear();
        let mouth = date.getMonth() + 1;
        mouth = mouth >= 10 ? mouth : "0" + mouth;
        let day = date.getDate();
        day = day >= 10 ? day : "0" + day;
        let hour = date.getHours();
        hour = hour >= 10 ? hour : "0" + hour;
        let minutes = date.getMinutes();
        minutes = minutes >= 10 ? minutes : "0" + minutes;
        let seconds = date.getSeconds();
        seconds = seconds >= 10 ? seconds : "0" + seconds;
        return `${year}-${mouth}-${day} ${hour}:${minutes}:${seconds}`
    }
}




let app = new Vue({
    el: "#app",
    data: {
        farminfo: {},
    },
    methods: {
        getFarminfo(){
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                const response = JSON.parse(xhr.responseText);
                console.log('farminfo',response);
            }
            xhr.open("get", "../phps/getFarmInfo.php", true);
            xhr.send(null);
        }
    },
})
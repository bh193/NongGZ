let app = new Vue({
    el: "#app",
    data: {
        farminfo: {},
        showImage: '',
        newtel:'',
        newPsw: '',
        conPsw: '',
        storyTxt: '',
        settingTxt: '',
        selectbanner: '',
        // options: '',
        options: [
            {text: "banner-1", value: 'banner-1.png'},
            {text: "banner-2", value: 'banner-2.png'},
            {text: "banner-3", value: 'banner-3.png'},
            {text: "banner-4", value: 'banner-4.png'},
            {text: "banner-5", value: 'banner-5.png'},
        ],
        infoImage: '',
        storyImage: '',
        settingImage: '',
    },
    methods: {
        //小農資訊
        getFarminfo(){
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                console.log(JSON.parse(xhr.responseText))
                app.farminfo = JSON.parse(xhr.responseText);
            }
            xhr.open("get", "../dist/phps/getFarmInfo.php", true);
            xhr.send(null);
        },
        //大頭照照片
        imgChange(e) {
            let show = URL.createObjectURL(e.target.files[0]);
            this.showImage = show;
        },
        //info照片
        infoChange(e) {
            let infoshow = URL.createObjectURL(e.target.files[0]);
            this.infoImage = infoshow;
        },
        //story照片
        storyChange(e) {
            let storyshow = URL.createObjectURL(e.target.files[0]);
            this.storyImage = storyshow;
        },
        //setting照片
        settingChange(e) {
            let settingshow = URL.createObjectURL(e.target.files[0]);
            this.settingImage = settingshow;
        },
        getStatus(farmStatus) {
            switch(farmStatus) {
                case'0':
                return "停用";
                    break;
                case'1':
                return "審核中";
                    break;
                case'2':
                return "啟用";
                    break;
                case'3':
                return "上架";
                    break;
            }
        },
        sendPsw(){
            if(this.newPsw !== this.conPsw){
                console.log("確認密碼與新密碼不相符")
            }else{
                axios({
                    method: 'get',
                    url: '../dist/phps/returnback_farmPsw.php',
                    params:{
                        psw:this.newPsw,
                        farmId:this.farminfo.farm_id,
                    },
                })
                .then((response) => location.reload())
                .catch((error) => console.log(error))
            }
        },
        // sendInfo(){
        //     axios({
        //         methods: 'get',
        //         url: '../dist/phps/returnback_farminfo.php',
        //         params:{
        //             tel:this.farminfo.farm_tel,
        //             address:this.farminfo.farm_address,
        //             infoPic:this.infoImage,
        //             storyPic:this.storyImage,
        //             settingPic:this.settingImage,
        //             wstory:this.storyTxt,
        //             wsetting:this.settingTxt,
        //             farmId:this.farminfo.farm_id,
        //         },
        //     })
        //     .then((response) => console.log(response))
        //     .catch((error) => console.log(error))
        // },
        sendInfo(){
            $.ajax({
                type: 'post',
                url: "../dist/phps/returnback_farminfo.php",
                data: JSON.stringify({
                    tel:this.farminfo.farm_tel,
                    address:this.farminfo.farm_address,
                    infoPic:this.infoImage,
                    storyPic:this.storyImage,
                    settingPic:this.settingImage,
                    wstory:this.storyTxt,
                    wsetting:this.settingTxt,
                    farmId:this.farminfo.farm_id,
                }),
                contentType: "application/json; charset=utf-8",
                success: (res) => {
                    console.log(res)
                },
                error: () => {
                    console.log('error')
                },
                complete: () => {
                    console.log()
                }
            });
        },
        clearPsw(){
            this.newPsw = '',
            this.conPsw = ''
        },
        // getBanner(){
        //     let xhr = new XMLHttpRequest();
        //     xhr.onload = function () {
        //         app.options = JSON.parse(xhr.responseText)
        //     }
        //     xhr.open("get", "../dist/phps/getFarmbanner.php", true);
        //     xhr.send(null);
        // }
    },
    computed:{
        fullImageUrl(){
            return "images/farm/" + this.farminfo.farm_banner;
        }
    },
    mounted() {
        this.getFarminfo();
        // this.getBanner();
        Vue.nextTick(function(){
            $('a[href="#modal_password"]').click(function(event) {
                event.stopPropagation();
                $(this).modal({ fadeDuration: 300});
            })
        });
    },
})
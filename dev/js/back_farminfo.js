let app = new Vue({
    el: "#app",
    data: {
        farminfo: {
            farm_id: '',
            farm_name: '',
            farm_gm: '',
            city_id: '',
            farm_address: '',
            farm_tel: '',
            farm_imgA: '',
            farm_imgB: '',
            farm_imgC: '',
            farm_contentA: '',
            farm_contentB: '',
            farm_banner: '',
            farm_status:'',
            farm_email:'',
        },
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
                app.farminfo = JSON.parse(xhr.responseText)
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
        infoChange(e, index) {
            let file = e.target.files[0];
            let readFile = new FileReader();
            readFile.readAsDataURL(file);
            readFile.addEventListener('load', (e) => {
                if(index == 1){
                    this.infoImage = e.target.result;
                } else if(index == 2){
                    this.storyImage = e.target.result;
                }else{
                    this.settingImage = e.target.result;
                }
            });
        },
        getStatus(farm_status) {
            switch(farm_status) {
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
                .then((response) => {
                    alert("更新成功");
                    location.reload();

                })
                .catch((error) => console.log(error))
            }
        },
        sendInfo(){
            let data = {
                tel:this.farminfo.farm_tel,
                address:this.farminfo.farm_address,
                wstory:this.farminfo.farm_contentA,
                wsetting:this.farminfo.farm_contentB,
                banner:this.farminfo.farm_banner,
                imageA:this.infoImage,
                imageB:this.storyImage,
                imageC:this.settingImage,
                farmId:this.farminfo.farm_id,
            }
            $.ajax({
                type: 'post',
                url: "../dist/phps/returnback_farminfo.php",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                success: (res) => {
                    alert("更新成功")
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
    },
    computed:{
        fullImageUrl(){
            return "images/farm/" + this.farminfo.farm_banner;
        }
    },
    mounted() {
        this.getFarminfo();
        Vue.nextTick(function(){
            $('a[href="#modal_password"]').click(function(event) {
                event.stopPropagation();
                $(this).modal({ fadeDuration: 300});
            })
        });
    },
})
let tree_menu = new Vue({
    el: "#tree_menu",
    data: {
        menus: []
    },
    computed: {
        menuList() {
            return this.menus.filter(menu => { return menu.farm_id == $('#farm_id').text()});
        },
    },
    updated() {
        $('.content').click(function () {
            $(this).find('.con_text').slideToggle(500, "easeOutExpo");
        }).children('.con_text').hide();

        $('.content').click(function () {
            $(this).find('.turn').toggleClass('turn_zero');
        })
    }
})

function getTree_menu() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        tree_menu.menus = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "./phps/getTree_menu.php", true);
    xhr.send(null);
}

window.addEventListener("load", function () {
    getTree_menu();

})
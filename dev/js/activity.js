var infScroll = new InfiniteScroll( ".main", {
  path: function() {
    // 頁面路徑
    if ( this.loadCount < 1 ) {
      return "activity2.html"; // 讀取此頁面
    }
  },
  append: ".main", // 匯入物件類別
  status: ".scroller-status" // 捲軸狀態類別
})
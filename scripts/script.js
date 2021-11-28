
new Vue({
    el: "#app",
    data: {

    },
    methods: {
        scrollDown() {
            $("html, body").animate({ scrollTop: 1200 }, "slow");
        },
        works() {
            console.log('xd')
            this.scrollDown()
        }
    }
})
<template>
    <div class="box">
        <div class="fill">
            <div class="procress" :style="{width:num+'%'}"></div>
        </div>
        <p>完成率{{num}}%</p>
    </div>
</template>

<script>

export default ({
    name: "ib-bar-line",
    props: {
        num: {
            type: Number,
            default: function () {
                return {};
            }
        }
    },
    methods: {

    },
    data() {
        return {

        }
    }
})
</script>
<style scoped lang="scss">
.box {
    display: flex;
    align-items: center;
    width: 100%;
    .fill {
        width: 100%;
        height: 26px;
        background-color: #132c59;
        position: relative;

        .procress {
            background-color: #0dfbe4;
            position: absolute;
            height: 26px;
            left: 0;
            top: 0;
        }
    }

    p{
        color: #fff;
        margin-left: 14px;
        font-size: 12px;
        width: 80px;
    }
}
</style>
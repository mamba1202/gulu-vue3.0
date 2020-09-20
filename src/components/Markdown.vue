<template>
    
</template>

<script lang="ts">
export default {
    props:{
        path:{
            type: String,
            required: true
        }
    },
    setup(props){
        import(props.path).then(res=>{
            console.log(res.default)
            // 动态引入成功回调会有default
        })
    }
}
</script>
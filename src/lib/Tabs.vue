<template>
    <div>
        <div v-for="(t, index) in titles" :key="index">{{t}}</div>
        <component  v-for="(c,index) in defaults" :is="c" :key="index"></component>

    </div>
</template>

<script>
import Tab from './Tab.vue'
export default {
    setup(props,context){
    console.log({...context.slots.default()})
    const defaults  = context.slots.default()

    defaults.forEach((tag)=>{
        if(tag.type!=Tab){
            throw new Error('Tabs 子标签必须是 Tab')
        }
        console.log(tag)
    })

    const titles  = defaults.map((tag)=>{
        return tag.props.title
    })

    return{
        defaults,
        titles
    }

    }
}
</script>
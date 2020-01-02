<template>
    <div>
        <div class="jumbotron">
            <h1>Online Courses</h1>
            <strong>Total count:{{totalCount}}</strong>
        </div>
        <div class="row">
            <div  class="col-md-4" v-for="course in this.$store.state.courses" :key="course.id">
            <Course :course-details="course" @delete-a-course="DeleteTheCourse_Parent($event)"></Course>
            </div> 
        </div>
    </div>
</template>


<script>
import Course from './course.component.vue';
import {mapGetters} from 'vuex';
    export default{
        name:'listofcourses',
        components:{
            Course
        },
        // methods:{
        //     DeleteTheCourse_Parent(id){
        //         this.courses=this.courses.filter(c=>c.id!=id);
                
        //     }
            

        // },
        mounted(){
                this.$store.dispatch('getCoursesAsync');
            },
        computed:{//mapGetters is to make getters available as computed property
            ...mapGetters(['totalCount'])
        }
    }
</script>

<style scoped>


</style>
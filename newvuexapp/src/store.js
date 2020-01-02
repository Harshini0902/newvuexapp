import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);
export const store= new Vuex.Store({
state:{
    courses:[]
},
mutations:{
    incrementLikes(state,args){
    let index=state.courses.findIndex(c=>c.id==args);
    state.courses[index].likes++;

    },
    setCourses(state,args){
        state.courses=args;
    },
    deleteTheCourse(state,args){
        state.courses=state.courses.filter(c=>c.id!=args);
    }

},
actions:{
    getCoursesAsync({commit}){
    
        axios.get('https://api.myjson.com/bins/1dbua4')
        .then(response=>commit('setCourses',response.data))
       
    }
},
getters:{
    totalCount:
    state=>state.courses.length
}
    
});
Vue.component('app-showcase', {
    template:`
        <section class="showcase" :cards="cards">
            <show-case-card></show-case-card>
        </section>
    `,
    props:['po', 'cards'],
    data(){
        return{
           
            
        }
    },
    methods:{
       
    }
}) 

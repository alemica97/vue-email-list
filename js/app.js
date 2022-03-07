const app = new Vue({

    el : '#app',

    data : {
        emailArray : [],
    },

    created(){
        for(let i = 0; i <= 9; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(( response ) => {
                this.emailArray.push(response.data.response);
                console.log(this.emailArray);
            })
        }
        
    }

});
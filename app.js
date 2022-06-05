const app = Vue.createApp({
    data (){
        return{
            firstName: 'John',
            lastName: 'Jeeff',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250',
        }
    },
    methods:{ 
        getUser() {
            this.firstName = 'Adam'
            this.lastName='freeman'
            this.email= 'adam@gmail.com'
           this.gender='female'
           this.picture= 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250'
        },
     },
})

app.mount('#app')

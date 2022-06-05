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
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            
            //console.log(results)

            this.firstName = results[0].name.first
            this.lastName= results[0].name.last
            this.email= results[0].email
           this.gender= results[0].gender
           this.picture= results[0].picture.large
        },
     },
})

app.mount('#app')

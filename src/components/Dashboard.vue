<template>
    <div class="dashboard">
        <table class="striped">
            <thead>
                <tr>
                    <th>Company</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody v-for="(user, index) in users" :key="index">
                <tr>
                    <td>{{ user.company }}</td>
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>{{ user.title }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
/* eslint-disable */
import { db } from '@/firebaseconf.js'

export default {
  name: 'dashboard',
  data () {
    return {
        users: []
    }
  }, 
  created: function(){
    //   return {
    //       users: db.collection('Users')
    //   }
    db.collection('Users').get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            //  console.log(doc.id, " => ", doc.data())
            let user = doc.data()
            user.id = doc.id
            this.users.push(user)
            //  console.log(user)
        });
    })
    .catch(error =>{
        console.log("Error getting documents: ", error);
    })
  }
}
</script>

<style>
</style>

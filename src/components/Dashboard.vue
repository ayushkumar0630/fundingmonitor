<template>
    <div class="dashboard">
        <table class="striped">
            <thead>
                <tr>Company</tr>
                <tr>First Name</tr>
                <tr>Last Name</tr>
                <tr>Title</tr>
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
      users: db.collection('Users')
  }
}
</script>

<style>
</style>

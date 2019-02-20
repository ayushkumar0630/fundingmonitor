<template>
  <div class="dashboard">
    <div class="header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="title">Opportunities</div>
          </div>
          <div class="col-md-6">
            <div class="functions clearfix">
              <input type="button" class="btn-add float-right" value="Add Opportunity">
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="data-grid striped">
      <thead>
        <tr>
          <th width="20px">
            <label>
              <input type="checkbox" class="filled-in">
              <span></span>
            </label>
          </th>
          <th>Company</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ index }}</td>
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
import { db } from "@/firebaseconf.js";

export default {
  name: "dashboard",
  data() {
    return {
      users: []
    };
  },
  created: function() {
    //   return {
    //       users: db.collection('Users')
    //   }
    db.collection("Users")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          //  console.log(doc.id, " => ", doc.data())
          let user = doc.data();
          user.id = doc.id;
          this.users.push(user);
          //  console.log(user)
        });
      })
      .catch(error => {
        console.log("Error getting documents: ", error);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.dashboard {
  .header {
    padding: 10px;

    .container-fluid{
        padding:0px;
        .row{
            margin-bottom:0px;
        }
    }

    .title {
      font-size: 20px;
      font-weight: 500;
      color: #5b8f9d;
      line-height: 40px;
    }

    .btn-add {
      background-color: #3bc1ad;
      padding: 10px 20px;
      border-radius: 4px;
      font-weight: normal;
      border: 1px solid #333;
      border: none;
      border-bottom: 3px solid #2eaa98;
      color: #ffffff;
      outline: none;
    }
  }
}

.data-grid {
  thead {
    tr {
      th {
        background-color: #f3f3f1;
        border-radius: 0px;
        border: 1px solid #e6e6e5;
        color: #6c7b88;
        padding: 2px 10px;

        &:first-child {
          text-align: center;

          label {
            span {
              padding: 0;
              width: 20px;
              display: inline-block;
              margin-top: 9px;
              height: 20px;
              vertical-align: bottom;
            }
          }
        }
      }
    }
  }
  tbody {
    tr {
      td {
        // background-color: #f3f3f1;
        border-radius: 0px;
        border: 1px solid #e6e6e5;
        color: #6c7b88;
        padding: 6px 10px;

        &:first-child {
          text-align: center;
        }
      }

    //   &:nth-child(odd) {
    //     td {
    //       background: #ddd;
    //     }
    //   }
    }
  }
}
</style>


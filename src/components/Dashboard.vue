<template>
  <div class="dashboard">
    <div class="header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="title">
              <span>Investors</span>
              <span class="icon-title"></span>
            </div>
          </div>
          <div class="col-md-6">
            <div class="functions clearfix">
              <input type="button" class="btn-add float-right" value="Add Investor">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sub-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6">
            <div class="row">
          <div class="col-md-6">
            <div class="grid-options">
              <span class="option-1"></span>
              <span class="option-2"></span>
              <span class="option-search">
                <input type="text" name="Search field values" id class="txt-search">
              </span>
            </div>
            </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="content float-right">
              <div class="row-count">28 Investors</div>
              <div class="filter">
                <span class="filter-icon"></span>
                <span class="filter-label">Filters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <table class="data-grid striped">
      <thead>
        <tr>
          <th width="20px">
              <input type="checkbox" class="chk">
              <span></span>
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
    padding: 10px 0;

    .container-fluid {
      .row {
        margin-bottom: 0px;
      }
    }

    .title {
      font-size: 20px;
      color: #fead41;
      line-height: 40px;

      span {
        display: inline-block;
        vertical-align: middle;
      }
    }

    .icon-title {
      width: 24px;
      height: 24px;
      background-image: url("../assets/icon-title.svg");
      background-repeat: no-repeat;
      margin-left: 10px;
    }

    .btn-add {
      background-color: #fead41;
      padding: 10px 20px;
      border-radius: 4px;
      font-weight: normal;
      border: 1px solid #333;
      border: none;
      border-bottom: 3px solid #da8413;
      color: #ffffff;
      outline: none;
    }
  }

  .sub-header {
    .row {
      margin-bottom: 0px;
    }
    .row-count {
      font-size: 14px;
      color: #8f8f8f;
      display: inline-block;
      margin-top: 8px;
    }

    .filter {
      display: inline-block;
      margin-top: 8px;
      margin-left: 4px;
      span {
        display: inline-block;
        vertical-align: middle;

        &.filter-icon {
          width: 20px;
          height: 20px;
          margin-right: 4px;
          background-image: url("../assets/icon-filter.svg");
          background-repeat: no-repeat;
        }
      }
    }

    .txt-search {
      width: 100%;
      background-image: url("../assets/icon-search.svg");
      background-repeat: no-repeat;
      background-position: right 12px top 6px;
      padding-right: 40px;
      padding: 8px;
      border-radius: 3px;
      border: 1px solid #a6b4c2;
      border-radius: 4px;
    }
  }
}

.data-grid {
      width: 100%;
    margin-top: 10px;
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


<template>
  <div id="app" class="w-1/2 mx-auto small-container">
    <!-- <employee-create @add:employee="handleAddEmployee" /> -->
    <!-- <employees :employees="employees" @delete:employee="handleDeleteEmployee" /> -->

    <router-view
      :employees="employees"
      @delete:employee="handleDeleteEmployee"
      @do:create="handleAddEmployee"
    ></router-view>
  </div>
</template>

<script>
// import Employees from './components/Employees.vue'
// import EmployeeCreate from './components/EmployeeCreate.vue'
import axios from 'axios'
import avatar from '@/assets/avatar.gif'
// eslint-disable

export default {
  name: 'app',
  components: {
    // Employees,
    // EmployeeCreate
  },
  data(){
    return {

      employees: [],
      avatar: avatar
      
    }
  },

  computed: {
    // return this.results.map(i => i.mark).reduce((mark, total) => mark+total)
  },

  methods:{
    fetchData(){
      axios
      .get('https://reqres.in/api/users?page=1')
      .then(res => {
        const {data} = res.data;
        this.employees = data;
      });
    },

    handleAddEmployee(employeeData){
      let newEmployee = {};
      newEmployee.id = this.employees.length;
      newEmployee.first_name = employeeData[0].first_name;
      newEmployee.last_name = employeeData[0].last_name;
      newEmployee.email = employeeData[0].email;
      newEmployee.avatar = this.avatar;
      this.employees.push(newEmployee);

      // Add by deconstruction
      // this.employees = [...this.employees, employee]
    },

    handleDeleteEmployee(id){
      // Using array splice
      // this.employees.splice(id-1, 1);

      // Using aray filter
      // https://github.hubspot.com/vex/api/advanced/
      vex.dialog.confirm({
          message: 'Are you sure you want to remove the item?',
          callback: (consent) => {
            if (consent) this.employees = this.employees.filter(i => i.id != id)          
          }
      })
      
    }
  },

  mounted() {
    this.fetchData();
  },

  created() {
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
}

button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  /* max-width: 680px; */
}
</style>

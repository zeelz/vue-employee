<template>
	<div>
		<employee-create @add:employee="transmitEmployeeCreate" />

		<h1>Employees List</h1>

		<table id="employee-table" class="w-full">
			<thead>
				<tr class="text-left border-b-2 border-gray-300">
					<th class="py-5"></th>
					<th>Name</th>
					<th>Email</th>
					<th colspan="2"><span></span></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="employee in employees" :key="employee.index" class="border-b last:border-b-0 border-gray-300">
					<td class="py-3"><img :src="employee.avatar" class="rounded-full w-2/3" :alt="employee.first_name + '\'s avatar'"></td>
					<td>{{ employee.first_name }} {{ employee.last_name }}</td>
					<td>{{ employee.email }}</td>
					<td>
						<button class="bg-blue-000 hover:bg-blue-700 rounded border border-none text-white px-5 py-2">Edit</button>
					</td>
					<td>
						<button @click="deleteEmployee(employee.id)" class="bg-blue-000 hover:bg-blue-700 rounded border border-none text-white px-5 py-2">Delete</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import EmployeeCreate from './EmployeeCreate.vue';

	export default{
		name: 'employees',

		components: {
			EmployeeCreate
		},

		props: {
			employees: Array,
		},

		methods: {
			transmitEmployeeCreate(e){
				this.$emit('do:create', e)
			},

			deleteEmployee(id){
				this.$emit('delete:employee', id);
			}
		},

		mounted(){
			// console.log(this.employees);
		}
	}
</script>

<style scoped>
	
</style>
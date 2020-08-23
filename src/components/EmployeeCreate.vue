<template>
	<div>
		<h1 class="text-4xl font-semibold mb-4">Employees</h1>
		<form @submit.prevent="addEmployee">
			<div>
				<label for="first_name" class="font-semibold">Employee Fist Name</label>

				<input
					type="text"
					id="first_name"
					v-model="first_name"
					name="first_name"
					:class="{ 'has-error': submitting && invalidFirstName }"
					@focus="clearStatus"
					@keypress="clearStatus"
					class="w-full border rounded p-2 mb-4 mt-2 focus:outline-none focus:border-blue-000"
				/>
			</div>
			<div>
				<label for="last_name" class="font-semibold">Employee Last Name</label>
				<input type="text" id="last_name" v-model="last_name" class="w-full border rounded p-2 mb-4 mt-2 focus:outline-none focus:border-blue-000" />
			</div>
			<div>
				<label for="email" class="font-semibold">Employee Email</label>
				<input type="email" id="email" v-model="email" class="w-full border rounded p-2 mb-4 mt-2 focus:outline-none focus:border-blue-000" />
			</div>

			<p v-if="error && submitting" class="error-message">❗Please fill out all required fields</p>
			<p v-if="success" class="success-message">✅ Employee successfully added</p>

			<button class="bg-blue-000 hover:bg-blue-700 rounded border border-none text-white font-semibold shadow px-5 py-3">Add New Employee</button>
		</form>
	</div>
</template>

<script>

	export default{
		name: 'employee-create',

		data(){
			return {
				first_name: '',
				last_name: '',
				email: '',
				employees: Array(),
				submitting: false,
				error: false,
				success: false,
			}
		},

		methods: {
			addEmployee(){
				this.submitting = true
				this.clearStatus()

				if (this.invalidFirstName || this.invalidLastName || this.invalidEmail) {
					this.error = true
					return
				}

				this.employees.push({
					first_name: this.first_name,
					last_name: this.last_name,
					email: this.email
				});

				this.$emit('add:employee', this.employees);

				// Reset form
				this.first_name = '';
				this.last_name = '';
				this.email = '';

				this.error = false
				this.success = true
				this.submitting = false
			},
			clearStatus() {
				this.success = false
				this.error = false
				this.employees.length = 0
			}
		},
		computed: {
			invalidFirstName() {
				return this.first_name === ''
			},
			invalidLastName() {
				return this.last_name === ''
			},
			invalidEmail() {
				return this.email === ''
			},
		},
	}
</script>

<style scoped>
	form {margin-bottom: 2rem;}
	[class*='-message'] {
		font-weight: 500;
	}
	.error-message {
		color: #d33c40;
	}
	.success-message {
		color: #32a95d;

	}
</style>
<template>
  <div>
    <h2>Registro de Pacientes</h2>

    <form @submit.prevent="agregarPaciente" class="formulario">
      <input
        v-model="paciente.nombre"
        type="text"
        placeholder="Nombre"
      />

      <input
        v-model="paciente.telefono"
        type="text"
        placeholder="Teléfono"
      />

      <input
        v-model="paciente.correo"
        type="email"
        placeholder="Correo electrónico"
      />

      <button type="submit">Registrar</button>
    </form>

    <p v-if="error" class="error">{{ error }}</p>

    <h3>Lista de Pacientes</h3>

    <table v-if="pacientes.length > 0">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Teléfono</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in pacientes" :key="index">
          <td>{{ p.nombre }}</td>
          <td>{{ p.telefono }}</td>
          <td>{{ p.correo }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else>No hay pacientes registrados.</p>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const paciente = reactive({
  nombre: '',
  telefono: '',
  correo: ''
})

const pacientes = ref([])
const error = ref('')

function agregarPaciente() {
  if (!paciente.nombre || !paciente.telefono || !paciente.correo) {
    error.value = 'Todos los campos son obligatorios'
    return
  }

  pacientes.value.push({
    nombre: paciente.nombre,
    telefono: paciente.telefono,
    correo: paciente.correo
  })

  paciente.nombre = ''
  paciente.telefono = ''
  paciente.correo = ''
  error.value = ''
}
</script>

<style scoped>
.formulario {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

input {
  padding: 5px;
}

button {
  background-color: #2ecc71;
  border: none;
  padding: 8px 12px;
  color: white;
  cursor: pointer;
}

.error {
  color: red;
}
</style>

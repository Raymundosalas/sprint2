<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/pacientes">Pacientes</router-link></li>
      <li><a href="#">Citas</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #34495e;
  padding: 10px;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar a {
  color: white;
  text-decoration: none;
}
</style>

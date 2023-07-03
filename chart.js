// Obtener el contexto del lienzo del gráfico
var ctx = document.getElementById('grafico-ventas').getContext('2d');

// Datos de ventas semanales y mensuales (ejemplo)
var ventasSemanales = [120, 150, 180, 200, 160, 190, 210];
var ventasMensuales = [800, 900, 1100, 1000, 950, 1200, 1300, 1400, 1100, 1000, 950, 1200];

// Configuración del gráfico de ventas semanales
var configSemanales = {
  type: 'line',
  data: {
    labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    datasets: [{
      label: 'Ventas semanales',
      data: ventasSemanales,
      backgroundColor: 'rgba(0, 123, 255, 0.5)',
      borderColor: 'rgba(0, 123, 255, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Ventas Semanales'
      }
    }
  }
};

// Configuración del gráfico de ventas mensuales
var configMensuales = {
  type: 'bar',
  data: {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [{
      label: 'Ventas mensuales',
      data: ventasMensuales,
      backgroundColor: 'rgba(40, 167, 69, 0.5)',
      borderColor: 'rgba(40, 167, 69, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Ventas Mensuales'
      }
    }
  }
};

// Crear e inicializar el gráfico de ventas semanales
var graficoSemanales = new Chart(ctx, configSemanales);

// Crear e inicializar el gráfico de ventas mensuales
var graficoMensuales = new Chart(ctx, configMensuales);

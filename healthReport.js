$(document).ready(function() {
    // Initialize DataTables
    $('#myTable').DataTable();
  
    // Get data from the table
    var tableData = $('#myTable').DataTable().data().toArray();
  
    // Extract labels and values from the data
    var labels = tableData.map(row => row[0]);
    var values = tableData.map(row => row[1]);
  
    // Create the bar graph using Chart.js
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Values',
          data: values,
          backgroundColor: 'darkblue',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            min: 0 // set minimum y-axis value to 9.5 or adjust as needed
          }
        },
        plugins: {
          annotation: {
            annotations: {
              line1: {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y',
                value: 8, // reference line value
                borderColor: 'red',
                borderWidth: 2,
                label: {
                  backgroundColor: 'red',
                  color: 'white',
                  content: 'Low battery Line',
                  enabled: true
                }
              }
            }
          }
        }
      }
    });
  });
  
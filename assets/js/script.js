//ver si es necesario
/*async function getRandomUser() {
  const html = document.getElementById("render");
  try {
    const res = await fetch("https://mindicador.cl/api/");
    const data = await res.json();
    console.log(data);
    html.innerHTML = data.euro.valor;
  } catch (error) {
    html.innerHTML = "Error al obtener los datos de la API";
    console.error("Error al obtener los datos de la API:", error);
  }
}*/

async function calculate() {
  const inputMonedaCLP = parseFloat(inputmoneda.value); // para llmar el valor ingresado en el input y convertirlo a número

  if (isNaN(inputMonedaCLP)) {
    conversion.textContent = "Ingrese un valor numérico válido";
    return; // para validar si el valor ingresado no es numérico
  }

  try {
    const res = await fetch("https://mindicador.cl/api/");
    const data = await res.json();
    const valorDolar = parseFloat(data.dolar.valor); // para llamar el valor del dólar desde la API
    const valorEuro = parseFloat(data.euro.valor); // para llamar el valor del euro desde la API
    let conversionMoneda = 0;

    //condiciones según select
    if (moneda1.selected) {
      conversionMoneda = inputMonedaCLP / valorDolar;
      conversion.textContent = `Total en Dólares: $${conversionMoneda.toFixed(
        2
      )}`;
    } else if (moneda2.selected) {
      conversionMoneda = inputMonedaCLP / valorEuro;
      conversion.textContent = `Total en Euros: €${conversionMoneda.toFixed(
        2
      )}`;
    } else {
      conversion.textContent = "Seleccione una moneda";
    }
  } catch (error) {
    conversion.textContent = "Error al obtener los datos de la API";
    console.error("Error al obtener los datos de la API:", error);
  }
}

// para asignar evento al botón buscar
const btnbuscar = document.getElementById("btnbuscar");
btnbuscar.addEventListener("click", calculate);

const moneda1 = document.getElementById("optiondolar");
const moneda2 = document.getElementById("optioneuro");
const inputmoneda = document.getElementById("inputclp");
const conversion = document.getElementById("pconvertida");
const canvas = document.getElementById("myChart");

// llamar a getRandomUser para obtener los datos de la API (ref: guía de estudio)
getRandomUser();

//gráfico
/*let myChart = null;
function renderGrafico(data) {
  console.log(data);
  const config = {
    type: "line",
    data: {
      labels: data.map((elem)=>){
        elem.fecha;
      },
      datasets: [
        {
          label: "Últimos 10 días",
          backgroundColor: "white",
          data: data.map((elem)=>{
            elem.valor;
          }),
        },
      ],
    },
  };
  canvas.style.backgroundColor = "white";
  if(myChart){
    myChart.destroy();
  }
  myChart=new chart(canvas, config)
}*/

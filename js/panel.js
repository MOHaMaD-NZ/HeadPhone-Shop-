
function togglePanel() {
  const menu = document.querySelector('.menu')
  const bars = document.querySelector('.bars')
  const socials = document.querySelector('.socials')
  
  if(menu.classList.contains('a')){
    menu.classList.remove('a')
    socials.classList.add('a')
  bars.classList.add('b')
  }else{
    menu.classList.add('a')
    socials.classList.remove('a')
  bars.classList.remove('b')
  }
}

function toggleUserDetails(){
  const menu = document.querySelector('.details')
  const angle = document.querySelector('.angle')
  
  if(menu.classList.contains('dropdown')){
    menu.classList.remove('dropdown')
    angle.classList.remove('fa-angle-down')
    angle.classList.add('fa-angle-up')
  }else{
    menu.classList.add('dropdown')
    angle.classList.add('fa-angle-down')
    angle.classList.remove('fa-angle-up')
  }
}



var ctx = document.getElementById("myChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: ["هندزفری", "هدفون", "کیف هندزفری", "محافظ", "شارژر "],
          datasets: [
            {
              label: "",
              data: [12, 19, 3, 5, 2],
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            
          }
        }
      });

      
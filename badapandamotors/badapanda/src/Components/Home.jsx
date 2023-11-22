import React from 'react'
import first from './four.jpeg';
import './home.css';
import second from './three.jpeg';
import third from './two.jpeg';
import ownerCard from './pritish.png';
export default function Home() {
  return (
    <>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={first} class="d-block w-100 " alt="one"/>
    </div>
    <div class="carousel-item">
      <img src={second} class="d-block w-100" alt="two"/>
    </div>
    <div class="carousel-item">
      <img src={third} class="d-block w-100" alt="three"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='homeDown'>
    <p>
    Tires are crucial components of a vehicle for several reasons:

1. Safety: Tires are the only part of a vehicle that makes direct contact with the road. They provide traction, ensuring that the vehicle can stop, turn, and accelerate safely. Properly maintained and quality tires are essential for preventing accidents and ensuring vehicle stability.

2. Handling and Control: The right set of tires can greatly impact a vehicle's handling and control. Tires that are in good condition and suitable for the vehicle help in maintaining control during various road conditions, including wet, icy, or uneven surfaces.

3. Fuel Efficiency: Tires can significantly affect a vehicle's fuel efficiency. Properly inflated and well-maintained tires reduce rolling resistance, which means the engine doesn't have to work as hard to move the vehicle, leading to improved gas mileage.

4. Comfort: Quality tires contribute to a smoother and more comfortable ride. They help dampen road imperfections and vibrations, making the driving experience more pleasant for the passengers.

5. Longevity: Good tires can have a longer lifespan, which can save you money in the long run. Regular maintenance, like rotating and aligning the tires, can help ensure they wear evenly and last longer.

6. Braking Performance: Tires play a significant role in a vehicle's braking performance. Worn-out or low-quality tires can result in longer braking distances, potentially leading to accidents.

7. Load-Bearing Capacity: Tires are designed to bear the weight of the vehicle and its occupants. Using tires with the appropriate load-carrying capacity is essential to ensure the vehicle operates safely and efficiently.

8. Versatility: Different types of tires are available for various driving conditions. For example, all-season tires are suitable for most conditions, while winter tires provide better traction in snowy and icy conditions. Choosing the right tire type can enhance your vehicle's performance in specific weather and terrain.


    </p>




</div>
<div className='ownerCard d-flex justify-content-center' >
<img src={ownerCard} class="img-fluid" alt="..."/>

</div>
</>
  )
}

import React, { useEffect } from 'react';
import "../style/counter1.css";

const Counter1 = () => {

  useEffect(() => {
   
    const sectionCounter = document.querySelector('#section_counter1');
    const counters = document.querySelectorAll('.counter-item1 .counter1');
    const CounterObserver = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        const speed = 40;
        counters.forEach((counter, index) => {
          function updateCounter() {
            const targetNumber = +counter.dataset.target;

            const initialNumber = +counter.innerText;
            const incPerCount = targetNumber / speed;
            if (initialNumber < targetNumber) {
              counter.innerText = Math.ceil(initialNumber + incPerCount);
              setTimeout(updateCounter, 40);
            } else {
              counter.innerText = targetNumber;
              if(counter.dataset.type !=="rating")
              {
                counter.innerText = counter.innerText + "+";
              }
              
            }
           
            
            
            
          }
          updateCounter();

          if (counter.parentElement.style.animation) {
            counter.parentElement.style.animation = '';
          } else {
            counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${
              index / counters.length + 0.5
            }s`;
          }
        });
        observer.unobserve(sectionCounter);
      },
      {
        root: null,
        threshold: window.innerWidth > 768 ? 0.4 : 0.3,
      }
    );

    CounterObserver.observe(sectionCounter);

    // Cleanup function
    return () => {
      CounterObserver.disconnect();
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <>
     
      <section id="section_counter1">
        <div className="container1">
          <div className="counter-grid1">
            <div className="counter-item1">
              <img src="https://i.imgur.com/mWetBJJ.png" alt="Image" className="counter-img1" />
              <h1 className="counter1" data-target="450">0</h1>
              <h2 style={{fontFamily:"Oswald"}} >STUDENTS</h2>
            </div>
            <div className="counter-item1">
            <img
              src="	https://i.imgur.com/ZuOrPzn.png"
              alt="Image"
              className="counter-img1"
            />
            <h1 className="counter1" data-target="40">0</h1>
            <h2 style={{fontFamily:"Oswald"}} >INTERNS</h2>
            
          </div>
          <div className="counter-item1">
          <img src="https://i.imgur.com/jKUmO3t.png" alt="Image" className="counter-img1" />
          <h1 className="counter1" data-target="10">0</h1>
   
          <h2 style={{fontFamily:"Oswald"}} >DOMAINS</h2>
        </div>
        <div className="counter-item1">
        <img src="	https://i.imgur.com/A1YuIgX.png" alt="Image" className="counter-img1" />
        <h1 className="counter1" data-target="4.6" data-type="rating">0</h1>
      
        <h2 style={{fontFamily:"Oswald"}} >RATING</h2>
      </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Counter1;

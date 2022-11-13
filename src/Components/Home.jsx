import React from 'react'
import "../styles/Home.css"
import Video from "../assets/vid.mp4"

const Home = () => {

    const videoSrc=Video;
  return (
    <div className='container'>
      {/* 1st div i.e, video div--------------------------------------------------------- */}
        <div className='videocontainer'>
            {/* details of video div */}
            <div className='videocontainer_details'>
               <h2>The best hair of
                 your life starts at 
                 the root</h2>
               <p> Rooted in skincare science, our Haircare Regimens,
                 Smooth+ and Volume+ re-energize the scalp for healthier,
                  stronger more beautiful hair, instantly and over time.</p>
                <button>SHOP NEW R+F HAIRCARE</button>
            
            </div>
               
               {/* video of video div */}
            <div className='videocontainer_video'>
               <iframe id='video' src={ videoSrc } frameborder="5">video</iframe>
            </div>
        </div>
        {/* 1st div i.e, video div ended------------------------------------------------ */}
           
           {/* 2nd div in that 3 divs start----------------------------- */}
           <div className='main_container_second_div_container'>
            <div className='second_div_container_main_first_container'>
              <img src="https://www.rodanandfields.com/en-us/medias/HOL-Hair-Smooth-HP-Module-US-CAN-AUS2.jpg?context=bWFzdGVyfHJvb3R8NTY2MjZ8aW1hZ2UvanBlZ3xoYzAvaDExLzE1ODg5Mzg4NjM0MTQyLmpwZ3w1ZTMxZWJjNWE4YmQ2ZmM0NjEzMWQzOGVmYzA5MmIyNGRkOTAwMmJmNzQ4Y2M0ZjNhN2MwYTU5NTY5MWU4ZDA2" alt="" />
               
            <div className='second_div_container_main_first_container_child_div'>
              <h3>SHOP HAIRCARE OFFERS</h3>
              <h2>Holiday Specials + Free Gift</h2>
            </div>
            
            </div>
            <div className='second_div_container_main_first_container'>
                <img src="https://www.rodanandfields.com/en-us/medias/HOL-Skincare-1-HP-Module-US-CAN-AUS2.jpg?context=bWFzdGVyfHJvb3R8NTQ4ODR8aW1hZ2UvanBlZ3xoNWEvaGQwLzE1ODg5Mzg4Njk5Njc4LmpwZ3w1ZTNjODZhYzM0NTM1N2M4MGViYjYyMWRkZmYyNDU3MGU5MDdkZGQxZDIyZWI4ZmQwYmI4ZjVjOGRmOTg0NDdl" alt="" />
               
                <div className='second_div_container_main_first_container_child_div'>
              <h3>SHOP HOLIDAY SKIN</h3>
              <h2>Skin Bestsellers + Free Gifts</h2>
            </div>
                
            </div>
            <div className='second_div_container_main_first_container'>
                <img src="https://www.rodanandfields.com/en-us/medias/HOL-Skincare-2-HP-Module-US2.jpg?context=bWFzdGVyfHJvb3R8NjgyMzV8aW1hZ2UvanBlZ3xoNzcvaGEzLzE1ODg5Mzg4NzY1MjE0LmpwZ3xjMWM0YWNhZjIyMjg2OTgwODA5MzgyOWNlYzc5OTE5MDBhNjZiYWIzYTQ2NDI5ZTRmMTZjNmJhOTBjNTVmOGJm" alt="" />
                      
                <div className='second_div_container_main_first_container_child_div'>
              <h3>SHOP HOLIDAY EYES</h3>
              <h2>Eyes Bestsellers + Free Gift</h2>
            </div>
            </div>
           </div>
           {/* 2nd div in that 3 divs end---------------------------- */}
           {/* 3rd div in that 2 divs starts---------------------------- */}
           <div className='main_container_third_div_container'>
               <div className='third_div_container_main_first_container'>
                     <img src="https://www.rodanandfields.com/en-us/medias/Skincare.jpg?context=bWFzdGVyfHJvb3R8MTQwMzU3fGltYWdlL2pwZWd8aDI3L2hkZS8xNTg4OTM4ODgzMDc1MC5qcGd8YTNiNTNmYTgzZmRjMzM5MzYwYjNhYjAwYTg3MDE1MzI3MTNhYzI4ZjUyZTBhM2VkNmUxMWFiOWY3NmQyNDgyZQ" alt="" />
                     <h3>SHOP SKINCARE</h3>
               </div>
               <div className='third_div_container_main_first_container'>
                     <img src="https://www.rodanandfields.com/en-us/medias/Haircare.jpg?context=bWFzdGVyfHJvb3R8MjAwMzMzfGltYWdlL2pwZWd8aDgzL2hlZC8xNTg4OTM4ODg5NjI4Ni5qcGd8NjdjMDBiNTU1MTgwMTg2Mzg5NWEwNGM2ZTc2ZTQyNDE5ODJjYWVkNGYyM2M4ZWYxM2ZhODcxMThlNDI4YjdkOA" alt="" />

                     <h3>SHOP HAIRCARE</h3>
               </div>

           </div>
           {/* 3rd div in that 2 divs ends---------------------------- */}

           {/* 4th div in that multipledivs divs starts---------------------------- */}

           <div className='sliderContainer'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
           </div>
      {/* 4th div in that multipledivs divs ends---------------------------- */}
      {/* 5th div in that 6 divs starts---------------------------- */}
         
      <h1>derm-designed sin + hair care</h1>
         <div className="hovercontainer">
          

          <div className='hoversubcontainer'>
            <img src="https://www.rodanandfields.com/en-us/medias/Fine-Lines-Wrinkles-Card.jpg?context=bWFzdGVyfHJvb3R8NTgzMDF8aW1hZ2UvanBlZ3xoODYvaGY2LzEyODg5MTg4MjA0NTc0LmpwZ3wzYjIwYmU0ZWI3NWZkYjFmNzJjNjVmZWNhYmJmN2RlODdjYjFmNTU0ODZjZWE0YjQ5NWIzNWQzYmQyN2UxZjli" alt="" />
              <h4>Lines, Wrinkles or Loss of Firmness</h4>
          </div>
          <div className='hoversubcontainer'>
          <img src="https://www.rodanandfields.com/en-us/medias/Acne-Breakouts-Card.jpg?context=bWFzdGVyfHJvb3R8NjU4Mjd8aW1hZ2UvanBlZ3xoMTEvaDJhLzEyODg5MTg4MjcwMTEwLmpwZ3wxMTg2NjQ4NjM0Y2QyZDY4MDdmZDU4ZmI0ZDkxMTlhM2UxMDgyYTFkMGVkOWMzMTBkYzY3ZTJmNGEzNzVlZDhm" alt="" />
              <h4>Adult Acne + Visible Signs of Aging</h4>
          </div>
          <div className='hoversubcontainer'>
            <img src="https://www.rodanandfields.com/en-us/medias/Uneven-Tone-Brown-Spots-Card.jpg?context=bWFzdGVyfHJvb3R8NTc4OTV8aW1hZ2UvanBlZ3xoY2UvaDY0LzEyODg5MTg4MzM1NjQ2LmpwZ3w0ZjUyN2U3MWE1YzYwNmNmYzgxZTQ3MTAxNmU3ZGIyNjA4NmU1MTQ2Mjc4NWU2NWRhOTFmNDU3NGRmNmI0MDFi" alt="" />
          <h4>Discoloration or Uneven Tone</h4>
          
          </div>
          <div className='hoversubcontainer'>
            <img src="https://www.rodanandfields.com/en-us/medias/Sensitivity-Visible-Redness-Card.jpg?context=bWFzdGVyfHJvb3R8NjE5MTd8aW1hZ2UvanBlZ3xoNTgvaGM3LzEyODg5MTg4NDAxMTgyLmpwZ3wwN2M4ZTJmMGExMDI1ZTM2MjE4M2I3MzFlZWI5NDJkZDYzZmMzMDdhMDMyNGFjODUyY2MwMWUzMDk5MDVjZWZk" alt="" />
         <h4>Redness, Dryness or Sensitivity</h4>
          </div>
          <div className='hoversubcontainer'>
            <img src="https://www.rodanandfields.com/en-us/medias/HP-Smooth-Concern-6-grid-438x438.jpg?context=bWFzdGVyfHJvb3R8MjE5Njh8aW1hZ2UvanBlZ3xoNDUvaDUwLzE1ODg5Mzg0MTQ0OTI2LmpwZ3xhNmY5NjEzM2M1MmUyM2Y5ZTk0MWYzYWU5NGIwZmY0NzUyNTMzNmZkYTQxZThkYTlhZmE5ZDlkMTM5YTRiNzM1" alt="" />
          
          <h4>Dry, Frizzy, Dull Hair with Damage or Breakage</h4>
          </div>
          <div className='hoversubcontainer'>
              <img src="	https://www.rodanandfields.com/en-us/medias/Volume-Concern-6-grid-438x438.jpg?context=bWFzdGVyfHJvb3R8MjAyMzJ8aW1hZ2UvanBlZ3xoNTIvaDlhLzE1ODg5Mzg0Mjc1OTk4LmpwZ3xlNzFmZmYyMmE4MjkzNDQ0ZmY2MGFmYzE0MmQxODdlYzQ4ZTE2NmUyZjQ2N2YwMzdiOTdiNjM1YmZlMGU2ZmUx" alt="" />
          <h4>Thin, Flat Hair with Damage or Breakage</h4>
          </div>
         </div>

         {/* 5th div in that 6 divs ends---------------------------- */}

         {/* find a consultant div starts-----------------------------*/}

         <div className='consultantcontainer'>

            <div className="consultantsubcontainer">
              <div>need a skin or hair consultation?</div>
              <div>
                • Get customized product recommendations
                <br />
                • Learn more about our products
                <br />
                • Receive ongoing skin + hair care advice
                <br />
              </div>
              <button>FIND A CONSULTANT</button>
            </div>

         </div>
    </div>
  )
}

export default Home
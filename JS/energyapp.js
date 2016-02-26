angular.module('energyConversionApp').directive('energyapp', function(){
    return{
        template: "this is the energy app.   <header> Energy Conversion Tables </header>
        <energy-app></energy-app>
 <h1>  
        <div class="navi"><a data-ga-click="Navigation, go to portal negative_portal aligned stargate, text:negative" href="pages/negative_portal.html">NEGATIVE</a></div>
        <div class="navi"><a data-ga-click="Navigation, go to portal align_left stargate, text:LEFT" href="pages/align_left.html">LEFT</a></div>
            <div class="navi"><a data-ga-click="Navigation, go to Ground Zero Star Gate, text:ZERO" href="pages/zero.html">ZERO</a></div>
          <div class="navi"><a data-ga-click="Navigation, go to portal align_right stargate, text:RIGHT" href="pages/align_right.html">RIGHT</a></div>
        <div class="navi"><a data-ga-click="Navigation, go to portal positive_portal aligned stargate, text:positive" href="pages/positive_portal.html">POSITIVE</a></div>
   </h1>
      
  <table class="container">  
      <div class="container_functions"><tr class="table">             <td for="Enter Frequency">
            Enter the frequency to be converted to coordinated sound variable. 
    </td>
         <td>
        <input type="text" id="calculator" name="Enter Frequency"> </td>
       <td> <button id="calculater" class="calculater" onclick="frequency_conversion();">
            Submit Frequency
        </button>
          </td>
        <tr> <td> <span id="range"></span> </td>
        </tr>
    <tr class="table">
    <td for="Light distance conversion">Enter seconds light has traveled.</td>
      <td>
        <input type="text" id="seconds" class="calculater" name="Light_Distance">  </td>
<!--    <a href=javascript:distance_light();></a>-->
        <td> <button id="calculater" class ="calculater" type="button" onclick="distance_light();">Submit number of seconds</button>
        </td>
   </tr>
    
     <tr class="table">
    <td for="frequency to wavelength conversion">Enter a frequency to convert into a wavelength.</td>
      <td>
        <input type="text" id="freq" class="calculater" name="wave_length">  </td>
<!--    <a href=javascript:distance_light();></a>-->
        <td> <button id="submit_freq" class ="calculater" type="button" onclick="frequency_to_wavelength();">Submit Frequency</button>
        </td>
   </tr>
    
        <tr class="table">
    <td for="frequency to wavelength conversion">Enter a wavelength to convert into a frequency.</td>
      <td>
        <input type="text" id="wavlng" class="calculater" name="wave_length">  </td>
<!--    <a href=javascript:distance_light();></a>-->
        <td> <button id="submit_wavlngth" class ="calculater" type="button" onclick="wavelength_to_frequency();">Submit Wavelength</button>
        </td>
   </tr>
    
    <tr class="table">
            <td>Enter the frequency and wavelength to get the speed of light.</td>
     <td>
       <label>frequency</label>
        <input type="text" id="frequet" class="calculater"  name="light_speed">  </td>
         <td>
           <label>wavelength</label>     
        <input type="text" id="wvlnth" class="calculater" name="light_speed">  </td>
<!--    <a href=javascript:distance_light();></a>-->
        <td> <button id="submitlightspd" class="calculater" type="button" onclick="spdlight();">Submit frequency and wavelength.</button>
            </td> </tr>
    
    
          <tr class="table">
            <td>Convert Current and Resistance to get Power</td>
     <td>
       <label>current</label>
        <input type="text" id="current" class="calculater"  name="power_equation">  </td>
         <td>
           <label>resistance</label>     
        <input type="text" id="resistance" class="calculater" name="power_conversion">  </td>
<!--    <a href=javascript:distance_light();></a>-->
        <td> <button id="submitCnR" class="calculater" type="button" onclick="powerCnR();">Submit current and resistance</button>
            </td> </tr>
     <tr class="table">
     <td>Convert Current and Voltage to get Power</td>
     <td>
       <label>current</label>
        <input type="text" id="curre" class="calculater" name="power_conversion">  </td>
         <td>
           <label>voltage</label>     
        <input type="text" id="volt" class="calculater"  name="power_conversion">  </td>
<!--    <a href=javascript:distance_light();></a>-->
        <td> <button id="submitVnC" class="calculater" type="button" onclick="powerVnC();">Submit current and voltage</button>
        </td>
    </tr>
          </div>
   </table>
        <div class="foot_wrap">
     <footer>
        <ul class="footer_links">
           <li> <a data-ga-click="Footer, go to site, text:site" href="pages/site.html">site</a>
            </li>
           
            
            <li> 
               <a data-ga-click="Footer, go to about, text:about" href="pages/about.html">about</a>
            </li>
          
          Math made easy 
            
          
          <li> <a data-ga-click="Footer, go to contact, text:contact" href="pages/contact.html">contact</a>
            </li>
            <li> <a data-ga-click="Footer, got to help, text:help" href="pages/help.html">help</a>
            </li> 
           </ul>
        </footer>  
</div>
      "
    }
    
    
})
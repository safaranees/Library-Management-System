import React ,{Component} from 'react'
import './library.css'

class About extends React.Component
{
    render(){
        return(
            <div class="body">
                <h1>About Us</h1>
    
    <p>
        The Online open Library is a seven-branch county library system with locations in Bensalem, Doylestown, Langhorne, Levittown, Perkasie, Quakertown, and Yardley-Makefield. 
        The county library system was founded in 1956 by a resolution of the Bucks County Commissioners. 
        The library is governed by a 7-member board appointed by the County Commissioners.

        As a County library system, the Bucks County Free Library solely purchases and maintains an extensive collection of downloadable and streaming materials for all Bucks County residents to access.
         As a designated Pennsylvania public library district and system, the Bucks County Free Library collaborates on county wide projects, shares a public catalog, and provides support services to 11 additional public libraries in Bucks County. 
         These libraries are independently governed and managed by their own local boards and directors. 
        Their information is on our Locations page.
    </p>
        <div class="accordion" id="accordionExample">
      <div class="card">
        <div class="card-header" id="headingOne">
          <h2 class="mb-0">
            <button class="btn btn-primary btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" 
            onClick={()=>alert("Explore our history, learn more about what we're doing through our annual reports, and meet the Library Advisory Board")}>
              Who we are
            </button>
          </h2>
        </div>
          
        <div id="collapseOne" class="collapse" aria-labelledby="headingOne">
          <div class="card-body">
            Explore our history, learn more about what we're doing through our annual reports, and meet the Library Advisory Board.  Discover <a href="#who">Who We Are.</a>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingTwo">
          <h2 class="mb-0">
            <button class="btn btn-primary btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
            onClick={()=>alert("Phoenix Public Library has a number of policies in place to provide the community with the best service possible")}>
              Policies
            </button>
          </h2>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo">
          <div class="card-body">
            Phoenix Public Library has a number of policies in place to provide the community with the best service possible.
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header" id="headingThree">
          <h2 class="mb-0">
            <button class="btn btn-primary btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
            onClick={()=>alert("Add your email address to receive due date reminders")}>
              Stay Updated
            </button>
          </h2>
        </div>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree">
          <div class="card-body">
            Add your email address to receive due date reminders, the Library eNewsletter and more! You can update your contact information in person, or by signing in to your <a href="#account">library account.</a>
          </div><br/><br/><br/>
        </div><br/>
      </div><br/><br/><br/>
    <br/><br/></div>
            </div>
        )
    }
}
export default About

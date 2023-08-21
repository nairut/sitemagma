import React from "react";
import { Lady } from "../../components/Lady";
import "./style.css";

export const DesktopForm = () => {
  return (
    
    
    
    
    <div className="desktop-form">
      <div className="div">

      <form  name="contact" action="/pt" method="post">
      <input type="hidden" name="form-name" value="contact" />

        <div className="group">
          <button className="overlap-group" type="submit">
            <div className="quoteus">Send</div>
          </button>
        </div>




          <div className="overlap">
        
          <textarea required name="message" placeholder="" className="textarea-style" cols="30" rows="10"></textarea>

          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="rectangle-2" />
              <div className="text-wrapper-2">Message</div>
            </div>
          </div>


        </div>
        <div className="overlap-3">
        <input required type="email" className="rectangle-3" name="email" placeholder="Your E-mail"/>

          <div className="overlap-group-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Email</div>
            </div>
          </div>
        </div>



        <div className="overlap-4">
          <input required type="text" className="rectangle-4" name="name" placeholder="   Cooper"/>

          <div className="group-2">
            <div className="overlap-5">
              <div className="text-wrapper-4">Last name</div>
            </div>
          </div>
        </div>




        <div className="overlap-6">
          <input required type="text" className="rectangle-5" name="name" placeholder="   Sheldon"/>

          <div className="group-3">
            <div className="overlap-5">
              <div className="text-wrapper-5">First name</div>
            </div>
          </div>
        </div>


        </form>

        <img className="line" alt="Line" src="/img/line-1.png" />
        <Lady className="lady-instance" />
        <img className="magma-translation" alt="Magma translation" src="/img/magma-translation-png.png" />
        <h1 className="h-1">Get a Free, No-Obligation Price Quote</h1>
        <p className="p">
          MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
          diverse markets around the world.
        </p>
        <p className="text-wrapper-6">Magma Translation | All rights reserved. ©Magma™</p>
        <img className="img" alt="Magma translation" src="/img/magma-translation-png-1.png" />
      </div>
    </div>
  );
};

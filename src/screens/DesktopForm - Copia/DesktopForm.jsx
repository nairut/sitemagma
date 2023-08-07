import React from "react";
import { Lady } from "../../components/Lady";
import { Line1 } from "../../icons/Line1";
import "./style.css";

export const DesktopForm = () => {
  return (
    <div className="desktop-form">
      <div className="div-4">
        <div className="group-4">
          <div className="overlap-group-3">
            <div className="text-wrapper-30">Send</div>
          </div>
        </div>
        <div className="overlap-19">
          <div className="rectangle-9" />
          <div className="overlap-wrapper">
            <div className="overlap-20">
              <div className="rectangle-10" />
              <div className="text-wrapper-31">Message</div>
            </div>
          </div>
        </div>
        <div className="overlap-21">
          <div className="rectangle-11" />
          <div className="group-5">
            <div className="overlap-22">
              <div className="text-wrapper-32">Email</div>
            </div>
          </div>
        </div>
        <div className="overlap-23">
          <div className="rectangle-12" />
          <div className="group-6">
            <div className="overlap-24">
              <div className="text-wrapper-33">Last name</div>
            </div>
          </div>
        </div>
        <div className="overlap-25">
          <div className="rectangle-13" />
          <div className="group-7">
            <div className="overlap-24">
              <div className="text-wrapper-34">First name</div>
            </div>
          </div>
        </div>
        <Line1 className="line" />
        <Lady className="lady-instance" />
        <img className="magma-translation-5" alt="Magma translation" src="/img/magma-translation-png.png" />
        <h1 className="text-wrapper-35">Get a Free, No-Obligation Price Quote</h1>
        <p className="text-wrapper-36">
          MAGMA is a global localization solutions provider, enabling brands to establish an authentic presence in
          diverse markets around the world.
        </p>
        <p className="text-wrapper-37">Magma Translation | All rights reserved. ©Magma™</p>
        <img className="magma-translation-6" alt="Magma translation" src="/img/magma-translation-png-1.png" />
      </div>
    </div>
  );
};

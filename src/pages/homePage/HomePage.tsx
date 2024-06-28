"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Shadow from "@/components/tag/Shadow";
import Border from "@/components/tag/Border";
import HButton from "@/components/button/HButton";
import HTextField from "@/components/dataEntry/HTextField";
import HIdSelectField from "@/components/select/HIdSelectField";
import {
  PopOver,
  PopOverContent,
  PopOverTrigger,
} from "@/@core/engineComponents/popOver/PopOver";
import AlterDatePicker from "@/@core/engineComponents/calender/AlterDatePicker";
import InputDatePicker from "@/components/datePicker/InputDatePicker";
import Calender from "@/components/datePicker/Calender";

const HomePage = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Navbar />
      <div className="space-y-10">
        {/* Paragraph */}
        <div className="space-y-4">
          <h1>Paragraph</h1>
          <div className="flex justify-between space-x-4">
            <>
              <Shadow space="1" className=" shadow-lg space-y-4 ">
                <h2>Paragraph Shadow Lg</h2>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend
                </p>
              </Shadow>
              <Shadow space="1" className="shadow-md space-y-4 ">
                <h2>Paragraph Shadow Md</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend
                </p>
              </Shadow>
              <Shadow className=" shadow space-y-4">
                <h2>Paragraph Shadow</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend
                </p>
              </Shadow>
            </>
            <Border space="1" className="space-y-4">
              <h2>Paragraph Border</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend
              </p>
            </Border>
          </div>
        </div>
        {/* Button */}
        <div className="space-y-4 ">
          <h1>Button</h1>
          <div className="space-x-4">
            <HButton>Primary</HButton>
            <HButton className="secondary">Secondary</HButton>
            <HButton className="danger">Danger</HButton>
            <HButton className="success">Success</HButton>
            <HButton className="warning">Warning</HButton>
            <HButton size="1">Primary Size 1</HButton>
            <HButton size="2">Primary Size 2</HButton>
          </div>
        </div>
        {/* Input Field */}
        <div className="space-y-4 ">
          <h1>Input Fields</h1>
          <div className="flex space-x-4">
            <HTextField label={"xs"} inputSize="0" />
            <HTextField label={"Small"} inputSize="1" />
            <HTextField label={"Standard"} />
            <HTextField label={"Large"} inputSize="3" />
          </div>
        </div>
        {/* TextArea Field */}
        <div className="space-y-4 ">
          <h1>Text Area Fields</h1>
          <div className="flex space-x-4">
            <HTextField label={"xs"} rows={2} textarea={true} inputSize="0" />
            <HTextField
              label={"Small"}
              rows={3}
              textarea={true}
              inputSize="1"
            />
            <HTextField label={"Standard"} textarea={true} />
            <HTextField
              label={"Large"}
              rows={5}
              textarea={true}
              inputSize="3"
            />
          </div>
        </div>
        {/* Select Field */}
        <div className="space-y-4 ">
          <h1>Select Fields</h1>
          <div className="flex space-x-4">
            <HIdSelectField value={value} setValue={setValue} />
          </div>
        </div>
        {/* Pop Over Dates*/}
        <div className="space-y-4 ">
          <h1>Pop Over</h1>
          <div className="flex space-x-4">
            <div className="flex items-center">
              Choose Calender:
              <PopOver>
                <PopOverTrigger>
                  <HButton className="ms-2">Calender</HButton>
                </PopOverTrigger>
                <PopOverContent>
                  <Shadow space="0">
                    <Calender />
                  </Shadow>
                </PopOverContent>
              </PopOver>
            </div>
            <div className="flex items-center">
              Input Date:
              <InputDatePicker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

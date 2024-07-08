import React from "react";
import { ActiveTheme } from "@/clientComponent/homepage";
import ResizeDiv from "@/components/tag/ResizeDiv";
import Card from "@/components/tag/Card";
import Border from "@/components/tag/Border";
import Button from "@/components/button/Button";
import TextField from "@/components/dataEntry/TextField";
import SearchField from "@/components/dataEntry/SearchField";
import Calender from "@/components/popOver/datePicker/Calender";
import InputDatePicker from "@/components/popOver/datePicker/InputDatePicker";
import { ModelDrawer } from "@/clientComponent/homepage";

import { sidebarContents } from "@/components/sidebarNavigation";
import Shadow from "@/components/tag/Shadow";
import Sidebar from "@/components/sidebar";
const page = () => {
  const paragraph = () => (
    <div id="paragraph" className="space-y-4">
      <h1 className="text-shadow">Paragraph</h1>
      <ResizeDiv>
        <>
          <Card space="1" className=" shadow-md space-y-4 ">
            <h2>Card Shadow Md</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend
            </p>
          </Card>
          <Card space="1" className="shadow-sm space-y-4 ">
            <h2>Card Shadow Sm</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend
            </p>
          </Card>
          <Card className=" shadow space-y-4">
            <h2>Card Shadow</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend
            </p>
          </Card>
        </>
        <Border space="1" className="space-y-4">
          <h2>Card Border</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend
          </p>
        </Border>
      </ResizeDiv>
    </div>
  );
  const buttons = () => (
    <div id="button" className="space-y-4 ">
      <h1 className="text-shadow">Button</h1>
      <div className="gap-4 md:space-y-0 md:gap-2 flex flex-wrap ">
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
        <Button variant="success">Success Button</Button>
        <Button variant="warning">Warning Button</Button>
        <div>
          <Button size="1">Primary Size 1</Button>
        </div>

        <div>
          <Button size="3">Primary Size 2</Button>
        </div>
      </div>
    </div>
  );
  const textFields = () => (
    <div id="input" className="space-y-4 relative">
      <h1 className="text-shadow">Input Fields</h1>
      <div className="gap-4 md:space-y-0 md:gap-2 flex flex-wrap">
        <TextField label={"xs"} inputSize="0" />
        <TextField label={"Small"} inputSize="1" />
        <TextField label={"Standard"} />
        <TextField label={"Large"} inputSize="3" />
        <SearchField />
      </div>
    </div>
  );

  const textAreaFields = () => (
    <div id="textarea" className="space-y-4 ">
      <h1 className="text-shadow">Text Area Fields</h1>
      <div className="gap-4 md:space-y-0 md:gap-2 flex flex-wrap">
        <TextField label={"xs"} rows={2} textarea={true} inputSize="0" />
        <TextField label={"Small"} rows={3} textarea={true} inputSize="1" />
        <TextField label={"Standard"} textarea={true} />
        <TextField label={"Large"} rows={5} textarea={true} inputSize="3" />
      </div>
    </div>
  );

  const popOver = () => (
    <div id="popover" className="space-y-4 ">
      <h1>Pop Over</h1>
      <div className="gap-4 md:space-y-0 md:gap-2 flex flex-wrap">
        <div className="flex items-center">
          Choose Calender:
          <Calender />
        </div>
        <div className="flex items-center">
          <span className="me-2">Input Date:</span>
          <InputDatePicker />
        </div>
      </div>
    </div>
  );

  const sidebar = () => (
    <div id="sidebar" className="space-y-4 ">
      <h1>Sidebar</h1>
      <div className="w-full gap-4 md:space-y-0 md:gap-2 flex flex-wrap">
        <div className="w-full flex items-center ">
          <Shadow className=" relative overflow-hidden  h-96 w-full">
            <Sidebar
              data={sidebarContents}
              type={"absolute"}
              position={"left"}
              title={"Title"}
              isOpen={true}
            >
              <div className="flex justify-center"> Sidebar Content</div>
            </Sidebar>
          </Shadow>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div>
        <div className="space-y-10">
          <ActiveTheme />
          {/* Paragraph */}
          {paragraph()}
          {/* Button */}
          {buttons()}
          {/* Input Field */}
          {textFields()}
          {/* TextArea Field */}
          {textAreaFields()}
          {/* Select Field */}

          {/* Pop Over Dates*/}
          {popOver()}
          {/* Modals and Drawer*/}
          <ModelDrawer />
          {/* Sidebar*/}
        </div>
      </div>
    </>
  );
};

export default page;

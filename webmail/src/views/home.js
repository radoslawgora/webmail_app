import * as React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MailView from "./homeViews/mailView";
import ContactsView from "./homeViews/contactsView";
import SettingsView from "./homeViews/settingsView";
import HomeNavbar from "../components/homeNavbar";


function Home() {
    return (
      <>
        <HomeNavbar />
        <menu className="mainMenu" style={{
              paddingTop: "10px",
        }}>
            <Tabs
                    defaultActiveKey="/home"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                    >
                    <Tab eventKey="/home" title="Mails">
                        <MailView />
                    </Tab>
                    <Tab eventKey="contacts" title="Contacts">
                        <ContactsView />
                    </Tab>
                    <Tab eventKey="settings" title="Settings">
                        <SettingsView />
                    </Tab>
            </Tabs>
        </menu>
  
      </>
    );
  }

  export default Home;
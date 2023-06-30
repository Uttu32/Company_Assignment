import { useState } from "react";
import Styles from "./App.module.css";
import Dropdown from "./Component/dropdown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import Section2 from "./Component/Section 2/Section2";
import Section3 from "./Component/Section 3/Section3";

function App() {
  const [isDropped, setIsDropped] = useState({
    About: false,
    Classes: false,
    Contact: false,
    Careers: false,
  });

  const [title, setTitle] = useState("");

  const [showMenu, setShowMenu] = useState(false);

  function handleAbout(data) {
    let input = { ...isDropped };
    input.About = !input.About;
    input.Careers = false;
    input.Classes = false;
    input.Contact = false;
    setIsDropped(input);
    setTitle(data);
  }

  function handleClasses(data) {
    let input = { ...isDropped };
    input.Classes = !input.Classes;
    input.About = false;
    input.Careers = false;
    input.Contact = false;
    setIsDropped(input);
    setTitle(data);
  }

  function handleContact(data) {
    let input = { ...isDropped };
    input.Contact = !input.Contact;
    input.About = false;
    input.Classes = false;
    input.Careers = false;
    setIsDropped(input);
    setTitle(data);
  }

  function handleCareers(data) {
    let input = { ...isDropped };
    input.Careers = !input.Careers;
    input.About = false;
    input.Classes = false;
    input.Contact = false;
    setIsDropped(input);
    setTitle(data);
  }

  return (
    <div className={Styles.Parent}>
      <nav className={Styles.Header}>
        <div>
          {/* //img left side  */}
          <img
            src="https://media.licdn.com/dms/image/C560BAQH3bitkjT_eTA/company-logo_200_200/0/1519879462020?e=2147483647&v=beta&t=GeMxJYGxlCcJ6Yif4wMQxwIED4j52VTG_IyDIRGl6Ic"
            alt="image"
          />
        </div>
        <div className={Styles.rightSection}>
          {/* //lipsum * 4 */}
          <span onClick={() => handleAbout("About")}>About</span>
          <div className={Styles.Droppable}>
            {isDropped.About && <Dropdown title={title} />}
          </div>
          <span onClick={() => handleClasses("Classes")}>Classes</span>
          <div className={Styles.Droppable}>
            {isDropped.Classes && <Dropdown title={title} />}
          </div>
          <span onClick={() => handleContact("Contact Us")}>Contact Us</span>
          <div className={Styles.Droppable}>
            {isDropped.Contact && <Dropdown title={title} />}
          </div>
          <span onClick={() => handleCareers("Careers")}>Careers</span>
          <div className={Styles.Droppable}>
            {isDropped.Careers && <Dropdown title={title} />}
          </div>
        </div>

        <div className={Styles.Responsive_View}>
          <span onClick={() => {setShowMenu(!showMenu)
          setIsDropped({
            About: false,
            Classes: false,
            Contact: false,
            Careers: false,
          })
          }}>
            {showMenu ? <CloseIcon sx={{fontSize:'3rem', color:'white'}} />  : <MenuIcon  sx={{fontSize:'3rem', color:'white', marginBottom:'5rem'}} /> }
          </span>

          {showMenu && (
            <div className={Styles.responsiveDrop}>
              <span onClick={() => handleAbout("About")}>About</span>
              <div className={Styles.Responsoive_Drop_Link}>
                {isDropped.About && <Dropdown title={title} />}
              </div>
              <span onClick={() => handleClasses("Classes")}>Classes</span>
              <div className={Styles.Responsoive_Drop_Link}>
                {isDropped.Classes && <Dropdown title={title} />}
              </div>
              <span onClick={() => handleContact("Contact Us")}>
                Contact Us
              </span>
              <div className={Styles.Responsoive_Drop_Link}>
                {isDropped.Contact && <Dropdown title={title} />}
              </div>
              <span onClick={() => handleCareers("Careers")}>Careers</span>
              <div className={Styles.Responsoive_Drop_Link}>
                {isDropped.Careers && <Dropdown title={title} />}
              </div>
            </div>
          )}
        </div>
      </nav>

      <Section2 />

      <Section3 />
    </div>
  );
}

export default App;

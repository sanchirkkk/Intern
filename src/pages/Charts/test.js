import React, { useEffect, useState, useRef } from "react";
import {
  HamburgerIcon,
  CheckCircleIcon,
  TimeIcon,
  RepeatClockIcon,
  ViewIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Menu,
  Stack,
  Text,
  Box,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  flexbox,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
// import incomedata from "./data";

import styles from "@/styles/Home.module.css";
import { Button, Show } from "@chakra-ui/react";
function App() {
  const [bigdata, setbigdata] = useState(
   [ 
    [
      {name: '', values:[,]},{name: 'DIGITAL', values:[1,]},{name: 'GREEN ', values:[2,]},{name: 'CUSTOMER CARE ', values:[2,]},
      {name: 'COLLABORATION', values:[2,]},{name: 'IDEATHON', values:[2,]},],[{name: 'LEAD', values:[1,]},{name: 'SUSTAINABLE', values:[1,]},
    {name: 'IMPLEMENTATION', values:[2,]},{name: '', values:[,]},{name: '', values:[4,]},{name: 'R&D (testing) area', values:[4,]},],
  [{name: 'Creativity', values:[1,]},{name: 'GROWTH', values:[1,]},{name: 'Professionalism', values:[2,]},{name: 'ACCESSIBLE', values:[2,]},
  {name: 'Open space area', values:[4,]},{name: '2 Phone booth', values:[4,]},],[{name: 'IMPACT', values:[1,]},{name: 'INSPIRE', values:[1,]},
  {name: 'VALUE CREATION', values:[2,]},{name: '24 seats', values:[4,]},{name: 'Team bonding area', values:[4,]},{name: 'Kitchen ', values:[4,]},],
  [{name: 'FINTECH', values:[3,]},{name: '', values:[,]},{name: 'SPECIALLY', values:[2,]},{name: 'Break room', values:[4,]},{name: '2 MEETING ROOM ', values:[4,]},{name: 'Common area', values:[4,]},],
  [{name: 'EMPLOYEES', values:[3,]},{name: 'IDEATHON', values:[3,]},{name: 'HACKATHON', values:[3,]},{name: '', values:[,]},{name: 'control room ', values:[4,]},{name: 'User experience', values:[4,]},],
  [{name: 'PUBLIC', values:[3,]},{name: 'THIRD PARTY', values:[3,]},{name: 'EDUCATION', values:[5,]},{name: 'MARKETING', values:[5,]},{name: 'Outsourcing team', values:[6,]},{name: ' Teams of bank', values:[6,]},],
  [{name: 'Innovative mindsets', values:[3,]},{name: 'EDUCATION', values:[3,]},{name: 'PROBLEMS', values:[5,]},{name: 'STUDENTS', values:[6,]},{name: 'Research team', values:[6,]},{name: '', values:[,]},]
   ]
    );
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [lastClicked, setLastClicked] = useState("none");
  const [showall, setShowall] = useState(false);
  const [valueselected, setselectedvalue] = useState(99);
  const [containerClassNames, setcontainerClassNames] = useState([
    styles.tetrisShape1,
    styles.tetrisShape2,
    styles.tetrisShape3,
    styles.tetrisShape4,
    styles.tetrisShape5,
    styles.tetrisShape6,
    styles.tetrisShape7,
    styles.tetrisShape8,
    styles.tetrisShape9,
  ]);
  const btnRef = useRef();

  const categorydata = [
    { color: "#262627", value: 98, name: "ALL TASKS" },
    { color: "#2C2C2D", value: 1, name: "Done" },
    { color: "#333335", value: 2, name: "Ongoing" },
    { color: "#39393A", value: 3, name: "On Hold" },
    // { color: "#404041", value: 4, name: "Ideas" },
    { color: "#464648", value: 5, name: "Acqusition" },
    { color: "#4C4C4F", value: 6, name: "Engagement" },
    { color: "#535356", value: 7, name: "Retain" },
    { color: "#59595C", value: 8, name: "Customer experience" },
    { color: "#606063", value: 9, name: "Risk" },
    { color: "#666669", value: 10, name: "Process automation" },
    { color: "#6C6C6F", value: 11, name: "Sales" },
  ];
  const [isOpen, setOpen] = useState(false);

  const tetrisShapes = [
    [1,1,2,2,2,2],
    [1,1,2,2,4,4],
    [1,1,2,2,4,4],
    [1,1,2,4,4,4],
    [3,3,2,4,4,4],
    [3,3,3,5,4,4],
    [3,3,5,5,6,6],
    [3,3,5,6,6,6]
  ];

  const containerClassNames1 = [
    "tetrisShape1",
    "tetrisShape2",
    "tetrisShape3",
    "tetrisShape4",
    "tetrisShape5",
    "tetrisShape6",
    "tetrisShape7",
    "tetrisShape8",
    // "tetrisShape9",
  ];

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      console.log(windowSize);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateElements = () => {
    return Array.from({ length: 8 }).map((item, el) => {
      return Array.from({ length: 6 }).map((item1, el1) => {
        let containerClassName = containerClassNames[tetrisShapes[el][el1]];

        return (
          <div
            id={containerClassNames1[tetrisShapes[el][el1]]}
            key={el + el1}
            className={`${styles.smallcontainer} ${containerClassName} ${
              styles.texts
            } ${
              lastClicked === containerClassNames1[tetrisShapes[el][el1]]
                ? styles.active
                : ""
            }`}
            style={
              valueselected != 99
                ? bigdata[el][el1]["values"].includes(valueselected)
                  ? {
                      boxShadow:
                        "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                      width: (windowSize.width ) / 6,
                      height: windowSize.height / 8,
                    }
                  : {
                      width: (windowSize.width ) / 6,
                      height: windowSize.height / 8,
                      filter: "brightness(20%)",
                    }
                : {
                    width: (windowSize.width ) / 6,
                    height: windowSize.height / 8,
                  }
            }
            onClick={handleClick}
          >
            {el == 0 && el1 == 0 ? (
              <Text
                fontSize="4xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked === "tetrisShape9"
                    ? {
                         
                        marginTop: "10vh",
                        // marginTop: "10px",
                      }
                    : { marginTop: "10vh" }
                }
              >
                VISION
              </Text>
            ) : (
              ""
            )}
            {el == 1 && el1 == 4 ? (
              <Text
                fontSize="3xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked === "tetrisShape6"
                    ? {
                         
                       
                        // marginLeft: "10vw",
                        marginTop: "14vh",
                      }
                    : { marginTop: "14vh"}
                }
              >
                {"OFFICE AREA".toUpperCase()}
              </Text>
            ) : (
              ""
            )}
            {el == 1 && el1 == 3 ? (
              <Text
                fontSize="3xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape2"
                    ? {
                         
                       
                      }
                    : {  }
                }
              >
                VALUE
              </Text>
            ) : (
              ""
            )}
            {/* {el == 4 && el1 == 2 ? (
              <Text
                fontSize="2xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape8"
                    ? {
                         
                        marginBottom: "20vh",
                      }
                    : { marginBottom: "20vh" }
                }
              >
                {"Operation".toUpperCase()}
              </Text>
            ) : (
              ""
            )} */}
            {/* {el == 0 && el1 == 3 ? (
              <Text
                fontSize="3xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape7"
                    ? {
                         
                        marginLeft: "10vw",
                      }
                    : { marginLeft: "10vw" }
                }
              >
                {"Technology".toUpperCase()}
              </Text>
            ) : (
              ""
            )} */}
            {el == 4 && el1 == 1 ? (
              <Text
                fontSize="4xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape3"
                    ? {
                         
                        marginRight: "5vw",
                      }
                    : { marginRight: "5vw" }
                }
              >
                {"MISSION"}
              </Text>
            ) : (
              ""
            )}
            {el == 5 && el1 == 3 ? (
              <Text
                fontSize="4xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape4"
                    ? {
                         
                        
                      }
                    : { }
                }
              >
                {"SOLUTION"}
              </Text>
            ) : (
              ""
            )}
            
            {el == 7 && el1 == 5 ? (
              <Text
                fontSize="4xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape5"
                    ? {
                         
                        marginLeft: "2vw"
                      }
                    : { marginLeft: "2vw" }
                }
              >
                {"PEOPLE".toUpperCase()}
              </Text>
            ) : (
              ""
            )}

            <Text
              style={showall ? { color: "white" } : {}}
              id={containerClassNames1[tetrisShapes[el][el1]]}
              fontSize="md"
            >
              {bigdata[el][el1]["name"]}
            </Text>
          </div>
        );
      });
    });
  };

  const generateButton = () => {
    return categorydata.map((item, index) => {
      return (
        <div
          onClick={
            item["value"] == 98 ? () => showaall() : () => svalue(item["value"])
          }
          className={styles.smallcon}
          style={{
            backgroundColor:
              valueselected == item["value"] ? "#141414" : item["color"],
            color: "white",
            width: "100%",
            height: windowSize.height / 11,
          }}
        >
          <Text fontSize="md"> {item["name"]}</Text>
        </div>
      );
    });
  };

  const handleClick = (e) => {
    const className = e.target.id;
    let data = [
      "tetrisShape1",
      "tetrisShape2",
      "tetrisShape3",
      "tetrisShape4",
      "tetrisShape5",
      "tetrisShape6",
      "tetrisShape7",
      "tetrisShape8",
      "tetrisShape9",
    ];
    let updatedData;
    if (className == lastClicked) {
      updatedData = data.map((item) => {
        return styles[item];
      });
      setLastClicked("none");
    } else {
      updatedData = data.map((item) => {
        if (item === className) {
          return styles[className + "1"];
        } else {
          return styles[item];
        }
      });
      setLastClicked(className);
    }
    setcontainerClassNames(updatedData);
    // console.log(updatedData);

    setIsClicked(!isClicked);
  };
  const handleClick1 = () => {
    setLastClicked("null");
    let data = [
      "tetrisShape1",
      "tetrisShape2",
      "tetrisShape3",
      "tetrisShape4",
      "tetrisShape5",
      "tetrisShape6",
      "tetrisShape7",
      "tetrisShape8",
      "tetrisShape9",
    ];
    let updatedData = data.map((item) => {
      return styles[item];
    });
    setcontainerClassNames(updatedData);

    setShowall(false);
    setselectedvalue(99);
    onCloseD();
  };
  const svalue = (number) => {
    console.log(number);
    if (valueselected == number) {
      setselectedvalue(99);
      console.log("end orloo");
      setShowall(false);
      return;
    }
    setShowall(true);
    setselectedvalue(number);
  };

  const showaall = () => {
    let value = !showall;
    if (value) {
      setShowall(value);
    }
    setShowall(value);
    setselectedvalue(99);
  };

  const onCloseD = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  return (
    <div
      id="chartdiv"
      className={styles.bigcon}
      style={{ width: windowSize.width, height: windowSize.height }}
    >
      <IconButton
        icon={<HamburgerIcon />}
        // variant="outline"
        position="absolute"
        onClick={onOpen}
        className={styles.btnn}
      >
        Харуулах
      </IconButton>

      <div
        style={{ width: windowSize.width , height: windowSize.height }}
        className={styles.container}
      >
        {generateElements()}
      </div>
      {/* <div
        className={styles.categorys}
        style={{ width: windowSize.width * 0.15, height: windowSize.height }}
      >
         {generateButton()} 
      </div> */}

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onCloseD}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Цэс</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4}>
              <Button
                leftIcon={<ViewIcon />}
                onClick={showaall}
                size="md"
                width="100%"
                colorScheme="green"
                variant="solid"
              >
                Бүгдийг харуулах
              </Button>
              <Button
                leftIcon={<RepeatIcon />}
                onClick={handleClick1}
                size="md"
                width="100%"
                colorScheme="pink"
                variant="solid"
              >
                Бүх сонголтыг арилгах
              </Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onCloseD}>
              Болих
            </Button>
            <Button colorScheme="blue">Оруулах</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default App;

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
   [ [{name:'Loan product recommendation model-v1', values:[2,5,6,11]},
{name:'Deposit product recommendation model-v1', values:[2]},
{name:'BS Enhancement Consulting', values:[1,9]},
{name:'Business Loan Early Warning model', values:[1,9]},
{name:'Business Income Model: Expense categorization', values:[3,6,8,9,11]},
{name:'Business Income Model: Sector & Owner prediction', values:[1,6,8,9,11]},
{name:'Data creation rule & structure', values:[1,10]},
{name:'DST library', values:[1,10]},
],
[{name:'Business Income Model: Account Filtering', values:[3,6,8,9,11]},
{name:'Product recommendation model: Insurance, credit card', values:[1,6,11]},
{name:'Improved customer churning prediction model', values:[1,7,11]},
{name:'Churning segmentation model', values:[1,5,6,10]},
{name:'Family Linkage Model', values:[2,6,10]},
{name:'Calculation of loan provision', values:[2,9]},
{name:'Automation of hedge efficiency test', values:[1,5,6,11]},
{name:'Online Loan agreement check ', values:[1,9]},
],
[{name:'Transaction Activity Segmentation', values:[1,7,10]},
{name:'Customer Lifetime value', values:[3,5,6,7,11]},
{name:'Bank Wide Loyalty', values:[3,5,6,7,11]},
{name:'NLP Chatbot: Social implementation', values:[2,6,8]},
{name:'Card product analyses', values:[1,5,6,11]},
{name:'Product recommendation rule: Debit card, online loan product, credit card, deposit rule', values:[1,6,11]},
{name:'Marketing module: data collection, job development and automation', values:[1,5,6,8]},
{name:'MLOPS â Open Source Implementation', values:[2,10]},
],
[{name:'NLP Chatbot: Khagan implementation', values:[1,6,8]},
{name:'Customer Lifetime Value Research & implementation', values:[1,6]},
{name:'Identifying potential priority customer', values:[1,5,6,11]},
{name:'Teacher card recommendation', values:[1,5,6,11]},
{name:'Customer feedback and interest analysis', values:[2,7,10]},
{name:'Customer tag', values:[2]},
{name:'MLOPS â Demo, Procurement', values:[1,10]},
{name:'MLOPS - RFP', values:[1,10]},
],
[{name:'Retail Segmentation model ', values:[1,6]},
{name:'Call center analyses', values:[2,7,10]},
{name:'NLP Chatbot: BRD', values:[1,6,8]},
{name:'NLP Chatbot: Research Phase', values:[1,6,8]},
{name:'Retail Segmentation model research', values:[1,6]},
{name:'Retail Segmentation data engineering', values:[1,6]},
{name:'MLOPS - EAC', values:[1,10]},
{name:'MLOPS - PoC', values:[1,10]},
]]
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
    [1,1,1,1,1,1,3,3,],
    [1,1,1,1,1,3,3,3,],
    [1,1,1,2,2,3,3,4,],
    [1,1,2,2,2,3,4,4,],
    [1,2,2,2,2,3,4,4,],
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
    return Array.from({ length: 5 }).map((item, el) => {
      return Array.from({ length: 8 }).map((item1, el1) => {
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
                      width: (windowSize.width * 0.85) / 8,
                      height: windowSize.height / 5,
                    }
                  : {
                      width: (windowSize.width * 0.85) / 8,
                      height: windowSize.height / 5,
                      filter: "brightness(20%)",
                    }
                : {
                    width: (windowSize.width * 0.85) / 8,
                    height: windowSize.height / 5,
                  }
            }
            onClick={handleClick}
          >
            {el == 1 && el1 == 1 ? (
              <Text
                fontSize="4xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked === "tetrisShape9"
                    ? {
                        opacity: 0,
                        marginTop: "20vh",
                        // marginTop: "10px",
                      }
                    : { marginTop: "20vh" }
                }
              >
                ML Model
              </Text>
            ) : (
              ""
            )}
            {/* {el == 0 && el1 == 5 ? (
              <Text
                fontSize="3xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked === "tetrisShape6"
                    ? {
                        opacity: 0,
                        marginTop: "5vh",
                        marginLeft: "10vw",
                        // marginTop: "10px",
                      }
                    : { marginTop: "5vh", marginLeft: "10vw" }
                }
              >
                {"Scoring".toUpperCase()}
              </Text>
            ) : (
              ""
            )} */}
            {/* {el == 3 && el1 == 1 ? (
              <Text
                fontSize="2xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape2"
                    ? {
                        opacity: 0,
                        marginBottom: "19vh",
                      }
                    : { marginBottom: "19vh" }
                }
              >
                CUSTOMER
              </Text>
            ) : (
              ""
            )} */}
            {/* {el == 4 && el1 == 2 ? (
              <Text
                fontSize="2xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape8"
                    ? {
                        opacity: 0,
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
                        opacity: 0,
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
            {el == 1 && el1 == 6 ? (
              <Text
                fontSize="4xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape3"
                    ? {
                        opacity: 0,
                        marginLeft: "10vw",
                      }
                    : { marginLeft: "10vw" }
                }
              >
                {"Data Engineering"}
              </Text>
            ) : (
              ""
            )}
            {el == 3 && el1 == 3 ? (
              <Text
                fontSize="4xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape4"
                    ? {
                        opacity: 0,
                        marginLeft: "8vw",
                      }
                    : { marginLeft: "8vw" }
                }
              >
                {"Research and Analysis"}
              </Text>
            ) : (
              ""
            )}
            {el == 3 && el1 == 6 ? (
              <Text
                fontSize="4xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape1"
                    ? {
                        opacity: 0,
                        marginTop: "20vh",
                      }
                    : { marginTop: "20vh" }
                }
              >
                {"ML Ops"}
              </Text>
            ) : (
              ""
            )}
            {/* {el == 1 && el1 == 7 ? (
              <Text
                fontSize="4xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape5"
                    ? {
                        opacity: 0,
                        marginLeft: "10vw",
                        marginBottom: "14vh",
                      }
                    : { marginLeft: "10vw", marginBottom: "14vh" }
                }
              >
                {"Product".toUpperCase()}
              </Text>
            ) : (
              ""
            )} */}

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
        Ð¥Ð°ÑÑÑÐ»Ð°Ñ
      </IconButton>

      <div
        style={{ width: windowSize.width * 0.85, height: windowSize.height }}
        className={styles.container}
      >
        {generateElements()}
      </div>
      <div
        className={styles.categorys}
        style={{ width: windowSize.width * 0.15, height: windowSize.height }}
      >
        {generateButton()}
      </div>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onCloseD}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Ð¦ÑÑ</DrawerHeader>

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
                ÐÒ¯Ð³Ð´Ð¸Ð¹Ð³ ÑÐ°ÑÑÑÐ»Ð°Ñ
              </Button>
              <Button
                leftIcon={<RepeatIcon />}
                onClick={handleClick1}
                size="md"
                width="100%"
                colorScheme="pink"
                variant="solid"
              >
                ÐÒ¯Ñ ÑÐ¾Ð½Ð³Ð¾Ð»ÑÑÐ³ Ð°ÑÐ¸Ð»Ð³Ð°Ñ
              </Button>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onCloseD}>
              ÐÐ¾Ð»Ð¸Ñ
            </Button>
            <Button colorScheme="blue">ÐÑÑÑÐ»Ð°Ñ</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default App;

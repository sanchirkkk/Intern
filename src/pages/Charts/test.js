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
  const [bigdata, setbigdata] = useState([
    [
      { name: "Risk Adjusted Rate", values: [4, 6, 8] },
      { name: "Loan Portfolio Optimization", values: [3, 9] },
      { name: "Fraud Detection", values: [4, 5, 9] },
      { name: "MLOps", values: [2, 10] },
      { name: "DST Functions Library", values: [1, 2, 10] },
      { name: "Customer Lifetime Scoring", values: [4, 5, 10] },
      { name: "Customer Churning", values: [1, 7, 9] },
      { name: "Savings Recommendation", values: [3, 6, 11] },
      { name: "Salary Loan Recommendation", values: [1, 6, 11] },
    ],
    [
      { name: "Early Warning", values: [1, 6, 9] },
      { name: "Debt Collection", values: [1, 6, 9] },
      { name: "Collateral Valuation", values: [4, 6, 9] },
      { name: "ChatOps", values: [1, 6, 8] },
      { name: "Transaction Receipt Analysis", values: [1, 6, 10] },
      { name: "Customer Sentiment Analysis", values: [4, 7, 8] },
      { name: "Behavioral Scoring", values: [1, 2, 5, 9] },
      { name: "Personalized Product", values: [3, 7, 8] },
      { name: "Insurance product recommendation", values: [1, 2, 6, 10] },
    ],
    [
      { name: "Anomaly Detection", values: [4, 7, 8] },
      { name: "Potential Priority Customer", values: [1, 2, 5, 11] },
      { name: "Potential New-Adult Customer", values: [2, 5, 11] },
      { name: "Loan Eligible customers", values: [1, 6, 8, 9] },
      { name: "conversational AI", values: [1, 6, 8] },
      { name: "Portfolio Optimization", values: [3, 10] },
      { name: "Deposit product recommendation", values: [1, 6, 10] },
      { name: "Credit card product recommendation", values: [1, 2, 6, 10] },
      { name: "Personal Spending", values: [4, 6, 8] },
    ],
    [
      { name: "Business Lookalike", values: [1, 5, 11] },
      { name: "Business Industry", values: [1, 5, 11] },
      { name: "Voice Recognized Transaction", values: [4, 6, 8] },
      { name: "Signature Verification", values: [4, 10] },
      { name: "Interest Rate Prediction", values: [3, 10] },
      { name: "Industry Growth", values: [3, 10] },
      { name: "Loan Segmentation", values: [3, 9] },
      { name: "Fintech Cashflow ", values: [1, 10] },
      { name: "Customer Segmentation", values: [1, 6, 11] },
    ],
    [
      { name: "Business Income", values: [1, 5, 11] },
      { name: "Document Verification", values: [4, 10] },
      { name: "Branch Load Management", values: [4, 6, 10] },
      { name: "Customer Behavior Forecasting", values: [4, 5, 8] },
      { name: "Currency Prediction", values: [3, 10] },
      { name: "Customer Cashflow Prediction", values: [4, 6, 11] },
      { name: "Customer Behavior", values: [4, 5, 8] },
      { name: "Credit Card Segmentation", values: [1, 6, 11] },
      { name: "Bank Wide Loyalty", values: [2, 7, 8] },
    ],
  ]);
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
    { color: "#2C2C2D", value: 1, name: "Completed" },
    { color: "#333335", value: 2, name: "Ongoing" },
    { color: "#39393A", value: 3, name: "Planned" },
    { color: "#404041", value: 4, name: "Ideas" },
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
    [8, 8, 8, 6, 6, 5, 5, 4, 4],
    [8, 8, 8, 6, 2, 2, 5, 4, 4],
    [8, 1, 1, 1, 2, 3, 4, 4, 0],
    [1, 1, 7, 7, 3, 3, 0, 0, 0],
    [1, 7, 7, 3, 3, 0, 0, 0, 0],
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
    "tetrisShape9",
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
      return Array.from({ length: 9 }).map((item1, el1) => {
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
                      width: (windowSize.width * 0.85) / 9,
                      height: windowSize.height / 5,
                    }
                  : {
                      width: (windowSize.width * 0.85) / 9,
                      height: windowSize.height / 5,
                      filter: "brightness(20%)",
                    }
                : {
                    width: (windowSize.width * 0.85) / 9,
                    height: windowSize.height / 5,
                  }
            }
            onClick={handleClick}
          >
            {el == 0 && el1 == 1 ? (
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
                RISK
              </Text>
            ) : (
              ""
            )}
            {el == 0 && el1 == 5 ? (
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
            )}
            {el == 3 && el1 == 1 ? (
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
            )}
            {el == 4 && el1 == 2 ? (
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
            )}
            {el == 0 && el1 == 3 ? (
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
            )}
            {el == 1 && el1 == 4 ? (
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
                {"nlp".toUpperCase()}
              </Text>
            ) : (
              ""
            )}
            {el == 3 && el1 == 4 ? (
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
                {"Predictive".toUpperCase()}
              </Text>
            ) : (
              ""
            )}
            {el == 3 && el1 == 7 ? (
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
                {"Market".toUpperCase()}
              </Text>
            ) : (
              ""
            )}
            {el == 1 && el1 == 7 ? (
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
            height: windowSize.height / 12,
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

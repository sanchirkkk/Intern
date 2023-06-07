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
      { name: "", value: [] },
      { name: "Credit Card Recommendation", value: [2, 4, 8, 14] },
      { name: "Currency Prediction", value: [3, 6, 10, 13] },
      { name: "Behavioral Scoring", value: [1, 4, 7, 12] },
      { name: "Collateral Valuation", value: [1, 6, 8, 12] },
      { name: "Potential New-Adult Customer", value: [3, 6, 7, 14] },
      { name: "Cashflow Prediction", value: [1, 6, 8, 13] },
      { name: "Personalized Product", value: [2, 6, 9, 11] },
    ],
    [
      { name: "Credit Card Segmentation", value: [3, 4, 8, 14] },
      { name: "", value: [] },
      { name: "Interest Rate Prediction", value: [3, 6, 10, 13] },
      { name: "Debt Collection", value: [1, 4, 8, 12] },
      { name: "Potential Priority Customer", value: [3, 6, 7, 14] },
      { name: "Business Industry", value: [1, 4, 7, 14] },
      { name: "Savings Recommendation", value: [2, 6, 8, 14] },
      { name: "", value: [] },
    ],
    [
      { name: "Portfolio Optimization", value: [3, 6, 10, 13] },
      { name: "Industry Growth", value: [3, 6, 10, 13] },
      { name: "", value: [] },
      { name: "Early Warning", value: [1, 5, 8, 12] },
      { name: "", value: [] },
      { name: "Personal Spending", value: [2, 6, 8, 11] },
      { name: "Voice Recognized Transaction", value: [2, 6, 8, 11] },
      { name: "Customer Churning", value: [1, 5, 9, 12] },
    ],
    [
      { name: "", value: [] },
      { name: "Loan Segmentation", value: [3, 6, 10, 12] },
      { name: "Loan Portfolio Optimization", value: [3, 6, 10, 12] },
      { name: "", value: [] },
      { name: "Customer Segmentation", value: [3, 5, 8, 14] },
      { name: "", value: [] },
      { name: "Signature Verification", value: [3, 6, 10, 13] },
      { name: "Fraud Detection", value: [3, 6, 7, 12] },
    ],
    [
      { name: "Salary Loan Recommendation", value: [2, 4, 8, 14] },
      { name: "Business Lookalike", value: [1, 4, 7, 14] },
      { name: "Customer Behavior", value: [1, 6, 7, 11] },
      { name: "Customer Behavior Forecasting", value: [1, 6, 7, 11] },
      { name: "Anomaly Detection", value: [2, 6, 9, 11] },
      { name: "Customer Sentiment Analysis", value: [2, 6, 9, 11] },
      { name: "", value: [] },
      { name: "Risk Adjusted Rate", value: [2, 6, 8, 11] },
    ],
    [
      { name: "Business Income", value: [1, 5, 7, 14] },
      { name: "", value: [] },
      { name: "", value: [] },
      { name: "Insurance Recommendation", value: [2, 4, 8, 14] },
      { name: "Bank Wide Loyalty", value: [2, 5, 9, 11] },
      { name: "Document Verification", value: [3, 6, 10, 13] },
      { name: "NLP Chatbot", value: [2, 5, 8, 11] },
      { name: "", value: [] },
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
  ]);
  const btnRef = useRef();

  const categorydata = [
    { color: "#262627", value: 1, name: "Customer Valuation" },
    { color: "#2C2C2D", value: 2, name: "Customer Support" },
    { color: "#333335", value: 3, name: "Business Support" },
    { color: "#39393A", value: 4, name: "Completed" },
    { color: "#404041", value: 5, name: "Ongoing" },
    { color: "#464648", value: 6, name: "Planned" },
    { color: "#4C4C4F", value: 7, name: "Identify" },
    { color: "#535356", value: 8, name: "Cooperate" },
    { color: "#59595C", value: 9, name: "Retain" },
    { color: "#606063", value: 10, name: "Non-Customer" },
    { color: "#666669", value: 11, name: "Customer experience" },
    { color: "#6C6C6F", value: 12, name: "Risk" },
    { color: "#737376", value: 13, name: "Process automation" },
    { color: "#79797B", value: 14, name: "Sales" },
  ];
  const [isOpen, setOpen] = useState(false);

  const tetrisShapes = [
    [0, 0, 1, 2, 2, 3, 4, 4],
    [0, 1, 1, 2, 3, 3, 4, 4],
    [1, 1, 2, 2, 3, 4, 4, 6],
    [2, 2, 2, 3, 3, 4, 5, 6],
    [2, 3, 3, 3, 4, 4, 5, 6],
    [3, 3, 3, 4, 4, 5, 5, 6],
  ];

  const containerClassNames1 = [
    "tetrisShape1",
    "tetrisShape2",
    "tetrisShape3",
    "tetrisShape4",
    "tetrisShape5",
    "tetrisShape6",
    "tetrisShape7",
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
    return Array.from({ length: 6 }).map((item, el) => {
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
                ? bigdata[el][el1]["value"].includes(valueselected)
                  ? {
                      boxShadow:
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                      width: (windowSize.width * 0.85) / 8,
                      height: windowSize.height / 6,
                    }
                  : {
                      width: (windowSize.width * 0.85) / 8,
                      height: windowSize.height / 6,
                      filter: "brightness(40%)",
                    }
                : {
                    width: (windowSize.width * 0.85) / 8,
                    height: windowSize.height / 6,
                  }
            }
            onClick={handleClick}
          >
            {el == 0 && el1 == 0 ? (
              <Text
                fontSize="2xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked === "tetrisShape1"
                    ? {
                        opacity: 0,
                      }
                    : {}
                }
              >
                CARD
              </Text>
            ) : (
              ""
            )}
            {el == 1 && el1 == 2 ? (
              <Text
                fontSize="2xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape2"
                    ? {
                        opacity: 0,
                      }
                    : {}
                }
              >
                {"Macro".toLocaleUpperCase()} <br />
                {"Economics".toLocaleUpperCase()}
              </Text>
            ) : (
              ""
            )}
            {el == 3 && el1 == 2 ? (
              <Text
                fontSize="2xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape3"
                    ? {
                        opacity: 0,
                      }
                    : {}
                }
              >
                LOAN
              </Text>
            ) : (
              ""
            )}
            {el == 4 && el1 == 7 ? (
              <Text
                fontSize="2xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape7"
                    ? {
                        opacity: 0,
                      }
                    : {}
                }
              >
                RISK
              </Text>
            ) : (
              ""
            )}
            {el == 5 && el1 == 1 ? (
              <Text
                fontSize="2xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape4"
                    ? {
                        opacity: 0,
                      }
                    : {}
                }
              >
                BANK <br />
                FOCUSED <br />
                BUSINESS
              </Text>
            ) : (
              ""
            )}
            {el == 5 && el1 == 6 ? (
              <Text
                fontSize="2xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape6"
                    ? {
                        opacity: 0,
                      }
                    : {}
                }
              >
                Operation
              </Text>
            ) : (
              ""
            )}
            {el == 3 && el1 == 5 ? (
              <Text
                fontSize="2xl"
                className={styles.texttitle}
                style={
                  showall || lastClicked == "tetrisShape5"
                    ? {
                        opacity: 0,
                      }
                    : {}
                }
              >
                {" "}
                CUSTOMER <br /> FOCUSED <br /> BUSINESS
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
          onClick={() => svalue(item["value"])}
          className={styles.smallcon}
          style={{
            backgroundColor:
              valueselected == item["value"] ? "#141414" : item["color"],
            color: "white",
            width: "100%",
            height: windowSize.height / 14,
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
    setShowall(true);
    setselectedvalue(99);
    onCloseD();
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

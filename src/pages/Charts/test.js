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
    { color: "#9ACCE3", value: 1, name: "Customer Valuation" },
    { color: "#86C0DF", value: 2, name: "Customer Support" },
    { color: "#72B3DB", value: 3, name: "Business Support" },
    { color: "#5EABD8", value: 4, name: "Completed" },
    { color: "#4A9ED4", value: 5, name: "Ongoing" },
    { color: "#3691D0", value: 6, name: "Planned" },
    { color: "#2283CC", value: 7, name: "Identify" },
    { color: "#1077C9", value: 8, name: "Cooperate" },
    { color: "#0D6AB2", value: 9, name: "Retain" },
    { color: "#0A5C9C", value: 10, name: "Non-Customer" },
    { color: "#084B7A", value: 11, name: "Customer experience" },
    { color: "#063B58", value: 12, name: "Risk" },
    { color: "#042A37", value: 13, name: "Process automation" },
    { color: "#021916", value: 14, name: "Sales" },
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
                      "box-shadow":
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                      width: (windowSize.width * 0.9) / 8,
                      height: windowSize.height / 6,
                    }
                  : {
                      width: (windowSize.width * 0.9) / 8,
                      height: windowSize.height / 6,
                      filter: "brightness(40%)",
                    }
                : {
                    width: (windowSize.width * 0.9) / 8,
                    height: windowSize.height / 6,
                  }
            }
            onClick={handleClick}
          >
            {el == 0 && el1 == 0 ? (
              <p
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
              </p>
            ) : (
              ""
            )}
            {el == 1 && el1 == 2 ? (
              <p
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
              </p>
            ) : (
              ""
            )}
            {el == 3 && el1 == 2 ? (
              <p
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
              </p>
            ) : (
              ""
            )}
            {el == 4 && el1 == 7 ? (
              <p
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
              </p>
            ) : (
              ""
            )}
            {el == 5 && el1 == 1 ? (
              <p
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
              </p>
            ) : (
              ""
            )}
            {el == 5 && el1 == 6 ? (
              <p
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
              </p>
            ) : (
              ""
            )}
            {el == 3 && el1 == 5 ? (
              <p
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
              </p>
            ) : (
              ""
            )}

            <span
              id={containerClassNames1[tetrisShapes[el][el1]]}
              style={showall ? { color: "white" } : {}}
            >
              {bigdata[el][el1]["name"]}
            </span>
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
            backgroundColor: item["color"],
            color: "white",
            width: "100%",
            height: windowSize.height / 14,
          }}
        >
          <span> {item["name"]}</span>
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
        style={{ width: windowSize.width * 0.9, height: windowSize.height }}
        className={styles.container}
      >
        {generateElements()}
      </div>
      <div
        className={styles.categorys}
        style={{ width: windowSize.width * 0.1, height: windowSize.height }}
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

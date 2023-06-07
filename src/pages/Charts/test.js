import React, { useEffect, useState } from "react";
import {
  HamburgerIcon,
  CheckCircleIcon,
  TimeIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
// import incomedata from "./data";

import styles from "@/styles/Home.module.css";
import { Button, Show } from "@chakra-ui/react";
function App() {
  const [bigdata, setbigdata] = useState([
    [
      { name: "Customer Segmentation", value: 0 },
      { name: "", value: 4 },
      { name: "Credit Default Projection", value: 1 },
      { name: "Сэжигтэй гүйлгээний дохио", value: 2 },
      { name: "Early Warning System", value: 1 },
      { name: "Зээлийн эрсдлийн сан", value: 2 },
      { name: "Business Income Model", value: 1 },
    ],
    [
      { name: "", value: 1 },
      { name: "Customer Tag", value: 2 },
      { name: "Insurance Recommendation Model", value: 0 },
      { name: "Early Warning System", value: 1 },
      { name: "", value: 4 },
      { name: "NLP Chatbot", value: 1 },
      { name: "Debt Collection Model", value: 1 },
    ],

    [
      { name: "Salary Loan Sales Model", value: 2 },
      { name: "", value: 2 },
      { name: "Debt Collection System", value: 3 },
      { name: "", value: 0 },
      { name: "Early Warning Model", value: 1 },
      { name: "Salary Loan Sales Model", value: 1 },
      { name: "Early Warning Model", value: 2 },
    ],

    [
      { name: "Credit Card Sales Model", value: 1 },
      { name: "", value: 0 },
      { name: "Risk Management System", value: 1 },
      { name: "Business Industry Model", value: 2 },
      { name: "Customer Churning Model", value: 1 },
      { name: "Credit Card Sales Model", value: 2 },
      { name: "Customer Churning Model", value: 1 },
    ],

    [
      { name: "", value: 1 },
      { name: "NLP Chatbot", value: 1 },
      { name: "Customer 360", value: 1 },
      { name: "", value: 1 },
      { name: "Customer Segmentation Model", value: 2 },
      { name: "Insurance Recommendation Model", value: 3 },
      { name: "Credit Default Projection", value: 0 },
    ],
    [
      { name: "MLOps", value: 1 },
      { name: "Bank Wide Loyalty", value: 1 },
      { name: "Business Income Model", value: 0 },
      { name: "Зээлийн эрсдлийн сан", value: 0 },
      { name: "Депозитийн гарах урсгалын судалгаа", value: 2 },
      { name: "Сэжигтэй гүйлгээний дохио", value: 2 },
      { name: "Эрсдэлтэй зээлийн дохио", value: 2 },
    ],
  ]);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [lastClicked, setLastClicked] = useState("none");
  const [showall, setShowall] = useState(false);
  const [valueselected, setselectedvalue] = useState(10);
  const [containerClassNames, setcontainerClassNames] = useState([
    styles.tetrisShape1,
    styles.tetrisShape2,
    styles.tetrisShape3,
    styles.tetrisShape4,
    styles.tetrisShape5,
    styles.tetrisShape6,
    styles.tetrisShape7,
  ]);
  const tetrisShapes = [
    [0, 0, 4, 4, 4, 4, 6],
    [0, 0, 0, 1, 4, 6, 6],
    [0, 0, 1, 1, 4, 6, 6],
    [0, 1, 1, 2, 2, 6, 6],
    [1, 1, 2, 2, 6, 6, 5],
    [1, 2, 2, 5, 5, 5, 5],
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
      return Array.from({ length: 7 }).map((item1, el1) => {
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
              valueselected != 10
                ? bigdata[el][el1]["value"] == valueselected
                  ? {
                      "box-shadow":
                        "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                      width: windowSize.width / 7,
                      height: windowSize.height / 6,
                    }
                  : {
                      width: windowSize.width / 7,
                      height: windowSize.height / 6,
                      filter: "brightness(40%)",
                    }
                : { width: windowSize.width / 7, height: windowSize.height / 6 }
            }
            onClick={handleClick}
          >
            {el == 1 && el1 == 1 ? (
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
                Борлуулалт
              </p>
            ) : (
              ""
            )}
            {el == 3 && el1 == 2 ? (
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
                Технологи
              </p>
            ) : (
              ""
            )}

            {el == 4 && el1 == 3 ? (
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
                Харилцагчийн <br /> судалгаа
              </p>
            ) : (
              ""
            )}
            {el == 5 && el1 == 4 ? (
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
                Өгөгдлийн шинжилгээ
              </p>
            ) : (
              ""
            )}
            {el == 2 && el1 == 6 ? (
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
                Машин сургалтын загвар
              </p>
            ) : (
              ""
            )}

            {el == 0 && el1 == 3 ? (
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
                Эрсдэл
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
    let check = !showall;
    if (!check) {
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
    }
    setShowall(check);
    setselectedvalue(10);
  };
  const svalue = (number) => {
    console.log(number);
    if (valueselected == number) {
      setselectedvalue(10);
      console.log("end orloo");
      setShowall(false);
      return;
    }
    setShowall(true);
    setselectedvalue(number);
  };

  return (
    <div
      id="chartdiv"
      className={styles.container}
      style={{ width: "100%", height: "100%" }}
    >
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          // variant="outline"
          position="absolute"
          className={styles.btnn}
        >
          Харуулах
        </MenuButton>
        <MenuList>
          <MenuItem onClick={handleClick1}>
            {showall ? "Бүгдийг хаах" : "Бүгдийг харах "}
          </MenuItem>
          <MenuItem
            onClick={() => svalue(0)}
            icon={<CheckCircleIcon color={"green"} />}
          >
            Хийгдсэн
          </MenuItem>
          <MenuItem
            onClick={() => svalue(1)}
            icon={<RepeatIcon color={"pink.600"} />}
          >
            Хийгдэж буй
          </MenuItem>
          <MenuItem
            onClick={() => svalue(2)}
            icon={<TimeIcon color={"blue"} />}
          >
            Төлөвлөж буй
          </MenuItem>
        </MenuList>
      </Menu>

      {/* <button onClick={handleClick1} size="lg">
        {showall ? "Хаах" : "Бүгдийг харуулах "}
      </button> */}
      {generateElements()}
    </div>
  );
}

export default App;

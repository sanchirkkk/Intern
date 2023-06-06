import React, { useEffect, useRef, useState } from "react";
import { create, Root, Container, Theme, percent } from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import incomedata from "./data";
import styles from "@/styles/Home.module.css";
import childdata from "./child";

function App() {
  const chartRef = useRef(null);
  const [ftime, setftime] = useState(true);
  const [data, setData] = useState(incomedata);
  let series;
  useEffect(() => {
    let root = Root.new(chartRef.current);

    let myTheme = Theme.new(root);
    myTheme
      .rule("RoundedRectangle", ["hierarchy", "node", "shape", "depth2"])
      .setAll({
        fillOpacity: 1,
        // strokeWidth: 1,
        strokeOpacity: 0.2,
      });

    // myTheme.rule("Label", ["node", "depth1"]).setAll({
    //   forceHidden: true,
    // });

    myTheme.rule("Label", ["treemap", "hierarchy", "node"]).setAll({
      fontSize: 20,
      fill: am5.color("#FFFFFF"),
    });

    root.setThemes([am5themes_Animated.new(root), myTheme]);

    let container = Container.new(root, {
      width: percent(100),
      height: percent(100),
      layout: root.verticalLayout,
    });
    root.container.children.push(container);

    series = container.children.push(
      am5hierarchy.Treemap.new(root, {
        singleBranchOnly: false,
        downDepth: 1,
        upDepth: -1,
        initialDepth: 3,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        nodePaddingOuter: 0,
        nodePaddingInner: 0,
        className: {
          className: "hello",
        },
      })
    );
    series.animate({
      key: "startAngle",
      to: 180,
      loops: Infinity,
      duration: 2000,
      easing: am5.ease.out,
    });
    series.get("colors").set("step", 1);
    // series.get("colors").set("colors", [
    //   am5.color(0xbb9f06),
    //   // am5.color(0x087f8c),
    //   // am5.color(0x095256),
    //   // am5.color(0x5aaa95),
    //   // am5.color(0x86a873),
    // ]);

    if (ftime) {
      series.data.setAll(data);
      setftime(false);
    }
    series.set("className", (dataItem) => {
      console.log(dataItem);
      dataItem.get("className");
    });

    series.events.on("pointerdown", (event) => {
      console.log(event.target);
      const selectedDataItem = event.target.dataItem;
      edit(selectedDataItem);
    });

    return () => {
      root.dispose();
    };
  }, []);

  function edit(incomedata) {
    let name = incomedata["dataContext"]["name"];
    let id = incomedata["dataContext"]["id"];

    data[0]["children"].map((item) => {
      if (Object.keys(item).includes("value")) {
        if (item["name"] === name) {
          if (!Object.keys(item).includes("children")) {
            childdata[id].map((l) => {
              l["id"] = item["id"];
            });
            item["children"] = childdata[item["id"]];
            delete item["value"];
          } else {
            delete item["children"];
            item["value"] = 100;
          }
        }
      } else {
        if (item["id"] === id) {
          item["value"] = 100;
          delete item["children"];
        }
      }
      return item;
    });
    // setData(sda);
    // series.hiddenState.transitionDuration = 5000;
    series.data.setAll(data, {
      duration: 100,
      easing: am5.ease.linear,
    });
  }

  return (
    <div
      id="chartdiv"
      ref={chartRef}
      style={{ width: "700px", height: "1000px" }}
    ></div>
  );
}

export default App;

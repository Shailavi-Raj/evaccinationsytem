import React from "react";
import { Link } from "react-router-dom";
import { AboutbarData } from "./AboutbarData";
import "../style/first.css";

export default function AboutMenu() {
  return (
    <ul>
      <h2>
        <div className="aboutoption">
          {AboutbarData.map((item, index) => {
            return (
              <div key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </h2>
    </ul>
  );
}

import { type } from "@testing-library/user-event/dist/type";
import React, { Component } from "react";
import data from "./dataGlasses.json";

export default class SelectGlasses extends Component {
  constructor() {
    super();
    this.state = {
      data: "name",
      imgUrl: "/img/glassesImage/v1.png",
      name: "GUCCI G8850U",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    };
  }
  changeGlasses = (type) => {
    const imgUrl = `/img/glassesImage/${type}.png`;
    this.setState({ imgUrl });
  };
  render() {
    return (
      <div className="bg">
        <div className="container">
          <div className="row ">
            <div className="col-sm-6">
              <img
                src="./img/glassesImage/model.jpg"
                alt=""
                width="300px"
                height="300px"
              />
              <img
                src={this.state.imgUrl}
                alt=""
                width="150px"
                height="50px"
                className="img-model"
              />
              <div className="desc">
                <h1>{this.state.name}</h1>
                <p>{this.state.desc}</p>
              </div>
            </div>
            <div className="col-sm-6">
              <img
                src="./img/glassesImage/model.jpg"
                alt=""
                width="300px"
                height="300px"
              />
            </div>
          </div>

          <img
            onClick={() => this.changeGlasses("v1")}
            src="/img/glassesImage/v1.png"
            alt=""
            width="105px"
            height="50px"
          />
          <img
            onClick={() => this.changeGlasses("v2")}
            src="/img/glassesImage/v2.png"
            alt=""
            width="105px"
            height="50px"
          />
          <img
            onClick={() => this.changeGlasses("v3")}
            src="/img/glassesImage/v3.png"
            alt=""
            width="105px"
            height="50px"
          />
          <img
            onClick={() => this.changeGlasses("v4")}
            src="/img/glassesImage/v4.png"
            alt=""
            width="105px"
            height="50px"
          />
          <img
            onClick={() => this.changeGlasses("v5")}
            src="/img/glassesImage/v5.png"
            alt=""
            width="105px"
            height="50px"
          />
          <img
            onClick={() => this.changeGlasses("v6")}
            src="/img/glassesImage/v6.png"
            alt=""
            width="105px"
            height="50px"
          />
          <img
            onClick={() => this.changeGlasses("v7")}
            src="/img/glassesImage/v7.png"
            alt=""
            width="105px"
            height="50px"
          />
          <img
            onClick={() => this.changeGlasses("v8")}
            src="/img/glassesImage/v8.png"
            alt=""
            width="105px"
            height="50px"
          />
          <img
            onClick={() => this.changeGlasses("v9")}
            src="/img/glassesImage/v9.png"
            alt=""
            width="105px"
            height="50px"
          />
        </div>
      </div>
    );
  }
}

import React from "react";
import "../App.css";

const CatContainer = (cat) => {
  return (
    <div>
      <img class="cat-image" src={cat.image} alt="Cat" />
      {cat.name ? (
        <h2>Name:{cat.name}</h2>
      ) : (
      false
      )}
      <h3>Age: {cat.age} years</h3>
    </div>
  );
};

const catApp = () => {
  return (
    <div id="cats-container">
      <CatContainer
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvXpsm4RSo0WUNpbs_GPjBlwiv3QYb6OYnfA&usqp=CAU"
        name = "Cat1"
        age = {2}
      />
      <CatContainer
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy2UfltbvWh1nQog46XrjX8jGZlGdzb5dXYg&usqp=CAU"
        name = "Cat2"
        age = {3}
      />
      <CatContainer
        image = "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
        name = "Cat3"
        age = {2}
      />
      <CatContainer
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnL-6fb5PhgkCkH3odiqgPmhqoWm6HeRjwQ&usqp=CAU"
        name = "Cat4"
        age = {2}
      />
    </div>
  );
};

export default catApp;

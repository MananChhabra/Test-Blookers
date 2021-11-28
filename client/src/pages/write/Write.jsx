import "./write.css";
import React, { useState } from "react";
import { addPost } from "../../service/api";
import { useHistory } from 'react-router-dom';

const initialValue = {
  title: "",
  text: ""
}

export default function Write() {
 





  // function getData(val) {
  //   setText(val.target.value);
  // }
  // function getTitle(val) {
  //   setTitle(val.target.value);
  // }

  function getDataFromApi(val) {
    console.log("Loading Data...");
    console.log(text)
    const data = JSON.stringify({
      "text": text,
      "language": "en",
      "includeCitations": false,
      "scrapeSources": false
    });

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(JSON.parse(this.responseText));
        console.log(JSON.parse(this.responseText)["percentPlagiarism"]);
        alert("Plagiarism % is : " + JSON.parse(this.responseText)["percentPlagiarism"])
        console.log("Data Loaded")
      }
    });

    xhr.open("POST", "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-rapidapi-host", "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "dfde047140msh6a7ad1c767e7bf5p11179fjsnb8cab0c157a3");

    xhr.send(data);
  }









  
  
  const [post, setPost] = useState(initialValue);
  const { title, text } = post;
  let history = useHistory();

  const onValueChange = (e) => {
    // console.log(e.target.value);
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const addPostDetails = async () => {
    await addPost(post);
    history.push('./posts');
  }


  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          {/* <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label> */}
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            onChange={(e) => onValueChange(e)} name='title' value={title}
            className="writeInput"
            placeholder="Title"
            // onChange={getTitle}
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            onChange={(e) => onValueChange(e)} name='text' value={text}
            id="blogtext"
            // onChange={getData}
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />

        </div>
        <button type="button" className="writeSubmit plagButton" onClick={getDataFromApi} >
          Plagiarism
        </button>
        <button className="writeSubmit" type="submit" onClick={addPostDetails}>
          Publish
        </button>
      </form>
    </div>
  );
}



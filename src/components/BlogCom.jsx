import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Blogcom() {
  const [datas, setDatas] = useState([]);
  const [activeUser, setActiveUser] = useState("");

  const url = "https://dummyjson.com/posts";
  // console.log(url)
  async function BlogData() {
    await axios.get(url).then((responses) => {
      const AllDatas = responses.data.posts;
      //  console.log(AllDatas)
      setDatas(AllDatas);
    });
  }
  useEffect(() => {
    BlogData();
    statusValidate();
  }, []);

  const statusValidate = () => {
    let activeuser = JSON.parse(localStorage.getItem("activeuser"));
    if (activeuser) {
      setActiveUser(activeuser);
    }
  };

  return (
    <div className="row justify-content-center my-5">
      <h2 className="text-center">Blog Posts</h2>
      {datas
        ? datas.map((value, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-16 col-10 py-4">
                <img
                  src="images/blogger4.avif"
                  alt=""
                  style={{ width: "100%", height: "200px" }}
                />
                <h4>{value.title}</h4>
                <p>{value.body.slice(0, 80)}...</p>
                <div className="text-end">
                  {activeUser ? (
                    <Link to={`/blog_details/${value.id}`}>
                      Read More<i className="fas fa-arrow-right ps-1"></i>
                    </Link>
                  ) : (
                    <Link to={`/register`}>
                      Read More<i className="fas fa-arrow-right ps-1"></i>
                    </Link>
                  )}
                </div>
              </div>
            );
          })
        : "Loading!!!!!!!!!!"}
    </div>
  );
}

export default Blogcom;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectStorage } from "../../firebase";
import { useAuthContent } from "../../Hooks/useAuthContent";
import { useFireStore } from "../../Hooks/useFirestore";
import Navbar from "./Navbar";
import Select from "react-select";
import TinyMC from "./TinyMC";

const Categories = [
  { value: "software Engineering", label: "Software Engineering" },
  { value: "coding", label: "Coding" },
  { value: "frontend development", label: "Frontend Developement" },
  { value: "backend Development", label: "Backend Development" },
  { value: "computer science", label: "Computer Science" },
  { value: "productivity", label: "Productivity" },
  { value: "technology", label: "technology" },
  { value: "life", label: "Life" },
  { value: "nature", label: "Nature" },
  { value: "sports", label: "Sports" },
  { value: "health", label: "Health" },
];

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [imageError, setImageError] = useState(null);
  const [category, setCategory] = useState([]);
  const [brief, setBrief] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState(false);
  const { userData } = useAuthContent();
  const [Id, setId] = useState("");

  const navigate = useNavigate();
  const { addDocument, response } = useFireStore("articles");

  const handleSubmit = async () => {
    //update profile path
    const uploadedPath = `articleImage/${userData.uid}/${image.name}`;
    const img = await projectStorage.ref(uploadedPath).put(image);
    const imgURL = await img.ref.getDownloadURL();

    const createdBy = {
      displayName: userData.displayName,
      photoURL: userData.photoURL,
      id: userData.uid,
    };

    const article = {
      title,
      body,
      image: imgURL,
      category,
      comment: [],
      like: 0,
      brief,
      Id,
      timetoRead: time,
      createdBy,
      Liked: false,
    };

    if (title !== "" && body !== "") {
      await addDocument(article);
      if (!response.error) {
        navigate("/");
      }

      setTitle("");
      setBody("");
      setImage("");
      setCategory([]);
      setBrief("");
      setTime("");
    } else {
      setError(true);
    }
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    setImage(null);

    let selected = e.target.files[0];

    if (!selected) {
      setImageError("Please Select a Image");
      return;
    }

    if (!selected.type.includes("image")) {
      setImageError("Selected file must be a image");
      return;
    }

    if (!selected.size > 5000000) {
      setImageError("Selected file size must be less than 500ks");
      return;
    }

    setImage(selected);
    setImageError(null);
  };

  //generate id with title name

  const GenerateId = (e) => {
    setTitle(e.target.value);
    setId(e.target.value.replace(/\s/g, "-"));
  };

  return (
    <>
      <Navbar handleSubmit={handleSubmit} response={response} />
      <div className="container mx-auto mt-20 flex flex-col md:flex-row gap-12 mb-20">
        <div className="flex flex-col gap-12 w-full md:w-1/2">
          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="title" className="text-xl font-bold tracking-wider">
              Title
            </label>
            <input
              value={title}
              required
              onChange={GenerateId}
              type="text"
              placeholder="Title"
              className="border border-solid p-3 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="title" className="text-xl font-bold tracking-wider">
              Tell Your Story
            </label>
            <TinyMC setBody={setBody} />
          </div>

          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="title" className="text-xl font-bold tracking-wider">
              Image for Your Post
            </label>
            <input
              type="file"
              required
              accept="image/png, image/gif, image/jpeg"
              className="border border-solid p-3 rounded-lg"
              onChange={handleAddImage}
            />
          </div>

          <div className="flex flex-col gap-5 w-full mb-32">
            <label htmlFor="title" className="text-xl font-bold tracking-wider">
              Category
            </label>
            <Select
              placeholder="Select Category"
              value={category}
              options={Categories}
              onChange={(options) => setCategory(options)}
            />
          </div>
        </div>

        {/* right side */}
        <div className="flex flex-col gap-12 w-full md:w-1/2">
          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="title" className="text-xl font-bold tracking-wider">
              Brief
            </label>
            <input
              required
              value={brief}
              onChange={(e) => setBrief(e.target.value)}
              type="text"
              placeholder="Brief"
              className="border border-solid p-3 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="title" className="text-xl font-bold tracking-wider">
              Time to read
            </label>
            <input
              required
              value={time}
              onChange={(e) => setTime(e.target.value)}
              type="number"
              placeholder="Time to read"
              className="border border-solid p-3 rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-5 w-full">
            <label htmlFor="title" className="text-xl font-bold tracking-wider">
              ID
            </label>
            <input
              required
              value={Id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              placeholder="ID"
              className="border border-solid p-3 rounded-lg"
            />
          </div>
          {error && (
            <p className="bg-red-200 p-2 rounded-lg text-center text-xl">
              Fill all the fields
            </p>
          )}
          {imageError && (
            <p className="bg-red-200 p-2 rounded-lg text-center text-xl">
              Failed Uploading Image
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Create;

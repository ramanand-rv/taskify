"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import { add } from "@/app/utils/Icons";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";

function CreateContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  const { theme, allTasks, closeModal } = useGlobalState();

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "important":
        setImportant(e.target.checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const task = {
      title,
      description,
      date,
      completed,
      important,
    };

    try {
      const res = await axios.post("/api/tasks", task);

      if (res.data.error) {
        toast.error(res.data.error);
      }

      if (!res.data.error) {
        toast.success("Task created successfully.");
        closeModal();
      }
      allTasks();
    } catch (error) {
      toast.error("Something went wrong.");
      // console.log(error);
    }

  };

  return (
    <CreateContentStyled onSubmit={handleSubmit} theme={theme}>

      <div className=" relative w-ful text-center font-extrabold text-xl items-center justify-center flex">
        <h1 className=" w-1/2 rounded-2xl border-[2px] border-slate-500
          bg-gradient-to-r from-gray-700 via-gray-900 to-black
          hover:bg-gradient-to-l
          ">Create a task</h1>
      </div>

      <div className="">
        <div className="input-control">

          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            name="title"
            onChange={handleChange("title")}
            placeholder="e.g, Watch a video from Fireship."
          />
        </div>

        <div className="input-control">
          <label htmlFor="description">Description</label>
          <textarea
            value={description}
            onChange={handleChange("description")}
            name="description"
            id="description"
            rows={4}
            placeholder="e.g, Watch a video about Next.js Auth"
          >
          </textarea>
        </div>

        <div className="input-control">
          <label htmlFor="date">Date</label>
          <input
            value={date.toString()}
            onChange={handleChange("date")}
            type="date"
            name="date"
            id="date"
          />
        </div>

        <div className="input-control toggler select-none
        ">
          <label
            htmlFor="completed">Completed</label>
          <input
            value={completed.toString()}
            onChange={handleChange("completed")}
            type="checkbox"
            name="completed"
            id="completed"
          />
        </div>

        <div className="input-control toggler select-none">
          <label htmlFor="important">Important</label>
          <input
            value={important.toString()}
            onChange={handleChange("important")}
            type="checkbox"
            name="important"
            id="important"
          />
        </div>

        <div className=" input-control submit-btn flex justify-center gap-1">
          <button className=" flex items-center justify-center gap-2">
            <div className="add-icon text-xl">{add}</div> <span className="text-xl">Create</span>
          </button>
        </div>

      </div>

    </CreateContentStyled>
  );
}

const CreateContentStyled = styled.form`
padding: 2rem;

button {
 border: 2px solid #21b1fd;
 background-color: #0071e2;
 border-radius: 0.9em;
 padding: 0.8em 1.2em 0.8em 1em;
 transition: all ease-in-out 0.2s;
 font-size: 16px;
}

button span {
 display: flex;
 justify-content: center;
 align-items: center;
 color: #fff;
 font-weight: 600;
}

button:hover {
 background-color: #0031b1;
  border: 2px solid #21b1fd;

}

  
  box-shadow: 0, 0, 1rem rgba(0, 0, 0, 0.4);
  border-radius: ${(props) => props.theme.borderRadiusMd2};

  color: ${(props) => props.theme.colorGrey1};

  .input-control {
    position: relative;
    margin: 1.2rem 0;
    font-weight: 500;
    padding-left: 32px;
    padding-right: 32px;

    @media screen and (max-width: 450px) {
      margin: 1rem 0;
    }

    label {
      display: inline-block;
      font-size: clamp(0.9rem, 5vw, 1.2rem);

      span {
        color: ${(props) => props.theme.colorGrey3};
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;
      border: none;
      padding: 1rem;
      resize: none;

      resize: none;
      background-color: ${(props) => props.theme.colorGreyDark};
      color: ${(props) => props.theme.colorGrey2};
      border-radius: 0.5rem;
    }
  }

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    label {
      flex: 1;
      transition: all ease-in-out 0.2s;
      cursor: pointer;
    }

    label:hover{
      color: #a99afd;
      transition: all ease-in-out 0.2s;

    }

    input {
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
    input:hover{
      transform: scale(1.5);
      transition: all ease-in-out 0.150s;

    }

  }
`;

export default CreateContent;
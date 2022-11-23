import React, { useState, useEffect } from "react";
import { users, createInt } from "../utilites/url";
import axios from "axios";
import { Button } from "@material-ui/core";
import DateTimePicker from "react-datetime-picker";

const CreateInterview = () => {
  const [loading, setLoading] = useState(true);
  const [emailsList, setEmails] = useState([]);
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [usersList, setUserList] = useState([]);

  useEffect(async () => {
    try {
      const getUsers = await axios.get("/users/read/");
      //const getUsers = await AxiosInstance.get()
      setLoading(false);
      setUserList(getUsers.data);
    } catch (e) {
      console.log("error");
    }
  }, []);

  const check = (email) => {
    return emailsList.includes(email);
  };

  const addEmail = (email) => {
    const dummylist = [...emailsList];
    dummylist.push(email);
    setEmails(dummylist);
  };

  const removeEmail = (email) => {
    const dummylist = emailsList.filter((item) => item != email);
    setEmails(dummylist);
  };
  const submit = async () => {
    try {
      if (startTime > endTime)
        return alert("Start time must be before end time");
      const UsersList = usersList.filter((item) =>
        emailsList.includes(item.email)
      );
      let request = {
        user: UsersList,
        startTime: startTime.getTime().toString(),
        endTime: endTime.getTime().toString(),
      };
      const response = await axios.post(createInt, request);
      const dummy = [];
      const start = new Date();
      const end = new Date();
      setEmails(dummy);
      setStartTime(start);
      setEndTime(end);
      alert("Interview was successfully created");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return loading ? (
    <div>Loading...Please wait.</div>
  ) : (
    <div className="p-10">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Create new Interview
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Add users</p>
      </div>
      {usersList.map((item, index) => (
        <div class="container px-5 py-5 mx-auto" key={index}>
          <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
              {item.email}
            </h1>
            {!check(item.email) && (
              <button
                class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                onClick={() => {
                  addEmail(item.email);
                }}
              >
                ADD
              </button>
            )}
            {check(item.email) && (
              <button
                class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
                onClick={() => {
                  removeEmail(item.email);
                }}
              >
                REMOVE
              </button>
            )}{" "}
          </div>
        </div>
      ))}
      <div className="text-center">
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
          Select Time
        </p>
        <p style={{ fontSize: "1rem" }}>Start Time:-</p>
        {<DateTimePicker onChange={setStartTime} value={startTime} />} <br />
        <p style={{ fontSize: "1rem" }}>End Time:-</p>
        {<DateTimePicker onChange={setEndTime} value={endTime} />} <br />
        <br />
        <Button variant="contained" color="primary" onClick={() => submit()}>
          Create Interview
        </Button>
      </div>
    </div>
  );
};

export default CreateInterview;

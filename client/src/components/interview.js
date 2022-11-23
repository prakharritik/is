import React from "react";

const Interview = ({ item, edit, unClickCheck, checkEditState }) => {
  const date = new Date(parseInt(item.startTime)).toLocaleDateString();
  const startTime = new Date(parseInt(item.startTime)).toLocaleTimeString(
    "en-IN",
    { hour12: false, hour: "numeric", minute: "numeric" }
  );
  const endTime = new Date(parseInt(item.endTime)).toLocaleTimeString("en-IN", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <div>
      <div class="py-8 flex flex-wrap md:flex-nowrap">
        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span class="font-semibold title-font text-gray-700">{date}</span>
          <span class="mt-1 text-gray-500 text-sm">
            {startTime} - {endTime}
          </span>
        </div>
        <div class="md:flex-grow">
          <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">
            Participants:
          </h2>
          {item.email.map((email, index) => (
            <p class="leading-relaxed" key={index}>
              {email}
            </p>
          ))}
          {edit && checkEditState(item) ? (
            <a
              class="text-indigo-500 inline-flex items-center mt-4"
              onClick={() => unClickCheck(item)}
            >
              Edit
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          ) : null}
        </div>
      </div>

      <hr />
    </div>
  );
};
export default Interview;

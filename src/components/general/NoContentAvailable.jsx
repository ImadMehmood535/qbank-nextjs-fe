import React from "react";
import { Comment } from "react-loader-spinner";

const NoContentAvailable = ({ noContentText }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[30vh]  bg-themeGray-0 p-8 rounded-lg w-full ">
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#C70048"
      />
      <p className="mt-4 text-gray-700 font-medium dark:text-gray-300">
        {noContentText}
      </p>
    </div>
  );
};

export default NoContentAvailable;

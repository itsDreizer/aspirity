import { IEmployee } from "@/types";
import React from "react";

interface IEmployeeInfoProps {
  employee: IEmployee | null;
}

const EmployeeInfo: React.FC<IEmployeeInfoProps> = (props) => {
  const { employee } = props;
  return (
    <div className="max-w-[350px] md:max-w-full text-center md:text-left mx-auto md:mx-0 flex flex-col md:grid md:grid-cols-[160px_1fr] items-center gap-y-4 md:gap-x-12 md:gap-y-2">
      <div className="relative">
        <button className="opacity-0 hover:opacity-50 transition-opacity absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center rounded-full">
          <img src="camera.svg" alt="camera" />
        </button>
        <img className="max-w-[100%]" src="my-avatar.png" alt="avatar" />
      </div>
      <div className="text-2xl sm:text-[2rem] md:text-[3rem] font-bold tracking-widest leading-snug  ">
        <div className="">{employee?.lastName}</div>
        <div className="">
          {employee?.firstName} {employee?.middleName}
        </div>
      </div>
      <div className="col-start-2 col-end-2">{employee?.position}</div>
      <div className="col-start-2 col-end-2 mt-2">
        {employee?.country}, {employee?.city} <span className="text-mainGray">• {employee?.time}</span>
      </div>
    </div>
  );
};

export default EmployeeInfo;

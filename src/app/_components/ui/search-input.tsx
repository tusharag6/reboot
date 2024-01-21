import React from "react";
import { Input } from "./input";
import { Button } from "./button";

const SearchInput = () => {
  return (
    <form className="mx-auto w-full px-4 py-8 text-center lg:px-44">
      <div className="flex items-center justify-center">
        <div className="flex w-full">
          <Input
            className="text-md h-12 rounded-r-none border-r-0"
            type="device-type"
            placeholder="Enter the type of device "
          />
          <Input
            className="text-md h-12 rounded-none"
            type="location"
            placeholder="Enter the location"
          />
          <Button type="submit" className="text-md h-12 rounded-l-none px-6">
            Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchInput;

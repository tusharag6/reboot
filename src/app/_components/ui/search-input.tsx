"use client";

import React, { useState } from "react";
import { LocationSearchInput } from "../location-search";
import { ItemSearchInput } from "../item-search";
import { Button } from "./button";

const SearchInput = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleSelectLocation = (selectedValue: string) => {
    setSelectedLocation(selectedValue);
  };

  const handleSelectItem = (selectedValue: string) => {
    setSelectedItem(selectedValue);
  };

  const handleSearch = () => {
    console.log("Selected Location:", selectedLocation);
    console.log("Selected Item:", selectedItem);
  };

  return (
    <div>
      <LocationSearchInput onSelectLocation={handleSelectLocation} />
      <ItemSearchInput onSelectItem={handleSelectItem} />
      <Button className="rounded-l-none" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchInput;

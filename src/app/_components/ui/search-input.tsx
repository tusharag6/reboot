"use client";

import React, { useCallback } from "react";
import { LocationSearchInput } from "../location-search";
import { ItemSearchInput } from "../item-search";
import { Button } from "./button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleSearch = () => {
    const location = sessionStorage.getItem("location") ?? "";
    const item = sessionStorage.getItem("item") ?? "";
    router.push(
      pathname +
        "facility?" +
        createQueryString("location", location) +
        "&" +
        createQueryString("item", item),
    );
    sessionStorage.clear();
  };

  return (
    <div>
      <LocationSearchInput />
      <ItemSearchInput />
      <Button className="rounded-l-none" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchInput;

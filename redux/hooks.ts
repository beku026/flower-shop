import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";
import { useState, useEffect } from "react";
import $api from "../utils/axios";
import { ICompaniesSlider, ISliderProductV2 } from "./types/product";
import { ApiResponse } from "./types/apiTypes";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const API_URL = "http://164.90.212.145/api/v1/";

export const useGetCompanies = () => {
  const [data, setData] = useState<ISliderProductV2[]>([]);

  const fetchCompany = async () => {
    const response: any = await $api
      .get<ApiResponse<ISliderProductV2>>("/companies/company/")
      .then((res) => res.data.results)

      .catch((err) => console.log(err));
    return setData(response);
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  return { data };
};

export const useGetCompaniesImage = () => {
  const [dataSlider, setDataSlider] = useState<ICompaniesSlider[]>([]);

  const fetchCompanySlider = async () => {
    const response: any = await $api
      .get<ApiResponse<ICompaniesSlider>>("/companies/company_image/")
      .then((res) => res.data.results)
      .catch((err) => console.log(err));
    return setDataSlider(response);
  };

  useEffect(() => {
    fetchCompanySlider();
  }, []);

  return { dataSlider };
};

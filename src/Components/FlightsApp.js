import React from "react";
import { FaPlaneArrival, FaPlaneDeparture, FaChild } from "react-icons/fa";

import { GiPerson } from "react-icons/gi";
import { useForm } from "react-hook-form";

const FlightsApp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-gray-200 w-auto h-auto pb-10 mt-5 mx-5 px-5 rounded-lg">
          <div className="h-24 flex justify-center items-center ">
            <p className="uppercase font-bold text-4xl text-center ">
              Flight Booking App
            </p>
          </div>
          {/*header section */}
          <div>
            <div>
              <div>
                <div className="flex space-x-8 mt-5">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className={`w-6 h-6 $ {errors.tripType && "focus:border-red-500 focus:ring-red-500 borfer-red-500"} `}
                      value="round trip"
                      {...register("tripType", {
                        required: {
                          value: true,
                          message: "Trip type is required ",
                        },
                      })}
                    />
                    <p className="text-xl font-bold ">Round trip</p>
                  </div>
                  {/*2 */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className={`w-6 h-6 $ {errors.tripType && "focus:border-red-500 focus:ring-red-500 borfer-red-500"} `}
                      value="one way"
                      {...register("tripType", {
                        required: {
                          value: true,
                          message: "Trip type is required ",
                        },
                      })}
                    />{" "}
                    <p className="text-xl font-bold ">One way</p>
                  </div>
                  {/*3 */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      className={`w-6 h-6 $ {errors.tripType && "focus:border-red-500 focus:ring-red-500 borfer-red-500"} `}
                      value="multy-city"
                      {...register("tripType", {
                        required: {
                          value: true,
                          message: "Trip type is required ",
                        },
                      })}
                    />
                    <p className="text-xl font-bold ">Multy-city</p>
                  </div>
                </div>
                <div>
                  {errors.tripType && (
                    <span className="text-sm text-red-500">
                      {errors.tripType.message}
                    </span>
                  )}
                </div>

                {/*body section*/}
                <div>
                  <div>
                    <div className="relative">
                      <p className="font-bold text-xl uppercase">Flying From</p>
                      <select
                        className={`w-full h-16 rounded-lg text-2xl pl-20 ${
                          errors.departure &&
                          "focus:border-red-500 focus:ring-red-500 border-red-500"
                        }`}
                        {...register("departure", {
                          required: {
                            value: true,
                            message: "Trip type is required ",
                          },
                        })}
                      >
                        <option value="selected disabled hidden">
                          --select Airport--
                        </option>
                        <option value="ENIA">
                          England newcastle international airport{" "}
                        </option>
                        <option value="INIA">
                          Italy naples international airport{" "}
                        </option>
                        <option value="MMA">Malaysia mulu airport</option>
                        <option value="KMA">Kenya malindi airport</option>
                      </select>
                      <FaPlaneDeparture className="text-4xl absolute left-5 top-10" />
                    </div>
                    <div>
                      {errors.departure && (
                        <span className="text-sm text-red-500">
                          {errors.departure.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/*departure section*/}
                <div>
                  <div>
                    <div>
                      <div className="relative">
                        <p className="font-bold text-xl uppercase">Flying to</p>
                        <select
                          className={`w-full h-16 rounded-lg text-2xl pl-20 ${
                            errors.arrival &&
                            "focus:border-red-500 focus:ring-red-500 border-red-500"
                          }`}
                          {...register("arrival", {
                            required: {
                              value: true,
                              message: " Arrival is required ",
                            },
                          })}
                        >
                          <option value="selected disabled hidden">
                            --select Airport--
                          </option>
                          <option value="ENIA">
                            England newcastle international airport{" "}
                          </option>
                          <option value="INIA">
                            Italy naples international airport{" "}
                          </option>
                          <option value="MMA">Malaysia mulu airport</option>
                          <option value="KMA">Kenya malindi airport</option>
                        </select>
                        <FaPlaneArrival className="text-4xl absolute left-5 top-10" />
                      </div>
                      <div>
                        {errors.arrival && (
                          <span className="text-sm text-red-500">
                            {errors.arrival.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {/*date */}
                  <div className="flex space-x-2">
                    <div>
                      <div>
                        <div>
                          <div className="relative">
                            <p className="font-bold text-xl uppercase">
                              departure date
                            </p>
                            <input
                              type="date"
                              className={`w-full h-16 rounded-lg text-2xl pl-20 ${
                                errors.departureDate &&
                                "focus:border-red-500 focus:ring-red-500 border-red-500"
                              }`}
                              {...register("departureDate", {
                                required: {
                                  value: true,
                                  message: " returnDate is required ",
                                },
                              })}
                            />
                          </div>
                          <div>
                            {errors.departureDate && (
                              <span className="text-sm text-red-500">
                                {errors.departureDate.message}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* arrival ssection*/}

                    <div>
                      <div>
                        <div>
                          <div className="relative">
                            <p className="font-bold text-xl uppercase">
                              {" "}
                              return date
                            </p>
                            <input
                              type="date"
                              className={`w-full h-16 rounded-lg text-2xl pl-20 ${
                                errors.returnDate &&
                                "focus:border-red-500 focus:ring-red-500 border-red-500"
                              }`}
                              {...register("returnDate", {
                                required: {
                                  value: true,
                                  message: " returnDate is required ",
                                },
                              })}
                            />
                          </div>
                          <div>
                            {errors.returnDate && (
                              <span className="text-sm text-red-500">
                                {errors.returnDate.message}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*adult*/}
                  <div className="flex space-x-2">
                    <div className="w-full">
                      <div>
                        <div className="relative">
                          <p className="font-bold text-xl uppercase">
                            adults (18+)
                          </p>
                          <select
                            className="w-full h-16 rounde-lg text-2xl pl-20"
                            {...register("adults", {
                              required: {
                                value: true,
                                message: "Adults is required ",
                              },
                            })}
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                          <GiPerson className="text-4xl absolute left-5 top-10" />
                        </div>
                      </div>
                    </div>
                    {/*children */}
                    <div className="w-full">
                      <div>
                        <div className="relative">
                          <p className="font-bold text-xl uppercase">
                            children (0-17)
                          </p>
                          <select
                            className="w-full h-16 rounded-lg text-2xl pl-20"
                            {...register("children", {
                              required: {
                                value: true,
                                message: "children is required ",
                              },
                            })}
                          >
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                          <FaChild className="text-4xl absolute left-5 top-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*classs and pricce*/}
                  <div className="flex space-x-2">
                    {/*classs section*/}
                    <div className="w-full">
                      <div>
                        <div>
                          <p className="font-bold text-xl uppercase">class</p>
                          <select
                            className="w-full h-16 rounded-lg text-2xl pl-20"
                            {...register("class", {
                              required: {
                                value: true,
                                message: "class is required ",
                              },
                            })}
                          >
                            <option>Economy</option>
                            <option>Business</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    {/*price section*/}
                    <div className="w-full">
                      <div>
                        <div>
                          <p className="font-bold text-xl uppercase">price</p>
                          <select
                            className="w-full h-16 rounded-lg text-2xl pl-20"
                            {...register("price", {
                              required: {
                                value: true,
                                message: "price is required ",
                              },
                            })}
                          >
                            <option>All prices </option>
                            <option>$1000</option>
                            <option>$2000</option>
                            <option>$3000</option>
                            <option>$4000</option>
                            <option>$5000</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*btn section*/}
                  <div>
                    <input
                      type="submit"
                      value="Find Flight"
                      className="w-full h-16 font-bold text-3xl uppercase rounded-lg bg-green-100 hover:bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FlightsApp;

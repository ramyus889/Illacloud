"use client";

import * as React from "react";

import { Button } from "@/components-ui/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components-ui/ui/dropdown-menu";

export default function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-0 hover:bg-transparent hover:text-white"
        >
          Solutions
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[320px] ms-[16em] p-5">
        <DropdownMenuLabel>Solutions by use case</DropdownMenuLabel>
        <DropdownMenuGroup value={position} onValueChange={setPosition}>
          <DropdownMenuItem value="top">
            <div className="flex  gap-5 my-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[54px] h-[54px] -mt-[10px]"
              >
                <g clipPath="url(#image-generator_svg__a)">
                  <rect
                    width="24"
                    height="24"
                    rx="6"
                    fill="url(#image-generator_svg__b)"
                  ></rect>
                  <rect
                    width="24"
                    height="24"
                    rx="6"
                    fill="url(#image-generator_svg__c)"
                  ></rect>
                  <path
                    d="M9.667 14.143 8.5 12.857 5 18h14l-5.833-9-3.5 5.143Z"
                    fill="#fff"
                    fillOpacity="0.6"
                  ></path>
                  <circle
                    cx="7"
                    cy="8"
                    r="2"
                    fill="#fff"
                    fillOpacity="0.6"
                  ></circle>
                </g>
                <defs>
                  <radialGradient
                    id="image-generator_svg__c"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(9 12 -12 9 3 12)"
                  >
                    <stop stopColor="#FF3BC8" stopOpacity="0.25"></stop>
                    <stop offset="1" stopColor="#FF1DF6" stopOpacity="0"></stop>
                  </radialGradient>
                  <linearGradient
                    id="image-generator_svg__b"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7E2EFF"></stop>
                    <stop offset="1" stopColor="#9225FF"></stop>
                  </linearGradient>
                  <clipPath id="image-generator_svg__a">
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="font-semibold text-[14px]">
                Al Image Generator <br />
                <span className="text-sm text-gray-400 text-[12px]">
                  Generate images with AI. Make the communication of ideas more
                  efficient.
                </span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem value="bottom">
            <div className="flex  gap-5 my-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[64px] h-[64px] -mt-[16px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.123 1.796a1.86 1.86 0 0 0-.421 1.178V15.956a7.027 7.027 0 0 0-2.79-.56c-3.08 0-5.579 1.873-5.579 4.185 0 2.311 2.5 4.184 5.58 4.184 2.87 0 5.236-1.627 5.544-3.72h.034V6.47L21 5.17v-3.31A1.86 1.86 0 0 0 18.776.035l-5.58 1.116a1.86 1.86 0 0 0-1.072.644Z"
                  fill="url(#voice-generator_svg__a)"
                ></path>
                <defs>
                  <linearGradient
                    id="voice-generator_svg__a"
                    x1="12.167"
                    y1="0"
                    x2="12.167"
                    y2="23.765"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BEFB11"></stop>
                    <stop offset="1" stopColor="#5CFB12"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="font-semibold text-[14px]">
                Al Voice Generator <br />
                <span className="text-sm text-gray-400 text-[12px]">
                  Translation and redubbing, enabling efficient production of
                  video content for diverse language regions.
                </span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem value="right">
            <div className="flex  gap-5 my-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[74px] h-[74px] -mt-[17px]"
              >
                <g clipPath="url(#dashboard_svg__a)">
                  <rect
                    width="24"
                    height="24"
                    rx="6"
                    fill="url(#dashboard_svg__b)"
                  ></rect>
                  <rect
                    width="24"
                    height="24"
                    rx="6"
                    fill="url(#dashboard_svg__c)"
                  ></rect>
                  <rect
                    x="3"
                    y="5"
                    width="8"
                    height="6"
                    rx="2"
                    fill="#fff"
                    fillOpacity="0.48"
                  ></rect>
                  <rect
                    x="3"
                    y="13"
                    width="8"
                    height="6"
                    rx="2"
                    fill="#fff"
                    fillOpacity="0.48"
                  ></rect>
                  <rect
                    x="13"
                    y="5"
                    width="8"
                    height="6"
                    rx="2"
                    fill="#fff"
                    fillOpacity="0.48"
                  ></rect>
                  <rect
                    x="13"
                    y="13"
                    width="8"
                    height="6"
                    rx="2"
                    fill="#fff"
                    fillOpacity="0.48"
                  ></rect>
                </g>
                <defs>
                  <radialGradient
                    id="dashboard_svg__c"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(9 12 -12 9 3 12)"
                  >
                    <stop stopColor="#6EFF3B" stopOpacity="0.35"></stop>
                    <stop offset="1" stopColor="#FF1DF6" stopOpacity="0"></stop>
                  </radialGradient>
                  <linearGradient
                    id="dashboard_svg__b"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#2E8EFF"></stop>
                    <stop offset="1" stopColor="#25B1FF"></stop>
                  </linearGradient>
                  <clipPath id="dashboard_svg__a">
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="font-semibold text-[14px]">
                Data Analysis Dashboard <br />
                <span className="text-sm text-gray-400 text-[12px]">
                  Build comprehensive data analysis dashboards and drive your
                  business growth with minimal investment.
                </span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem value="right2">
            <div className="flex  gap-5 my-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[64px] h-[64px] -mt-[10px]"
              >
                <g clipPath="url(#cms_svg__a)">
                  <rect
                    width="24"
                    height="24"
                    rx="6"
                    fill="url(#cms_svg__b)"
                  ></rect>
                  <circle
                    cx="6"
                    cy="8"
                    r="3"
                    fill="#fff"
                    fillOpacity="0.5"
                  ></circle>
                  <circle
                    cx="6"
                    cy="16"
                    r="3"
                    fill="#fff"
                    fillOpacity="0.5"
                  ></circle>
                  <rect
                    x="11"
                    y="6"
                    width="10"
                    height="4"
                    rx="2"
                    fill="#fff"
                    fillOpacity="0.5"
                  ></rect>
                  <rect
                    x="11"
                    y="14"
                    width="10"
                    height="4"
                    rx="2"
                    fill="#fff"
                    fillOpacity="0.5"
                  ></rect>
                </g>
                <defs>
                  <linearGradient
                    id="cms_svg__b"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E7A704"></stop>
                    <stop offset="1" stopColor="#EBC604"></stop>
                  </linearGradient>
                  <clipPath id="cms_svg__a">
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="font-semibold text-[14px]">
                Content Management <br />
                <span className="text-sm text-gray-400 text-[12px]">
                  Deliver consistent content experiences across any platform,
                  web or mobile app
                </span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem value="right3">
            <div className="flex  gap-5 my-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[37px] h-[37px] mt-[2px]"
              >
                <g clipPath="url(#crm_svg__a)">
                  <rect
                    width="24"
                    height="24"
                    rx="6"
                    fill="url(#crm_svg__b)"
                  ></rect>
                  <rect
                    x="11"
                    y="3"
                    width="10"
                    height="4"
                    rx="2"
                    fill="#fff"
                    fillOpacity="0.5"
                  ></rect>
                  <rect
                    x="11"
                    y="10"
                    width="10"
                    height="10"
                    rx="2"
                    fill="#fff"
                    fillOpacity="0.5"
                  ></rect>
                  <path
                    d="M0 6a6 6 0 0 1 6-6h2v24H6a6 6 0 0 1-6-6V6Z"
                    fill="#fff"
                    fillOpacity="0.5"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id="crm_svg__b"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#06D7CA"></stop>
                    <stop offset="1" stopColor="#008C9F"></stop>
                  </linearGradient>
                  <clipPath id="crm_svg__a">
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
              <div className="font-semibold text-[14px]">
                Sales CRM <br />
                <span className="text-sm text-gray-400 text-[12px]">
                  Better sales CRM solution to close deals faster
                </span>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem value="right4">
            <div className="flex  gap-5 my-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[45px] h-[45px]"
              >
                <circle
                  cx="12"
                  cy="5"
                  r="5"
                  fill="url(#admin-panel_svg__a)"
                ></circle>
                <path
                  d="M23 19.993c0 4.414-4.925 3.996-11 3.996s-11 .418-11-3.996S5.925 12 12 12s11 3.579 11 7.993Z"
                  fill="url(#admin-panel_svg__b)"
                ></path>
                <defs>
                  <linearGradient
                    id="admin-panel_svg__a"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="10"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF61AD"></stop>
                    <stop offset="1" stopColor="#E210C0"></stop>
                  </linearGradient>
                  <linearGradient
                    id="admin-panel_svg__b"
                    x1="12"
                    y1="12"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FF61AD"></stop>
                    <stop offset="1" stopColor="#E210C0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="font-semibold text-[14px]">
                Admin Panel <br />
                <span className="text-sm text-gray-400 text-[12px]">
                  Build admin panels at 10x speed to manage data or perform
                  operations
                </span>
              </div>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

"use client";
import React, { useState } from "react";
import Settings from "../../components/Setting";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex gap-1  mb-28">
      <Settings />
      <div className="bg-white w-9/12 p-4">
        <p className="promotionName">Notifications</p>
        <div className="mt-5">
          <h1 className="text-gray-900 font-semibold text-xl">
            Email notifications
          </h1>
          <p className="promotionContent mt-3">
            Get emails to find out what’s going on when you’re not online. You
            can turn them off anytime.
          </p>
        </div>

        <div className="grid grid-cols-2 mt-12">
          <div>
            <h1 className="settingfont">Notifications from us</h1>
            <p className="promotionContent w-8/12">
              Receive the latest news, updates and industry tutorials from us.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 rounded-full text-red-500 accent-red-500"
              />

              <div>
                <h1 className="settingfont">News and updates</h1>
                <p className="promotionContent w-full">
                  News about product and feature updates.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 rounded-full text-red-500 accent-red-500"
              />

              <div>
                <h1 className="settingfont">Tips and tutorials</h1>
                <p className="promotionContent w-full">
                  Tips on getting more out of Untitled.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 rounded-full text-red-500 accent-red-500"
              />

              <div>
                <h1 className="settingfont">User research</h1>
                <p className="promotionContent w-full">
                  Get involved in our beta testing program or participate in
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-12">
          <div>
            <h1 className="settingfont">Reminders</h1>
            <p className="promotionContent w-8/12">
              These are notifications to remind you of updates you might have
              missed.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 rounded-full text-red-500 accent-red-500"
              />

              <div>
                <h1 className="settingfont">Do not notify me</h1>
                {/* <p className="promotionContent w-full">
                    News about product and feature updates.
                  </p> */}
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 rounded-full text-red-500 accent-red-500"
              />

              <div>
                <h1 className="settingfont">Important reminders only</h1>
                <p className="promotionContent w-full">
                  Only notify me if the reminder is tagged as important.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 rounded-full text-red-500 accent-red-500"
              />

              <div>
                <h1 className="settingfont">All reminders</h1>
                <p className="promotionContent w-full">
                  Notify me for all reminders.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-12">
          <div>
            <h1 className="settingfont">Promotions</h1>
            <p className="promotionContent w-8/12">
              These are notifications for promotions update that have best
              offered.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 rounded-full text-red-500 accent-red-500"
              />

              <div>
                <h1 className="settingfont">Do not notify me</h1>
                {/* <p className="promotionContent w-full">
                  News about product and feature updates.
                </p> */}
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 rounded-full text-red-500 accent-red-500"
              />

              <div>
                <h1 className="settingfont">Important reminders only</h1>
                <p className="promotionContent w-full">
                  Only notify me if the reminder is tagged as important.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 rounded-full text-red-500 accent-red-500"
              />

              <div>
                <h1 className="settingfont">All reminders</h1>
                <p className="promotionContent w-full">
                  Notify me for all reminders.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-12">
          <div>
            <h1 className="settingfont">More activity about you</h1>
            <p className="promotionContent w-8/12">
              These are notifications for posts on your profile, likes and other
              reactions to your posts, and more.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row gap-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 rounded-full text-red-500 accent-red-500"
              />

              <div>
                <h1 className="settingfont">Do not notify me</h1>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 rounded-full text-red-500 accent-red-500"
              />

              <div>
                <h1 className="settingfont">All reminders</h1>
                <p className="promotionContent w-full">
                  Notify me for all other activity.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 rounded-full text-red-500 accent-red-500"
              />

              <div>
                <h1 className="settingfont">News and updates</h1>
                <p className="promotionContent w-full">
                  News about product and feature updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

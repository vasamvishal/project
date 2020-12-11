import React from "react";
import KitchenIcon from "@material-ui/icons/Kitchen";
import RouterIcon from "@material-ui/icons/Router";
import AlbumIcon from "@material-ui/icons/Album";
import "./Black.css";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BrowserService from "./BrowserService";

import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import { NavLink } from "react-router-dom";

export default function Black() {
  return (
    <ul className="headerExample">
      <li>
        <NavLink
          to={{
            pathname: "/home",
            aboutProps: "headerIcon",
          }}
        >
          <HomeIcon size="large" />
        </NavLink>
      </li>
      <li class="disabled">
        <NavLink
          to={{
            pathname: "/none",
            aboutProps: "headerIcon",
          }}
        >
          <RouterIcon size="large" />
        </NavLink>
      </li>
      <li class="disabled">
        <NavLink
          to={{
            pathname: "/about",
            aboutProps: "headerIcon",
          }}
        >
          <AlbumIcon size="large" />
        </NavLink>
      </li>

      <li class="disabled">
        <NavLink
          to={{
            pathname: "/about",
            aboutProps: "headerIcon",
          }}
        >
          <KitchenIcon size="large" />
        </NavLink>
      </li>
      <li class="disabled">
        <NavLink
          to={{
            pathname: "/about",
            aboutProps: "headerIcon",
          }}
        >
          <EmojiObjectsIcon size="large" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to={{
            pathname: "/",
            aboutProps: "headerIcon",
          }}
        >
          <ExitToAppIcon
            size="large"
            onClick={() => {
              BrowserService.deleteLocalStorageItem("user");
            }}
          />
        </NavLink>
      </li>
    </ul>
  );
}

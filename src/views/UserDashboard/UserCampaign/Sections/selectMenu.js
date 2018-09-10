import MenuItem from "@material-ui/core/MenuItem";
import React from "react";

const selectMenuItem = (selectMenuItem, selectMenuItemSelected) => {
  return(
    [
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Agriculture">
        Agriculture
      </MenuItem>,
      <MenuItem
        classes={{
        root: selectMenuItem,
        selected: selectMenuItemSelected
        }}
      value="Chemical">
        Chemical
    </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Pharmaceutical">
        Pharmaceutical
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Computer">
        Computer
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Software">
        Software
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Education">
        Education
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Construction">
        Construction
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Electrical">
        Electrical
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Engineering">
        Engineering
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Energy">
        Energy
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Financial">
        Financial
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Food">
        Food
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Hospitality">
        Hospitality
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="ICT">
        ICT
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Engineering">
        Engineering
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Media">
        Media
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Mining">
        Mining
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Telecoms">
        Telecoms
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Transport">
        Transport
      </MenuItem>,
      <MenuItem
        classes={{
          root: selectMenuItem,
          selected: selectMenuItemSelected
        }}
        value="Buying & Selling">
        Buying & Selling
      </MenuItem>,
    ]
  );
};

export default selectMenuItem

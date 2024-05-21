import React,{useCallback} from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import FoodAppBar from "./Components/foodappbar";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import "./Css/foodordering.css";
import foodData from "./Data/Foodmenu";
import foodorder from "./Data/Foodorder";

const filter = createFilterOptions();
function ResponsiveAppBar() {
  const [value, setValue] = React.useState(null);

  const FoodCategory = [{ title: "อาหารเช้า" }, { title: "ของหวาน" }];
  const FoodCategory2 = [{ title: "ไข่" }, { title: "หมูผัด" }];

  const StyledButton = styled(Button)({
    marginTop: "0%",
    marginLeft: "22%",
    textTransform: "none",
    fontSize: 18,
    padding: "12px 36px",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
    border: "none",
    lineHeight: 1.5,
    backgroundColor: "rgb(255,206,53)",
    color: "black",
    fontFamily: "kanit",
    fontWeight: 700,
    borderBottom: "2px solid transparent",
    "&:hover": {
      backgroundColor: "orange",
      color: "blakc",
    },
    "&.Mui-selected": {
      backgroundColor: "orange",
      color: "black",
    },
  });

  function FoodCard({ foodItem }) {
    function handClicked() {
      
      foodorder.push(foodItem);
      console.log(foodorder);
    }
  
    return (
      <div className="card" onDoubleClick={handClicked}>
        <img src={foodItem.image} alt={foodItem.name} />
        <div className="card-info">
          <p>{foodItem.price} บาท</p>
          <h3>{foodItem.name}</h3>
        </div>
      </div>
    );
  }
  

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12}>
        <FoodAppBar></FoodAppBar>
      </Grid>
      <Grid item xs={12} md={6}>
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              setValue({
                title: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);

            const { inputValue } = params;
            const isExisting = options.some(
              (option) => inputValue === option.title
            );
            if (inputValue !== "" && !isExisting) {
              filtered.push({
                inputValue,
                title: `Add "${inputValue}"`,
              });
            }

            return filtered;
          }}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          id=""
          options={FoodCategory2}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          sx={{ width: 500, ml: 35, mt: 15 }}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="ค้นหาเมนูอาหาร"
              InputLabelProps={{ sx: { fontFamily: "kanit" } }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Autocomplete
          id=""
          options={FoodCategory}
          getOptionLabel={(option) => option.title}
          // filterOptions={filterOptions}
          sx={{ width: 500, ml: 0, mt: 15 }}
          renderInput={(params) => (
            <TextField
              {...params}
              // label="ค้นหาประเภทอาหาร"
              placeholder="ค้นหาประเภทอาหาร"
              InputLabelProps={{ sx: { fontFamily: "kanit" } }}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={8}>
        <StyledButton>ทั้งหมด</StyledButton>
      </Grid>
      <Divider />
      <Grid container spacing={1}>
        <div className="food-grid">
          {foodData.map((foodItem) => (
            <FoodCard key={foodItem.id} foodItem={foodItem} />
          ))}
        </div>
      </Grid>
    </Grid>
  );
}
export default ResponsiveAppBar;

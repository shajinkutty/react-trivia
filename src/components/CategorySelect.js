import { useContext } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";
import { OptionContext } from "../context/OptionsContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "80%",
    marginTop: theme.spacing(5),
  },
  btn: {
    marginTop: theme.spacing(2),
    width: theme.spacing(15),
  },
}));

const categories = [
  { id: 0, title: "Any Category" },
  { id: 9, title: "General Knowledge" },
];

export default function CategorySelect() {
  const classes = useStyles();
  const { category, setCategory } = useContext(OptionContext);
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel>Category</InputLabel>
      <Select
        label="Category"
        name="name"
        value={category}
        className={classes.select}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((category) => (
          <MenuItem key={category.id} value={category.id}>
            {category.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

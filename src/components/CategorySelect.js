import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../redux/actions";

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
  { id: 10, title: "Entertainment: Books" },
  { id: 11, title: "Entertainment: Film" },
  { id: 12, title: "Entertainment: Music" },
  { id: 13, title: "Entertainment: Musicals &amp; Theatres" },
  { id: 14, title: "Entertainment: Television" },
  { id: 15, title: "Entertainment: Video Games" },
  { id: 16, title: "Entertainment: Board Games" },
  { id: 17, title: "Science &amp; Nature" },
  { id: 18, title: "Science: Computers" },
  { id: 19, title: "Science: Mathematics" },
  { id: 20, title: "Mythology" },
  { id: 21, title: "Sports" },
  { id: 22, title: "Geography" },
  { id: 23, title: "History" },
  { id: 24, title: "Politics" },
  { id: 25, title: "Art" },
  { id: 26, title: "Celebrities" },
  { id: 27, title: "Animals" },
  { id: 28, title: "Vehicles" },
  { id: 29, title: "Entertainment: Comics" },
  { id: 30, title: "Science: Gadgets" },
  { id: 31, title: "Entertainment: Japanese Anime &amp; Manga" },
  { id: 32, title: "Entertainment: Cartoon &amp; Animations" },
];

export default function CategorySelect() {
  const classes = useStyles();
  const { category } = useSelector((state) => state.trivia);
  const dispatch = useDispatch();
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel>Category</InputLabel>
      <Select
        label="Category"
        name="name"
        value={category}
        className={classes.select}
        onChange={(e) => dispatch(selectCategory(e.target.value))}
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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import { getContrat } from '../redux/reducers/contractsInfoReducers';
import { selectContrats } from '../redux/selectors/contractsInfoSelector';

const SIZE_OF_ID_BEFORE_API_CALL = 5;
let prevValue = '';
let prevAdossement = '';

function sendDate(func, value) {
  func(value);
} 

function renderInput(inputProps, func) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      onChange={sendDate(func, inputProps.inputProps.value)}
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestionProps) {
  const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}

function getSuggestions(value, adossement, dispatch, contrats = {}) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;

  if (inputLength < SIZE_OF_ID_BEFORE_API_CALL) {
    return [];
  }

  if (inputLength >= SIZE_OF_ID_BEFORE_API_CALL) {
    if (prevAdossement !== adossement || (prevAdossement === adossement && prevValue !== value))
      dispatch(getContrat(adossement, value));
    prevValue = value;
    prevAdossement = adossement;
  }
  return contrats.map(element => { return {"label": element.ContratNumref} });
}

const useStyles = makeStyles(theme => ({
  colors: {
    white: '#e1f5fe'
  },
  root: {
    flexGrow: 1,
    height: 250,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'relative',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
  inputInput: {
    width: 'auto',
    flexGrow: 1,
  },
  divider: {
    height: theme.spacing(2),
  },
}));

export default function Autocomplete(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const contrats = useSelector(selectContrats);

  return (
      <Downshift id="downshift-simple">
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
        }) => {
          const { onBlur, onFocus, ...inputProps } = getInputProps({
            placeholder: 'Numéro de contrat',
          });

          return (
            
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onFocus },
                inputProps,
                disabled: props.disabled,
              }, props.function)}

              <div {...getMenuProps()}>
                  {isOpen ? (
                    <Paper className={classes.paper} square>
                      {getSuggestions(inputValue, props.adossement, dispatch, contrats).map((suggestion, index) =>
                        renderSuggestion({
                          suggestion,
                          index,
                          itemProps: getItemProps({ item: suggestion.label }),
                          highlightedIndex,
                          selectedItem,
                        }),
                      )}
                    </Paper>
                ) : null}
              </div>
            </div>
          );
        }}
      </Downshift>
  
  );
}
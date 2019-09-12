import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { selectPage } from "../redux/selectors/viewSelector";
import { HOME_PAGE, POURQUOI_REACT, DEMO } from "../utils/constants";
import { setPage } from "../redux/reducers/viewReducer";

function selectOnglet(page) {
    switch (page) {
        case POURQUOI_REACT:
            return 0;
        case DEMO:
            return 1;
        default:
            return 0;
    }
}

export default function Onglets() {
    const dispatcher = useDispatch();
    const page = useSelector(state => selectPage(state));
    const onglet = selectOnglet(page);
    let [value, setValue] = React.useState(onglet);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div>
            {page === HOME_PAGE ?
                <Tabs
                    value={false}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Pourquoi React" onClick={() => dispatcher(setPage(POURQUOI_REACT))} />
                    <Tab label="Démo" onClick={() => dispatcher(setPage(DEMO))} />
                </Tabs> :
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    indicatorColor="primary"
                    textColor="primary"
                >
                    <Tab label="Pourquoi React" onClick={() => dispatcher(setPage(POURQUOI_REACT))} />
                    <Tab label="Démo" onClick={() => dispatcher(setPage(DEMO))} />
                </Tabs>
            }

        </div>
    );
}
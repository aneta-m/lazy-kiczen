import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import GrouppedList from '../GrouppedList/GrouppedList';

const SearchForm = ({ hasSelect, selectList }) => {

    if (hasSelect) {

        return (
            <form className="search-form search-form--has-select">
                {/* <CustomInputShit onChanged={handleValueChanged} label="abc" group="bcd" name="name" value="{formState.fieldName.value}" /> */}

                <input className="input search-form__input" type="text" placeholder="Search for meals" />
                <Dropdown renderBtn={{ text: "Choose filters", type: "bg-white" }}>
                    <GrouppedList type="centered" list={selectList} definitions={{ title: "categoryName", itemsList: "list", groupId: "categoryId" }} gaps="lg" itemsConvertType="checkbox"></GrouppedList>
                </Dropdown>
                <input className="btn btn--primary" type="submit" value="Search" />
            </form>
        );
    }
    return (
        <form className="search-form search-form--short">
            <input className="search-form__input input" type="text" placeholder="Search for meals"
                size="15" />
            <button className="btn btn--primary" value="Search"><i
                className="fas fa-search btn__icon"></i></button>
        </form>
    );
};

// const [formState, setFormState] = React.useState({
//     fieldName: null,
//     field2: null,
//     groupe: {
//         field3: null,
//     }
// });


// const checkboxList = selectList.map(item => {
//     return {
//         name: item.name,
//         list: item.list.map(item => <Checkbox name={item.name} checked={item.checked} type="simple" />)
//     };
// });

// const handleValueChanged = ({ group, name, value, element, event }) => {
//     console.log('group', group);
//     console.log('name', name);
//     console.log('value', value);
//     console.log('element', element);
//     console.log('event', event);

//     /* local form state with all fields */
//     setFormState({
//         ...formState,
//         [name]: value
//     });
// };

export default SearchForm;

import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import GrouppedList from '../GrouppedList/GrouppedList';
import Checkbox from '../Checkbox/Checkbox';

const SearchForm = ({ hasSelect, selectList }) => {

    if (hasSelect) {

        const newList = selectList.map(categoryGroup => {
            console.log(categoryGroup.list);
            categoryGroup.list = categoryGroup.list.map(listItem => {
                listItem.component = <Checkbox name={listItem.name} group={categoryGroup.categoryName} type="transparent"></Checkbox>;
                return listItem;
            });
            return categoryGroup;
        });

        console.log(newList);

        return (
            <form className="search-form search-form--has-select">
                {/* <CustomInputShit onChanged={handleValueChanged} label="abc" group="bcd" name="name" value="{formState.fieldName.value}" /> */}

                <input className="input search-form__input" type="text" placeholder="Search for meals" />
                <Dropdown renderBtn={<button className="btn btn--bg-white">Choose filters<i className="fas fa-chevron-down btn__icon"></i></button>}>
                    <GrouppedList type="centered" list={newList} definitions={{ title: "categoryName", itemsList: "list" }} gaps="lg"></GrouppedList>
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


//ZROBIĆ GROUPPED LIST I CHECKBOXY DO LISTY CATEGORIES.JSON

export default SearchForm;

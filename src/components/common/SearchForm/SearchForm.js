import React, { useState, useEffect } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import GrouppedList from '../GrouppedList/GrouppedList';
import Button from '../Button/Button';

const SearchForm = ({ hasSelect, selectList }) => {

    //select List i filters są z globalState
    // po tym jak zrobie global state, trzeba przerobić funkcję, żeby miała filters i select list z global state

    const [filters, setFilters] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => console.log(filters));

    const [categoriesMappedWithCheckedProp, setCategoriesMappedWithCheckedProp] = useState(mapCategoriesWithFilters(selectList, filters));

    function handleChange(e) {
        setSearchText(e.target.value);
    }

    function handleCheckboxChange(item) {
        const updatedFilters = updatefilters(filters, item);
        const updatedSelectList = mapCategoriesWithFilters(selectList, updatedFilters);
        setFilters(updatedFilters);
        setCategoriesMappedWithCheckedProp(updatedSelectList);
    }

    function updatefilters(filters, item) {
        const { id, groupId } = item;
        const groupIndex = filters.findIndex(filterItem => filterItem.categoryId === groupId);
        return (
            item.value ? addItem(filters, groupIndex, item) : removeItem(filters, groupIndex, id)
        );
    }

    function addItem(filters, groupIndex, item) {
        (groupIndex > -1 ? filters[groupIndex].categoryList.push(item.id) : filters.push({ categoryId: item.groupId, categoryList: [item.id] }));
        return filters;
    }

    function removeItem(filters, groupIndex, id) {
        const categoryList = filters[groupIndex].categoryList;
        const isLastItemInCategory = (categoryList.length === 1);

        if (isLastItemInCategory) {
            filters.splice(groupIndex, 1);
        } else {
            const itemIndex = categoryList.indexOf(id);
            categoryList.splice(itemIndex, 1);
        }
        return filters;
    }

    function mapCategoriesWithFilters(selectList, filters) {
        return selectList.map(selectGroup => {

            const groupIndexInFilters = filters.findIndex(filteredItem => filteredItem.categoryId === selectGroup.categoryId);
            const isGroupFiltered = groupIndexInFilters > -1;

            selectGroup.list = selectGroup.list.map(selectItem => {
                if (isGroupFiltered) {
                    const isChecked = filters[groupIndexInFilters].categoryList.some((item) => item.id === selectItem.id);
                    return ({ ...selectItem, checked: isChecked });
                }
                return ({ ...selectItem, checked: false });
            });
            return selectGroup;
        });
    };

    function submitSearch(e) {
        e.preventDefault();
        console.log("submit search");
    }


    if (hasSelect) {
        return (
            <form className="search-form search-form--has-select">
                <input className="input search-form__input" type="text" placeholder="Search for meals" value={searchText} onChange={handleChange} />
                <Dropdown renderBtn={{ text: "Choose filters", type: "bg-white" }}>
                    <GrouppedList
                        type="centered"
                        list={categoriesMappedWithCheckedProp}
                        definitions={{ title: "categoryName", itemsList: "list", groupId: "categoryId" }}
                        gaps="lg"
                        itemsConvertType="checkbox"
                        eventHandler={handleCheckboxChange}>
                    </GrouppedList>
                </Dropdown>
                <Button type="primary" onClick={submitSearch}>Search</Button>
            </form>
        );
    }
    return (
        <form className="search-form search-form--short">
            <input className="search-form__input input" type="text" placeholder="Search for meals"
                size="15" />
            <Button type="primary" onClick={submitSearch}><i
                className="fas fa-search btn__icon"></i></Button>
        </form>
    );
};

export default SearchForm;
